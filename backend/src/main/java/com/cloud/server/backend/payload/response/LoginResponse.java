package com.cloud.server.backend.payload.response;

/**
 * @Create 7/8/2022
 * @Author Michael Terletskyi
 */

public class LoginResponse {
    private JwtResponse jwtResponse;
    private String message;

    public LoginResponse(JwtResponse jwtResponse, String message) {
        this.jwtResponse = jwtResponse;
        this.message = message;
    }

    public JwtResponse getJwtResponse() {
        return jwtResponse;
    }

    public void setJwtResponse(JwtResponse jwtResponse) {
        this.jwtResponse = jwtResponse;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}