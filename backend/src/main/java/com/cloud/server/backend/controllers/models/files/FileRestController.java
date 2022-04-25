package com.cloud.server.backend.controllers.models.files;

import com.cloud.server.backend.exceptions.FileNotFoundException;
import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.services.models.files.impls.FileServiceImpl;
import com.cloud.server.backend.services.models.users.impls.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashSet;
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
    private final UserServiceImpl userService;

    @Autowired
    public FileRestController(FileServiceImpl fileService, UserServiceImpl userService) {
        this.fileService = fileService;
        this.userService = userService;
    }

    @GetMapping("/get/file/by/id={id}")
    public ResponseEntity<File> getFileById(@PathVariable Long id) {
        try {
            File file = fileService.getById(id);
            return new ResponseEntity<>(file, HttpStatus.OK);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get/all/files/by/user/id={id}")
    public ResponseEntity<Set<File>> getAllFiles(@PathVariable Long id) {
        try {
            User user = userService.getById(id);
            if (!user.isAdmin()) {
                Set<File> allFilesByUserId = fileService.getAllByUserId(id);
                return new ResponseEntity<>(allFilesByUserId, HttpStatus.OK);
            }
        } catch (UserNotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
    }

    @PostMapping("/save/files/user/id={id}")
    public ResponseEntity<Set<File>> uploadFiles(@RequestParam(name = "file") MultipartFile[] files, @PathVariable Long id) {
        Set<File> fileSet = new HashSet<>();
        try {
            User user = userService.getById(id);
            if (!user.isAdmin()) {
                for (MultipartFile file : files) {
                    fileSet.add(fileService.saveWithUserId(file, id));
                    return new ResponseEntity<>(fileSet, HttpStatus.OK);
                }
            }
        } catch (UserNotFoundException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
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