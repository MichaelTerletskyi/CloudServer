package com.cloud.server.backend.models.files.impls.images;

import com.cloud.server.backend.enums.FileTypes;
import com.cloud.server.backend.models.files.GenericFile;

import com.cloud.server.backend.utils.ImageUtils;
import com.drew.imaging.ImageMetadataReader;
import com.drew.imaging.ImageProcessingException;
import com.fasterxml.jackson.annotation.JsonGetter;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.IOException;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

/**
 * @Create 12/16/2021
 * @Author Michael Terletskyi
 * @Extends of {@link GenericFile} interface.
 * @Implements of {@link Serializable} interface.
 */

@Component
@Entity
@Table(name = "IMAGES")
public class Image extends GenericFile implements Serializable {
    private static final long serialVersionUID = 5496356627065801583L;

    @Column(name = "original_file_name")
    private String originalFilename;

    @OneToMany(mappedBy = "image", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Tag> tags;

    public Image() {

    }

    public Image(MultipartFile file) {
        try {
            this.bytes = file.getBytes();
            this.contentType = file.getContentType();
            this.fileName = file.getName();
            this.dateOfUpload = LocalDateTime.now();
            this.dateOfLastUpdate = LocalDateTime.now();
            this.originalFilename = file.getOriginalFilename();
            this.tags = ImageUtils.drewTagsAdapter(ImageMetadataReader.readMetadata(file.getInputStream()));
            file.getInputStream().close();
        } catch (IOException | ImageProcessingException e) {
            e.printStackTrace();
        }
    }

    @JsonGetter
    public String getOriginalFilename() {
        return this.originalFilename;
    }

    @JsonGetter
    @Override
    public BigInteger getSize() {
        return BigInteger.valueOf(this.bytes.length);
    }

    @JsonGetter
    @Override
    public final FileTypes fileType() {
        return FileTypes.IMAGE;
    }

    @JsonGetter
    public Set<Tag> getTags() {
        return this.tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Image)) return false;
        if (!super.equals(o)) return false;
        Image image = (Image) o;
        return Objects.equals(originalFilename, image.originalFilename) &&
                Objects.equals(tags, image.tags);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), originalFilename, tags);
    }
}