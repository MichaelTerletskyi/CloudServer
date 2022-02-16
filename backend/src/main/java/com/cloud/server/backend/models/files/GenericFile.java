package com.cloud.server.backend.models.files;

import com.cloud.server.backend.enums.EFileType;
import com.cloud.server.backend.models.users.User;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Objects;

/**
 * @Create 12/15/2021
 * @Author Michael Terletskyi
 * @Implements of {@link Serializable} interface.
 */

@Component
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "DISCRIMINATOR_COLUMN")
@Table(name = "FILES")
public abstract class GenericFile implements Serializable, AutoCloseable {
    private static final long serialVersionUID = 6786256300350384940L;

    @Id
    @Column(name = "file_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "bytes")
    protected byte[] bytes;

    @Column(name = "content_type")
    protected String contentType;

    @Column(name = "file_name")
    protected String fileName;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    protected LocalDateTime dateOfUpload;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    protected LocalDateTime dateOfLastUpdate;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonGetter
    public Long getId() {
        return this.id;
    }

    @JsonGetter
    public byte[] getBytes() {
        return this.bytes;
    }

    @JsonGetter
    public String getContentType() {
        return this.contentType;
    }

    @JsonGetter
    public String getFileName() {
        return this.fileName;
    }

    @JsonGetter
    public LocalDateTime getDateOfUpload() {
        return this.dateOfUpload;
    }

    @JsonGetter
    public LocalDateTime getDateOfLastUpdate() {
        return this.dateOfLastUpdate;
    }

    public void setDateOfLastUpdate(LocalDateTime dateOfLastUpdate) {
        this.dateOfLastUpdate = dateOfLastUpdate;
    }

    @JsonGetter
    public BigInteger getSizeInBytes() {
        return BigInteger.valueOf(this.bytes.length);
    }

    @JsonGetter
    public String getDisplaySize() {
        return FileUtils.byteCountToDisplaySize(getSizeInBytes());
    }

    @JsonGetter
    public abstract EFileType fileType();

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GenericFile)) return false;
        GenericFile that = (GenericFile) o;
        return Objects.equals(id, that.id) &&
                Arrays.equals(bytes, that.bytes) &&
                Objects.equals(contentType, that.contentType) &&
                Objects.equals(fileName, that.fileName);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, contentType, fileName);
        result = 31 * result + Arrays.hashCode(bytes);
        return result;
    }

    @Override
    public void close() throws Exception {

    }
}