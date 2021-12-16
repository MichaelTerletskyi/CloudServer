package com.cloud.server.backend.repository.files;

import com.cloud.server.backend.models.files.GenericFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @Create 12/17/2021
 * @Author Michael Terletskyi
 * @Extends of {@link JpaRepository} interface.
 */

@Repository
public interface GenericFileRepository extends JpaRepository<GenericFile, Long> {

}