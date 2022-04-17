package com.cloud.server.backend.models.files;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * @Create 12/16/2021
 * @Author Michael Terletskyi
 * @Implements of {@link Serializable} interface.
 */

@Component
@Entity
@Table(name = "FILE_TAGS")
public class FileTag implements Serializable {
    private static final long serialVersionUID = 3871678542200642437L;

    @Id
    @Column(name = "file_tag_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(name = "description", length = 15000)
    private String description;

    @Column(name = "directory_name")
    private String directoryName;

    @Column(name = "tag_name")
    private String tagName;

    @Column(name = "tag_type_hex")
    private String tagTypeHex;

    @Column(name = "tag_type")
    private Integer tagType;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "file_id")
    private File file;

    public FileTag() {

    }

    public FileTag(String description, String directoryName, String tagName, String tagTypeHex, Integer tagType) {
        this.description = description;
        this.directoryName = directoryName;
        this.tagName = tagName;
        this.tagTypeHex = tagTypeHex;
        this.tagType = tagType;
    }

    @JsonIgnore
    public Long getId() {
        return id;
    }

    @JsonGetter
    public String getDescription() {
        return description;
    }

    @JsonGetter
    public String getDirectoryName() {
        return directoryName;
    }

    @JsonGetter
    public String getTagName() {
        return tagName;
    }

    @JsonGetter
    public String getTagTypeHex() {
        return tagTypeHex;
    }

    @JsonGetter
    public Integer getTagType() {
        return tagType;
    }

    @JsonIgnore
    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FileTag)) return false;
        FileTag fileTag = (FileTag) o;
        return Objects.equals(id, fileTag.id) &&
                Objects.equals(description, fileTag.description) &&
                Objects.equals(directoryName, fileTag.directoryName) &&
                Objects.equals(tagName, fileTag.tagName) &&
                Objects.equals(tagTypeHex, fileTag.tagTypeHex) &&
                Objects.equals(tagType, fileTag.tagType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, directoryName, tagName, tagTypeHex, tagType);
    }
}