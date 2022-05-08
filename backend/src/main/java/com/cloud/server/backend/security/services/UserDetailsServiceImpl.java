package com.cloud.server.backend.security.services;

import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.users.UserRepository;
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
    private final UserRepository userRepository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository
                .findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(String.format("User with username %s has not been found", username)));
        return UserDetailsImpl.build(user);
    }
}