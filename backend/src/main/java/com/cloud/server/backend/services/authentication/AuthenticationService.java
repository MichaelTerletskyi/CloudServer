package com.cloud.server.backend.services.authentication;

import com.cloud.server.backend.models.users.Role;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.payload.request.LoginRequest;
import com.cloud.server.backend.payload.request.SignupRequest;
import com.cloud.server.backend.payload.response.JwtResponse;
import com.cloud.server.backend.payload.response.MessageResponse;
import com.cloud.server.backend.security.jwt.JwtUtils;
import com.cloud.server.backend.security.services.UserDetailsImpl;
import com.cloud.server.backend.services.models.role.RoleService;
import com.cloud.server.backend.services.models.users.impls.UserServiceImpl;
import com.cloud.server.backend.services.validation.SignupRequestValidationResolver;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionTemplate;

import java.util.HashSet;
import java.util.Set;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

@Service
public class AuthenticationService {
    private static final String EMAIL_IS_ALREADY_IN_USE = "Email is already in use";
    private static final String USERNAME_IS_ALREADY_TAKEN = "Username is already exist with this username";
    private static final String USER_REGISTERED_SUCCESSFULLY = "User registered successfully";
    private final TransactionTemplate template;
    private final AuthenticationManager authenticationManager;
    private final UserServiceImpl userService;
    private final RoleService roleService;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;

    @Autowired
    public AuthenticationService(TransactionTemplate template, AuthenticationManager authenticationManager, UserServiceImpl userService,
                                 RoleService roleService, PasswordEncoder encoder, JwtUtils jwtUtils) {
        this.template = template;
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.roleService = roleService;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
    }

    public ResponseEntity<JwtResponse> authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userService.getById(userDetails.getId());

        JwtResponse body = new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(),
                userDetails.roles(), user);
        return ResponseEntity.ok(body);
    }

    public ResponseEntity<MessageResponse> registerUser(SignupRequest signUpRequest) {
        ResponseEntity<MessageResponse> msgResponse = badRequestCheck(signUpRequest);
        if (ObjectUtils.isNotEmpty(msgResponse)) {
            return msgResponse;
        }

        User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()));
        template.execute(status -> {
            String role = signUpRequest.getRole();
            Set<Role> roles = new HashSet<>();
            Role currentRole = roleService.findByName(role);
            roles.add(currentRole);

            user.setRoles(roles);
            userService.save(user);
            return user;
        });

        return new ResponseEntity<>(new MessageResponse(USER_REGISTERED_SUCCESSFULLY), HttpStatus.CREATED);
    }

    private ResponseEntity<MessageResponse> badRequestCheck(SignupRequest signUpRequest) {
        if (userService.existsByUsername(signUpRequest.getUsername()))
            return ResponseEntity.badRequest().body(new MessageResponse(USERNAME_IS_ALREADY_TAKEN));
        if (userService.existsByEmail(signUpRequest.getEmail()))
            return ResponseEntity.badRequest().body(new MessageResponse(EMAIL_IS_ALREADY_IN_USE));
        SignupRequestValidationResolver validator = new SignupRequestValidationResolver(signUpRequest);
        if (!validator.isValid())
            return ResponseEntity.badRequest().body(new MessageResponse(validator.toString()));
        return null;
    }
}