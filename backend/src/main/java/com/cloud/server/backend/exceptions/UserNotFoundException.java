package com.cloud.server.backend.exceptions;

import org.springframework.stereotype.Component;

/**
 * @Create 12/26/2021
 * @Author Michael Terletskyi
 * @Extends of {@link RuntimeException} interface.
 */

@Component
public class UserNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 3737622802418621432L;

    public UserNotFoundException() {

    }

    public UserNotFoundException(String message) {
        super(message);
    }
}