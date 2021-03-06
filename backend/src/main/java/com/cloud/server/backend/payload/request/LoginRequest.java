package com.cloud.server.backend.payload.request;

import net.sf.oval.constraint.NotBlank;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

public class LoginRequest {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    private boolean rememberMe;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isRememberMe() {
        return rememberMe;
    }

    public void setRememberMe(boolean rememberMe) {
        this.rememberMe = rememberMe;
    }
}