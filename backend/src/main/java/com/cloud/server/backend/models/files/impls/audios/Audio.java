package com.cloud.server.backend.models.files.impls.audios;

import com.cloud.server.backend.enums.EFileType;
import com.cloud.server.backend.models.files.GenericFile;
import com.fasterxml.jackson.annotation.JsonGetter;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.IOException;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;

/**
 * @Create 12/16/2021
 * @Author Michael Terletskyi
 * @Extends of {@link GenericFile} interface.
 * @Implements of {@link Serializable} interface.
 */

@Component
@Entity
@Table(name = "AUDIOS")
public class Audio extends GenericFile implements Serializable {
    private static final long serialVersionUID = -299023566583336980L;

    public Audio() {

    }

    public Audio(MultipartFile file) {
        try {
            this.bytes = file.getBytes();
            this.contentType = file.getContentType();
            this.fileName = file.getName();
            this.dateOfUpload = LocalDateTime.now();
            this.dateOfLastUpdate = LocalDateTime.now();
            file.getInputStream().close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @JsonGetter
    @Override
    public BigInteger getSize() {
        return BigInteger.valueOf(this.bytes.length);
    }

    @JsonGetter
    @Override
    public final EFileType fileType() {
        return EFileType.AUDIO;
    }
}