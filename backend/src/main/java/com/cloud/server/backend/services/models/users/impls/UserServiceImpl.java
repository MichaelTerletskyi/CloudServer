package com.cloud.server.backend.services.models.users.impls;

import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.users.UserRepository;
import com.cloud.server.backend.services.models.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;

/**
 * @Create 12/26/2021
 * @Author Michael Terletskyi
 * @Extends of {@link UserService} interface.
 */

@Service
public class UserServiceImpl extends UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
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
        return save(user);
    }

    @Override
    public boolean hasId(User user) {
        return ObjectUtils.isEmpty(user.getId());
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

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(UserNotFoundException::new);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}