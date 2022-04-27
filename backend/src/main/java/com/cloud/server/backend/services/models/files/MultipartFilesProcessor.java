package com.cloud.server.backend.services.models.files;

import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.services.models.files.impls.FileServiceImpl;
import org.springframework.web.multipart.MultipartFile;

import java.util.concurrent.Callable;

/**
 * @Create 4/27/2022
 * @Author Michael Terletskyi
 * @Implements of {@link Callable} interface.
 */

public class MultipartFilesProcessor implements Callable<File> {
    private MultipartFile file;
    private Long userId;
    private FileServiceImpl fileService;

    public MultipartFilesProcessor(MultipartFile file, Long userId, FileServiceImpl fileService) {
        this.file = file;
        this.userId = userId;
        this.fileService = fileService;
    }

    @Override
    public File call() {
        return this.fileService.saveWithUserId(this.file, userId);
    }
}