package com.cloud.server.backend.repository.files;

import com.cloud.server.backend.models.files.GenericFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

/**
 * @Create 12/17/2021
 * @Author Michael Terletskyi
 * @Extends of {@link JpaRepository} interface.
 */

@Repository
public interface GenericFileRepository extends JpaRepository<GenericFile, Long> {
    Optional<Set<GenericFile>> findAllByUserId(@Param("user_id") Long userId);
}