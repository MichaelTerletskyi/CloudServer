package com.cloud.server.backend.services.models.files;

import com.cloud.server.backend.models.files.GenericFile;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.services.models.BasicCrudService;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public abstract class FileService extends BasicCrudService<GenericFile> {
    protected abstract Set<GenericFile> getAllFilesByUserId(Long id);
    protected abstract Set<GenericFile> getAllFilesByUser(User user);
}