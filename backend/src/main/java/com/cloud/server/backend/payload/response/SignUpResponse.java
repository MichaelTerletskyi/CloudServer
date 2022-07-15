package com.cloud.server.backend.payload.response;

/**
 * @Create 7/9/2022
 * @Author Michael Terletskyi
 */

public class SignUpResponse {
    private String message;
    private boolean successful;

    public SignUpResponse(String message) {
        this.message = message;
    }

    public SignUpResponse(String message, boolean successful) {
        this.message = message;
        this.successful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccessful() {
        return successful;
    }

    public void setSuccessful(boolean successful) {
        this.successful = successful;
    }
}