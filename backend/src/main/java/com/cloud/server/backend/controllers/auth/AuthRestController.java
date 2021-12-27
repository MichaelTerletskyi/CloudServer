package com.cloud.server.backend.controllers.auth;

import com.cloud.server.backend.payload.request.LoginRequest;
import com.cloud.server.backend.payload.request.SignupRequest;
import com.cloud.server.backend.payload.response.JwtResponse;
import com.cloud.server.backend.payload.response.MessageResponse;
import com.cloud.server.backend.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @Create 12/26/2021
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/auth")
public class AuthRestController {
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthRestController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        return authenticationService.authenticateUser(loginRequest);
    }

    @PostMapping("/signup")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody SignupRequest signUpRequest) {
        return authenticationService.registerUser(signUpRequest);
    }
}