package com.cloud.server.backend.services.models.files;

import com.cloud.server.backend.services.models.BasicCrudService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

/**
 * @Create 12/25/2021
 * @Author Michael Terletskyi
 * @Extends of {@link BasicCrudService} class.
 */

@Service
public abstract class FileService<T> implements BasicCrudService<T> {
    public abstract Set<T> getAllByUserId(Long id);
    public abstract T saveWithUserId(MultipartFile file, Long id);

}