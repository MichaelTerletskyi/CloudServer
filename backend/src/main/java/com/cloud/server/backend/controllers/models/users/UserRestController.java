package com.cloud.server.backend.controllers.models.users;

import com.cloud.server.backend.services.models.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/users")
public class UserRestController {
    private final UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/get/metadata/by/user/id={id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> getUserMetadata(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserMetadataResponse(id));
    }
}