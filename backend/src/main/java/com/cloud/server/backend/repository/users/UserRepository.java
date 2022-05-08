package com.cloud.server.backend.repository.users;

import com.cloud.server.backend.models.users.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 * @Extends of {@link JpaRepository} interface.
 */

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(@Param("username") String username);

    boolean existsByUsername(@Param("username") String username);

    boolean existsByEmail(@Param("email") String email);
}