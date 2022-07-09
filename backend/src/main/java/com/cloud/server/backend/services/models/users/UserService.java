package com.cloud.server.backend.services.models.users;

import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.users.UserRepository;
import com.cloud.server.backend.services.models.BasicCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

/**
 * @Create 7/9/2022
 * @Author Michael Terletskyi
 * @Extends of {@link BasicCrudService} interface.
 */

@Service
public class UserService implements BasicCrudService<User> {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElseThrow(()
                -> new UsernameNotFoundException(String.format("User with id %d has not been found", id)));
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }

    @Override
    public boolean hasId(User user) {
        return Objects.nonNull(user.getId());
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void delete(User user) {
        userRepository.delete(user);
    }

    @Override
    public boolean isExistById(Long id) {
        return userRepository.existsById(id);
    }

    public User findByUsername(String username) {
        return this.userRepository.findByUsername(username).orElseThrow(()
                -> new UsernameNotFoundException(String.format("User with username %s has not been found", username)));
    }

    public boolean existsByUsername(String username) {
        return this.userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return this.userRepository.existsByEmail(email);
    }
}