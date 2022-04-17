package com.cloud.server.backend.utils;

import com.cloud.server.backend.models.files.FileTag;
import com.drew.metadata.Directory;
import com.drew.metadata.Metadata;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * @Create 12/16/2021
 * @Author Michael Terletskyi
 */

@Component
public class FilesUtils {
    private FilesUtils() {

    }

    public static Set<FileTag> drewTagsAdapter(Metadata metadata) {
        Set<FileTag> fileTags = new LinkedHashSet<>();
        Iterable<Directory> directories = metadata.getDirectories();
        directories.forEach(directory -> {
            Collection<com.drew.metadata.Tag> drewTags = directory.getTags();
            drewTags.forEach(tag -> fileTags.add(convertDrewTagToFileTag(tag)));
        });
        return fileTags;
    }

    private static FileTag convertDrewTagToFileTag(com.drew.metadata.Tag tag) {
        return new FileTag(tag.getDescription(), tag.getDirectoryName(), tag.getTagName(), tag.getTagTypeHex(), tag.getTagType());
    }
}