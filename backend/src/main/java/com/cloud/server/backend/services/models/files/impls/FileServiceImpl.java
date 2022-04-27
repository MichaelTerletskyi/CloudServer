package com.cloud.server.backend.services.models.files.impls;

import com.cloud.server.backend.exceptions.FileNotFoundException;
import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.File;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
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
    private final TransactionTemplate template;
    private final FileRepository fileRepository;
    private final UserService userService;

    @Autowired
    public FileServiceImpl(TransactionTemplate template, FileRepository fileRepository, UserService userService) {
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

    @Override
    public File saveWithUserId(MultipartFile file, Long id) {
        if (!userService.isExistById(id)) {
            throw new UserNotFoundException();
        }

        File fileTemp = new File(file);
        User user = userService.getById(id);
        template.execute(status -> {
            try {
                Set<FileTag> fileTags = FilesUtils.drewTagsAdapter(ImageMetadataReader.readMetadata(file.getInputStream()));

                fileTemp.setUser(user);
                fileTemp.setFileTags(fileTags);
                save(fileTemp);

                fileTags.forEach(fileTag -> fileTag.setFile(fileTemp));
                save(fileTemp);
            } catch (IOException | ImageProcessingException e) {
                e.printStackTrace();
            }
            return fileTemp;
        });
        return fileTemp;
    }

    public ResponseEntity<Set<File>> uploadFilesToDatabase(MultipartFile[] files, Long userId)
            throws ExecutionException, InterruptedException {
        if (!userService.isExistById(userId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        User user = userService.getById(userId);
        if (user.isAdmin()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }

        Set<File> fileSet = new HashSet<>();
        ExecutorService executor = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
        List<Future<File>> futureList = new ArrayList<>();
        for (MultipartFile f : files) {
            futureList.add(executor.submit(new MultipartFilesProcessor(f, userId, this)));
        }

        for (Future<File> file : futureList) {
            fileSet.add(file.get());
        }
        executor.shutdown();
        return new ResponseEntity<>(fileSet, HttpStatus.CREATED);
    }
}