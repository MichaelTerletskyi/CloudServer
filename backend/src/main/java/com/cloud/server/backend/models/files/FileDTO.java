package com.cloud.server.backend.models.files;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.apache.commons.io.FileUtils;

import java.math.BigInteger;
import java.time.LocalDateTime;

/**
 * @Create 5/7/2022
 * @Author Michael Terletskyi
 */

public class FileDTO {
    private Long id;
    private String contentType;
    private String fileName;
    private String originalFilename;
    private BigInteger sizeInBytes;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime dateOfUpload;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime dateOfLastUpdate;

    public FileDTO(Long id, String contentType, String fileName, String originalFilename,
                   BigInteger sizeInBytes, LocalDateTime dateOfUpload, LocalDateTime dateOfLastUpdate) {
        this.id = id;
        this.contentType = contentType;
        this.fileName = fileName;
        this.originalFilename = originalFilename;
        this.sizeInBytes = sizeInBytes;
        this.dateOfUpload = dateOfUpload;
        this.dateOfLastUpdate = dateOfLastUpdate;
    }

    public Long getId() {
        return id;
    }

    public String getContentType() {
        return contentType;
    }

    public String getFileName() {
        return fileName;
    }

    public String getOriginalFilename() {
        return originalFilename;
    }

    public BigInteger getSizeInBytes() {
        return sizeInBytes;
    }

    public LocalDateTime getDateOfUpload() {
        return dateOfUpload;
    }

    public LocalDateTime getDateOfLastUpdate() {
        return dateOfLastUpdate;
    }

    @JsonGetter
    public String displaySize() {
        return FileUtils.byteCountToDisplaySize(sizeInBytes);
    }

    public static FileDTO makeDTO(File file) {
        return new FileDTO(file.getId(), file.getContentType(), file.getFileName(),
                file.getOriginalFilename(), file.sizeInBytes(), file.getDateOfUpload(), file.getDateOfLastUpdate());
    }
}