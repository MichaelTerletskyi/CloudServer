package com.cloud.server.backend.payload.response;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

public class MessageResponse {
    private String message;

    public MessageResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}