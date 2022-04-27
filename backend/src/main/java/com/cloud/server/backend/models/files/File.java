package com.cloud.server.backend.models.files;

import com.cloud.server.backend.models.users.User;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.io.IOException;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * @Create 12/15/2021
 * @Author Michael Terletskyi
 * @Implements of {@link Serializable} interface.
 */

@Component
@Entity
@Table(name = "FILES",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "original_file_name"),
        })
public class File implements Serializable {
    private static final long serialVersionUID = 6786256300350384940L;

    @Id
    @Column(name = "file_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "bytes")
    private byte[] bytes;

    @Column(name = "content_type")
    private String contentType;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "original_file_name")
    private String originalFilename;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime dateOfUpload;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    private LocalDateTime dateOfLastUpdate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "file", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<FileTag> fileTags;

    public File() {
    }

    public File(MultipartFile file) {
        try {
            this.bytes = file.getBytes();
            this.contentType = file.getContentType();
            this.fileName = file.getName();
            this.originalFilename = file.getOriginalFilename();
            this.dateOfUpload = LocalDateTime.now();
            this.dateOfLastUpdate = LocalDateTime.now();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @JsonGetter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @JsonGetter
    public byte[] getBytes() {
        return bytes;
    }

    public void setBytes(byte[] bytes) {
        this.bytes = bytes;
    }

    @JsonGetter
    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    @JsonGetter
    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    @JsonGetter
    public String getOriginalFilename() {
        return originalFilename;
    }

    public void setOriginalFilename(String originalFilename) {
        this.originalFilename = originalFilename;
    }

    @JsonGetter
    public LocalDateTime getDateOfUpload() {
        return dateOfUpload;
    }

    public void setDateOfUpload(LocalDateTime dateOfUpload) {
        this.dateOfUpload = dateOfUpload;
    }

    @JsonGetter
    public LocalDateTime getDateOfLastUpdate() {
        return dateOfLastUpdate;
    }

    public void setDateOfLastUpdate(LocalDateTime dateOfLastUpdate) {
        this.dateOfLastUpdate = dateOfLastUpdate;
    }

    @JsonIgnore
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @JsonGetter
    public Set<FileTag> getFileTags() {
        return fileTags;
    }

    public void setFileTags(Set<FileTag> fileTags) {
        this.fileTags = fileTags;
    }

    @JsonGetter
    public BigInteger sizeInBytes() {
        return BigInteger.valueOf(this.bytes.length);
    }

    @JsonGetter
    public String displaySize() {
        return FileUtils.byteCountToDisplaySize(sizeInBytes());
    }

    @JsonGetter
    public Set<String> logicalTags() {
        Set<String> logicalTagsSet = new HashSet<>();
        if (Objects.nonNull(getFileTags())) {
            getFileTags().forEach(fileTag -> {
                if ("Windows XP Keywords".equals(fileTag.getTagName())) {
                    String[] split = fileTag.getDescription().split(";");
                    logicalTagsSet.addAll(Arrays.asList(split));
                }
            });
        }
        return logicalTagsSet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof File)) return false;
        File file = (File) o;
        return Objects.equals(id, file.id) &&
                Arrays.equals(bytes, file.bytes) &&
                Objects.equals(contentType, file.contentType) &&
                Objects.equals(fileName, file.fileName) &&
                Objects.equals(originalFilename, file.originalFilename) &&
                Objects.equals(dateOfUpload, file.dateOfUpload) &&
                Objects.equals(dateOfLastUpdate, file.dateOfLastUpdate);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, contentType, fileName, originalFilename, dateOfUpload, dateOfLastUpdate);
        result = 31 * result + Arrays.hashCode(bytes);
        return result;
    }

    @Override
    public String toString() {
        return "File{" +
                "id='" + id + '\'' +
                "contentType='" + contentType + '\'' +
                ", fileName='" + fileName + '\'' +
                ", originalFilename='" + originalFilename + '\'' +
                ", dateOfUpload=" + dateOfUpload +
                ", dateOfLastUpdate=" + dateOfLastUpdate +
                '}';
    }
}