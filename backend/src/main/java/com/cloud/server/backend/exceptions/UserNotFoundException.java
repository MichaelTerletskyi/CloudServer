package com.cloud.server.backend.exceptions;

import org.springframework.stereotype.Component;

/**
 * @Create 12/26/2021
 * @Author Michael Terletskyi
 * @Extends of {@link RuntimeException} class.
 */

@Component
public class UserNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 3737622802418621432L;
    private static final String USER_NOT_FOUND = "User not found";

    public UserNotFoundException() {
        super(USER_NOT_FOUND);
    }

    public UserNotFoundException(String message) {
        super(message);
    }
}