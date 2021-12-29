package com.cloud.server.backend.services.models.files.images.impls;

import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.impls.images.Image;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.files.images.ImageRepository;
import com.cloud.server.backend.services.models.files.images.ImageService;
import com.cloud.server.backend.services.models.users.UserService;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link ImageService} class.
 */

@Service
public class ImageServiceImpl extends ImageService {
    private final ImageRepository imageRepository;
    private final UserService userService;

    @Autowired
    public ImageServiceImpl(ImageRepository imageRepository, UserService userService) {
        this.imageRepository = imageRepository;
        this.userService = userService;
    }

    @Override
    public Image getById(Long id) {
        return imageRepository.getById(id);
    }

    @Override
    public List<Image> getAll() {
        return imageRepository.findAll();
    }

    @Override
    public Set<Image> getAllByUserId(Long id) {
        return imageRepository.findAllByUserId(id);
    }

    @Override
    public Image saveWithUserId(MultipartFile file, Long id) {
        if (!userService.isExistById(id)) {
            throw new UserNotFoundException();
        }

        Image image = new Image(file);
        User user = userService.getById(id);
        image.setUser(user);
        save(image);
        return image;
    }

    @Override
    public Image save(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public Image update(Image image) {
        return save(image);
    }

    @Override
    public boolean hasId(Image image) {
        return ObjectUtils.isNotEmpty(image);
    }

    @Override
    public void deleteById(Long id) {
        imageRepository.deleteById(id);
    }

    @Override
    public void delete(Image image) {
        imageRepository.delete(image);
    }

    @Override
    public boolean isExistById(Long id) {
        return imageRepository.existsById(id);
    }
}