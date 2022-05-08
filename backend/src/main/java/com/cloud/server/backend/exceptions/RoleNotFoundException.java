package com.cloud.server.backend.exceptions;

import org.springframework.stereotype.Component;

/**
 * @Create 4/16/2021
 * @Author Michael Terletskyi
 * @Extends of {@link RuntimeException} class.
 */

@Component
public class RoleNotFoundException extends RuntimeException {
    private static final long serialVersionUID = -7618168133214324697L;

    public RoleNotFoundException() {

    }

    public RoleNotFoundException(String message) {
        super(message);
    }
}
