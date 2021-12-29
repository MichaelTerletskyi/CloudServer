package com.cloud.server.backend.exceptions;

import org.springframework.stereotype.Component;

/**
 * @Create 12/30/2021
 * @Author Michael Terletskyi
 * @Extends of {@link RuntimeException} class.
 */

@Component
public class FileNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 3737622802418621432L;

    public FileNotFoundException() {

    }

    public FileNotFoundException(String message) {
        super(message);
    }
}