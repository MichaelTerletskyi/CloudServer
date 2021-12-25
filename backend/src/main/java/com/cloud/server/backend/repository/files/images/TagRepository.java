package com.cloud.server.backend.repository.files.images;

import com.cloud.server.backend.models.files.impls.images.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

/**
 * @Create 12/17/2021
 * @Author Michael Terletskyi
 * @Extends of {@link JpaRepository} interface.
 */

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    Set<Tag> findAllByImageId(@Param("image_id") Long id);
}