package com.cloud.server.backend.models.files;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.apache.commons.io.FileUtils;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * @Create 5/7/2022
 * @Author Michael Terletskyi
 */

public class FileDto {
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

    public FileDto(Long id, String contentType, String fileName, String originalFilename,
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FileDto)) return false;
        FileDto fileDTO = (FileDto) o;
        return Objects.equals(id, fileDTO.id) &&
                Objects.equals(contentType, fileDTO.contentType) &&
                Objects.equals(fileName, fileDTO.fileName) &&
                Objects.equals(originalFilename, fileDTO.originalFilename) &&
                Objects.equals(sizeInBytes, fileDTO.sizeInBytes) &&
                Objects.equals(dateOfUpload, fileDTO.dateOfUpload) &&
                Objects.equals(dateOfLastUpdate, fileDTO.dateOfLastUpdate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, contentType, fileName, originalFilename, sizeInBytes, dateOfUpload, dateOfLastUpdate);
    }

    public static FileDto makeDTO(File file) {
        return new FileDto(file.getId(), file.getContentType(), file.getFileName(),
                file.getOriginalFilename(), file.sizeInBytes(), file.getDateOfUpload(), file.getDateOfLastUpdate());
    }
}