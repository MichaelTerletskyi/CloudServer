package com.cloud.server.backend.repository.files.images;

import com.cloud.server.backend.models.files.impls.images.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @Create 12/17/2021
 * @Author Michael Terletskyi
 * @Extends of {@link JpaRepository} interface.
 */

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}