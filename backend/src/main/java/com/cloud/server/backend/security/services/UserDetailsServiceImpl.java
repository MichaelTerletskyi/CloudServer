package com.cloud.server.backend.security.services;

import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.services.models.users.impls.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 * @Implements of {@link UserDetailsService} interface.
 */

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserServiceImpl userService;

    @Autowired
    public UserDetailsServiceImpl(UserServiceImpl userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUsername(username);
        return UserDetailsImpl.build(user);
    }
}