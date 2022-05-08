package com.cloud.server.backend.payload.request;

import net.sf.oval.constraint.Email;
import net.sf.oval.constraint.NotBlank;
import net.sf.oval.constraint.NotNull;
import net.sf.oval.constraint.Size;
import net.sf.oval.guard.Guarded;

import java.util.Objects;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

@Guarded
public class SignupRequest {

    @NotNull
    @NotBlank
    @Size(min = 2, max = 32)
    private String username;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 254)
    @Email
    private String email;

    @NotNull
    @NotBlank
    @Size(min = 8, max = 32)
    private String password;

    @NotNull
    @NotBlank
    @Size(min = 9, max = 10)
    private String role;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SignupRequest)) return false;
        SignupRequest that = (SignupRequest) o;
        return Objects.equals(username, that.username) &&
                Objects.equals(email, that.email) &&
                Objects.equals(password, that.password) &&
                Objects.equals(role, that.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, email, password, role);
    }
}