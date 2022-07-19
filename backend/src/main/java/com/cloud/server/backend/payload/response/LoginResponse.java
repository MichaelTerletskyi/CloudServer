package com.cloud.server.backend.payload.response;

import com.cloud.server.backend.services.authentication.AuthenticationService;
import org.apache.commons.lang3.StringUtils;

/**
 * @Create 7/8/2022
 * @Author Michael Terletskyi
 */

public class LoginResponse {
    private JwtResponse jwtResponse;
    private String message;

    public LoginResponse(String message) {
        this.message = message;
    }

    public LoginResponse(JwtResponse jwtResponse, String message) {
        this.jwtResponse = jwtResponse;
        this.message = message;
    }

    public JwtResponse getJwtResponse() {
        return jwtResponse;
    }

    public String getMessage() {
        return message;
    }

    public boolean isSuccessful() {
        return StringUtils.isNotBlank(this.message) && message.equals(AuthenticationService.LOGIN_SUCCESS_MSG);
    }
}