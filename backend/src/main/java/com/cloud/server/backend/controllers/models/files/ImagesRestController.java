package com.cloud.server.backend.controllers.models.files;

import com.cloud.server.backend.models.files.impls.images.Image;
import com.cloud.server.backend.services.models.files.images.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/data")
public class ImagesRestController {
    private final ImageService imageService;

    @Autowired
    public ImagesRestController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/get/all/image/by/user/id/{id}")
    public ResponseEntity<Set<Image>> getAllImages(@PathVariable Long id) {
        Set<Image> allImagesByUserId = imageService.getAllByUserId(id);
        return new ResponseEntity<>(allImagesByUserId, HttpStatus.OK);
    }

    @PostMapping("/save/image/user_id={id}")
    public ResponseEntity<Image> uploadImage(@RequestParam(name = "image") MultipartFile file, @PathVariable Long id) {
        return new ResponseEntity<>(imageService.saveWithUserId(file, id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/image/by/id={id}")
    public ResponseEntity<Long> deleteImage(@PathVariable Long id) {
        if (!imageService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        imageService.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}