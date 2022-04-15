package com.cloud.server.backend.services.models.files.impls;

import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.files.FileRepository;
import com.cloud.server.backend.services.models.files.FileService;
import com.cloud.server.backend.services.models.users.UserService;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

/**
 * @Create 4/15/2022
 * @Author Michael Terletskyi
 * @Extends of {@link FileService} class.
 */

@Service
public class FileServiceImpl extends FileService<File> {
    private final FileRepository fileRepository;
    private final UserService userService;

    @Autowired
    public FileServiceImpl(FileRepository fileRepository, UserService userService) {
        this.fileRepository = fileRepository;
        this.userService = userService;
    }

    @Override
    public File getById(Long id) {
        return fileRepository.getById(id);
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
        fileTemp.setUser(user);
        save(fileTemp);
        return fileTemp;
    }
}