package com.cloud.server.backend.services.authentication.validation;

import com.cloud.server.backend.enums.ERole;
import com.cloud.server.backend.models.users.Role;
import com.cloud.server.backend.payload.request.SignupRequest;
import com.cloud.server.backend.services.models.role.RoleService;
import com.cloud.server.backend.services.models.users.UserService;
import net.sf.oval.ConstraintViolation;
import net.sf.oval.Validator;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.StringJoiner;

/**
 * @Create 7/9/2022
 * @Author Michael Terletskyi
 */

@Service
public class SignupRequestValidator implements AutoCloseable {
    private static final String ROLES_NOT_FOUND = "Roles have not been found";
    private static final String USERNAME_IS_ALREADY_TAKEN = "User with '%s' username is already exist";
    private static final String EMAIL_IS_ALREADY_TAKEN = "User with this email is already exist";
    private final UserService userService;
    private final RoleService roleService;
    private Set<String> violationMessages = new HashSet<>();
    private Set<Role> roles = new HashSet<>();

    @Autowired
    public SignupRequestValidator(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    public SignupRequestValidator validate(SignupRequest request) {
        Validator validator = new Validator();
        List<ConstraintViolation> errors = validator.validate(request);
        for (ConstraintViolation constraintViolation : errors) {
            String msg = constraintViolation.getMessage();
            if (StringUtils.isNotBlank(msg)) {
                violationMessages.add(msg);
            }
        }

        Role roleRep = roleService.findByName(ERole.findRole(request.getRole()));
        roles.add(roleRep);
        if (CollectionUtils.isEmpty(roles))
            violationMessages.add(ROLES_NOT_FOUND);
        if (userService.existsByUsername(request.getUsername()))
            violationMessages.add(String.format(USERNAME_IS_ALREADY_TAKEN, request.getUsername()));
        if (userService.existsByEmail(request.getEmail()))
            violationMessages.add(EMAIL_IS_ALREADY_TAKEN);

        return this;
    }

    public Set<Role> getRoles() {
        return this.roles;
    }

    public boolean isValid() {
        return this.violationMessages.isEmpty();
    }

    @Override
    public String toString() {
        StringJoiner stringJoiner = new StringJoiner(", ");
        this.violationMessages.forEach(stringJoiner::add);
        return stringJoiner.toString();
    }

    @Override
    public void close() {
        this.violationMessages.clear();
        this.roles.clear();
    }
}