package com.cloud.server.backend.services.models.files.impls;

import com.cloud.server.backend.models.files.GenericFile;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.files.GenericFileRepository;
import com.cloud.server.backend.services.models.files.FileService;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class FileServiceImpl extends FileService {
    private final GenericFileRepository genericFileRepository;

    @Autowired
    public FileServiceImpl(GenericFileRepository genericFileRepository) {
        this.genericFileRepository = genericFileRepository;
    }

    @Override
    public Set<GenericFile> getAllFilesByUserId(Long id) {
        return genericFileRepository.findAllByUserId(id);
    }

    @Override
    public Set<GenericFile> getAllFilesByUser(User user) {
        return null;
    }

    @Override
    public GenericFile getById(Long id) {
        return genericFileRepository.getById(id);
    }

    @Override
    public List<GenericFile> getAll() {
        return genericFileRepository.findAll();
    }

    @Override
    public GenericFile save(GenericFile genericFile) {
        return genericFileRepository.save(genericFile);
    }

    @Override
    public GenericFile update(GenericFile genericFile) {
        return save(genericFile);
    }

    @Override
    public boolean hasId(GenericFile genericFile) {
        return ObjectUtils.isNotEmpty(genericFile.getId());
    }

    @Override
    public void deleteById(Long id) {
        genericFileRepository.deleteById(id);
    }

    @Override
    public void delete(GenericFile genericFile) {
        genericFileRepository.delete(genericFile);
    }

    @Override
    public boolean isExistById(Long id) {
        return genericFileRepository.existsById(id);
    }
}
