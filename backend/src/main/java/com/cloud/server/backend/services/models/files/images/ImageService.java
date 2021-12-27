package com.cloud.server.backend.services.models.files.images;

import com.cloud.server.backend.models.files.impls.images.Image;
import com.cloud.server.backend.services.models.files.FileService;
import org.springframework.stereotype.Service;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link FileService} class.
 */

@Service
public abstract class ImageService extends FileService<Image> {

}