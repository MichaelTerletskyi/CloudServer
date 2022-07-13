package com.cloud.server.backend.services.authentication;

import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.payload.request.LoginRequest;
import com.cloud.server.backend.payload.request.SignupRequest;
import com.cloud.server.backend.payload.response.JwtResponse;
import com.cloud.server.backend.payload.response.LoginResponse;
import com.cloud.server.backend.payload.response.SignUpResponse;
import com.cloud.server.backend.security.jwt.JwtUtils;
import com.cloud.server.backend.security.services.UserDetailsImpl;
import com.cloud.server.backend.services.authentication.validation.SignupRequestValidator;
import com.cloud.server.backend.services.models.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

@Service
public class AuthenticationService {
    public static final String LOGIN_SUCCESS_MSG = "Login Success";
    private static final String LOGIN_FAILED_USER_NOT_EXIST_MSG = "User with username '%s' does't exist";
    private static final String INCORRECT_PASSWORD = "Incorrect password";
    private static final String REGISTER_SUCCESS_MSG = "User '%s' registered successfully!";
    private final AuthenticationManager authenticationManager;
    private final TransactionTemplate template;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;
    private final SignupRequestValidator validator;
    private final UserService userService;

    @Autowired
    public AuthenticationService(AuthenticationManager authenticationManager, TransactionTemplate template,
                                 PasswordEncoder encoder, JwtUtils jwtUtils, SignupRequestValidator validator, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.template = template;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.validator = validator;
        this.userService = userService;
    }

    public LoginResponse authenticateUser(LoginRequest request) {
        if (!userService.existsByUsername(request.getUsername())) {
            return new LoginResponse(String.format(LOGIN_FAILED_USER_NOT_EXIST_MSG, request.getUsername()));
        }

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getUsername(),
                request.getPassword());
        try {
            Authentication authentication = authenticationManager.authenticate(authToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
            JwtResponse jwtResponse = JwtResponse.builder()
                    .setToken(jwt)
                    .setId(user.getId())
                    .setUsername(user.getUsername())
                    .setEmail(user.getEmail())
                    .setRoles(user.roles())
                    .build();

            return new LoginResponse(jwtResponse, LOGIN_SUCCESS_MSG);
        } catch (BadCredentialsException e) {
            e.printStackTrace();
            return new LoginResponse(INCORRECT_PASSWORD);
        }
    }

    public SignUpResponse registerUser(SignupRequest request) {
        try (SignupRequestValidator requestValidation = validator.validate(request)) {
            if (!requestValidation.isValid()) {
                return new SignUpResponse(requestValidation.toString(), false);
            }

            User user = new User(request.getUsername(), request.getEmail(), encoder.encode(request.getPassword()));
            template.execute(status -> {
                user.setRoles(requestValidation.getRoles());
                userService.save(user);
                return user;
            });

            return new SignUpResponse(String.format(REGISTER_SUCCESS_MSG, user.getUsername()), true);
        }
    }
}