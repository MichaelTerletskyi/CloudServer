package com.cloud.server.backend.services.models.files.impls;

import com.cloud.server.backend.exceptions.FileNotFoundException;
import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.models.files.FileDto;
import com.cloud.server.backend.models.files.FileTag;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.files.FileRepository;
import com.cloud.server.backend.services.models.files.FileService;
import com.cloud.server.backend.services.models.files.MultipartFilesProcessor;
import com.cloud.server.backend.services.models.users.UserService;
import com.cloud.server.backend.utils.FilesUtils;
import com.drew.imaging.ImageMetadataReader;
import com.drew.imaging.ImageProcessingException;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigInteger;
import java.sql.*;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 * @Create 4/15/2022
 * @Author Michael Terletskyi
 * @Extends of {@link FileService} class.
 */

@Service
public class FileServiceImpl extends FileService<File> {
    private final Environment env;
    private final TransactionTemplate template;
    private final FileRepository fileRepository;
    private final UserService userService;

    @Autowired
    public FileServiceImpl(Environment env, TransactionTemplate template, FileRepository fileRepository, UserService userService) {
        this.env = env;
        this.template = template;
        this.fileRepository = fileRepository;
        this.userService = userService;
    }

    @Override
    public File getById(Long id) {
        return fileRepository.findById(id).orElseThrow(FileNotFoundException::new);
    }

    @Override
    public List<File> getAll() {
        return fileRepository.findAll();
    }

    @Override
    public File save(File file) {
        return fileRepository.save(file);
    }

    @Override
    public File update(File file) {
        return fileRepository.save(file);
    }

    @Override
    public boolean hasId(File file) {
        return ObjectUtils.isNotEmpty(file);
    }

    @Override
    public void deleteById(Long id) {
        fileRepository.deleteById(id);
    }

    @Override
    public void delete(File file) {
        fileRepository.delete(file);
    }

    @Override
    public boolean isExistById(Long id) {
        return fileRepository.existsById(id);
    }

    @Override
    public Set<File> getAllByUserId(Long id) {
        return fileRepository.findAllByUserId(id);
    }

    public Set<FileDto> getAllFilesMetadataByUserId(Long id) {
        Set<FileDto> files = new LinkedHashSet<>();
        try {
            String driverClassName = env.getProperty("spring.datasource.driver-class-name");
            String datasourceUrl = env.getProperty("spring.datasource.url");
            String username = env.getProperty("spring.datasource.username");
            String password = env.getProperty("spring.datasource.password");

            Class.forName(driverClassName);
            try (Connection connection = DriverManager.getConnection(datasourceUrl, username, password)) {
                String query = "SELECT file_id, content_type, file_name, original_file_name, size_in_bytes, date_of_upload, date_of_last_update, user_id FROM files WHERE user_id = ?";
                try (PreparedStatement preparedStatement = connection.prepareStatement(query)) {
                    preparedStatement.setLong(1, id);
                    ResultSet resultSet = preparedStatement.executeQuery();
                    while (resultSet.next()) {
                        long fileId = resultSet.getLong("file_id");
                        String contentType = resultSet.getString("content_type");
                        String fileName = resultSet.getString("file_name");
                        String originalFilename = resultSet.getString("original_file_name");
                        String strSize = resultSet.getString("size_in_bytes");
                        BigInteger sizeInBytes = new BigInteger(strSize.substring(0, strSize.length() - 3));
                        LocalDateTime dateOfUpload = resultSet.getTimestamp(6).toLocalDateTime();
                        LocalDateTime dateOfLastUpdate = resultSet.getTimestamp(7).toLocalDateTime();

                        FileDto file = new FileDto(fileId, contentType, fileName, originalFilename, sizeInBytes, dateOfUpload, dateOfLastUpdate);
                        files.add(file);
                    }
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return files;
    }

    @Override
    public File saveWithUserId(MultipartFile file, Long id) {
        if (!userService.isExistById(id)) {
            throw new UserNotFoundException();
        }

        File fileTemp = new File(file);
        User user = userService.getById(id);

        Set<FileTag> fileTags = new HashSet<>();
        try {
            fileTags.addAll(FilesUtils.drewTagsAdapter(ImageMetadataReader.readMetadata(file.getInputStream())));
        } catch (IOException | ImageProcessingException e) {
            e.printStackTrace();
        }

        template.execute(status -> {
            fileTemp.setUser(user);
            fileTemp.setFileTags(fileTags);
            save(fileTemp);

            fileTags.forEach(fileTag -> fileTag.setFile(fileTemp));
            save(fileTemp);
            return fileTemp;
        });
        return fileTemp;
    }

    public ResponseEntity<Set<FileDto>> uploadFilesToDatabase(MultipartFile[] files, Long userId) {
        if (!userService.isExistById(userId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        User user = userService.getById(userId);
        if (user.isAdmin()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

        Set<File> fileSet = new HashSet<>();
        Set<FileDto> fileDtoSet = new LinkedHashSet<>();

        template.execute(status -> {
            ExecutorService executor = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
            List<Future<File>> futureList = new ArrayList<>();
            for (MultipartFile f : files) {
                futureList.add(executor.submit(new MultipartFilesProcessor(f, userId, this)));
            }

            for (Future<File> file : futureList) {
                try {
                    fileSet.add(file.get());
                } catch (InterruptedException | ExecutionException e) {
                    e.printStackTrace();
                }
            }
            executor.shutdown();
            fileSet.forEach(file -> fileDtoSet.add(FileDto.makeDTO(file)));
            return fileDtoSet;
        });
        return new ResponseEntity<>(fileDtoSet, HttpStatus.CREATED);
    }
}