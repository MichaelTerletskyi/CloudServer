package com.cloud.server.backend.controllers.models.users;

import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.services.models.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/data")
public class UserRestController {
    private final UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/get/all/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAll()
                .stream()
                .filter(user -> !user.isAdmin())
                .collect(Collectors.toList());
        return ResponseEntity.ok(users);
    }

    @GetMapping("/get/all/admins")
    public ResponseEntity<List<User>> getAllAdmins() {
        List<User> admins = userService.getAll()
                .stream()
                .filter(User::isAdmin)
                .collect(Collectors.toList());
        return ResponseEntity.ok(admins);
    }

    @GetMapping("/get/user/by/id={id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/delete/user/by/id={id}")
    public ResponseEntity<Long> deleteAudio(@PathVariable Long id) {
        if (!userService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userService.deleteById(id);
        return ResponseEntity.ok(id);
    }
}