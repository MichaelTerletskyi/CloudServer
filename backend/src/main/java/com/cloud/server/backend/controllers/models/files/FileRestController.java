package com.cloud.server.backend.controllers.models.files;

import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.models.files.FileDTO;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.services.models.files.impls.FileServiceImpl;
import com.cloud.server.backend.services.models.users.impls.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;
import java.util.concurrent.ExecutionException;

/**
 * @Create 4/15/2022
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/data")
public class FileRestController {
    private final FileServiceImpl fileService;
    private final UserServiceImpl userService;

    @Autowired
    public FileRestController(FileServiceImpl fileService, UserServiceImpl userService) {
        this.fileService = fileService;
        this.userService = userService;
    }

    @GetMapping("/get/file/by/id={id}")
    public ResponseEntity<File> getFileById(@PathVariable Long id) {
        if (!fileService.isExistById(id)) {
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        File file = fileService.getById(id);
        return new ResponseEntity<>(file, HttpStatus.OK);
    }

    @GetMapping("/get/all/files/by/user/id={id}")
    public ResponseEntity<Set<File>> getAllFilesByUserId(@PathVariable Long id) {
        if (!userService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        User user = userService.getById(id);
        if (user.isAdmin()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(fileService.getAllByUserId(id), HttpStatus.OK);
    }

    @GetMapping("/get/all/files/metadata/by/user/id={id}")
    public ResponseEntity<Set<FileDTO>> getAllFilesMetadataByUserId(@PathVariable Long id) {
        if (!userService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        User user = userService.getById(id);
        if (user.isAdmin()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity<>(fileService.getAllFilesMetadataByUserId(id), HttpStatus.OK);
    }

    @PostMapping("/save/files/user/id={id}")
    public ResponseEntity<Set<FileDTO>> uploadFiles(@RequestParam(name = "file") MultipartFile[] files, @PathVariable Long id)
            throws ExecutionException, InterruptedException {
        return fileService.uploadFilesToDatabase(files, id);
    }

    @DeleteMapping("/delete/file/by/id={id}")
    public ResponseEntity<Boolean> deleteFile(@PathVariable Long id) {
        if (!fileService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        fileService.deleteById(id);
        return new ResponseEntity<>(!fileService.isExistById(id), HttpStatus.OK);
    }
}