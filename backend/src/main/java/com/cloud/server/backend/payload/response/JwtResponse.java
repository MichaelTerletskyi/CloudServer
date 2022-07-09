package com.cloud.server.backend.payload.response;

import java.util.List;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    private List<String> roles;

    private JwtResponse(String accessToken, Long id, String username, String email, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public static JwtResponseBuilder builder() {
        return new JwtResponseBuilder();
    }

    public static class JwtResponseBuilder {
        private String token;
        private Long id;
        private String username;
        private String email;
        private List<String> roles;

        public JwtResponseBuilder setToken(String token) {
            this.token = token;
            return this;
        }

        public JwtResponseBuilder setId(Long id) {
            this.id = id;
            return this;
        }

        public JwtResponseBuilder setUsername(String username) {
            this.username = username;
            return this;
        }

        public JwtResponseBuilder setEmail(String email) {
            this.email = email;
            return this;
        }

        public JwtResponseBuilder setRoles(List<String> roles) {
            this.roles = roles;
            return this;
        }

        public JwtResponse build() {
            return new JwtResponse(token, id, username, email, roles);
        }
    }
}