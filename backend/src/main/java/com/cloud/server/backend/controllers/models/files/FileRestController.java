package com.cloud.server.backend.controllers.models.files;

import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.services.models.files.impls.FileServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

/**
 * @Create 4/15/2022
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/data")
public class FileRestController {
    private final FileServiceImpl fileService;

    @Autowired
    public FileRestController(FileServiceImpl fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/get/all/file/by/user/id={id}")
    public ResponseEntity<Set<File>> getAllFiles(@PathVariable Long id) {
        Set<File> allFilesByUserId = fileService.getAllByUserId(id);
        return new ResponseEntity<>(allFilesByUserId, HttpStatus.OK);
    }

    @PostMapping("/save/file/user/id={id}")
    public ResponseEntity<File> uploadFile(@RequestParam(name = "file") MultipartFile file, @PathVariable Long id) {
        return new ResponseEntity<>(fileService.saveWithUserId(file, id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/file/by/id={id}")
    public ResponseEntity<Long> deleteFile(@PathVariable Long id) {
        if (!fileService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        fileService.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}