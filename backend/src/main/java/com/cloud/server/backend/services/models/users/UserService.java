package com.cloud.server.backend.services.models.users;

import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.services.models.BasicCrudService;
import org.springframework.stereotype.Service;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link BasicCrudService} interface.
 */

@Service
public abstract class UserService extends BasicCrudService<User> {
    protected abstract User findByUsername(String username);

    protected abstract boolean existsByUsername(String username);

    protected abstract boolean existsByEmail(String email);
}