package com.cloud.server.backend.utils;

import com.cloud.server.backend.models.files.impls.images.Tag;
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
public class ImageUtils {
    private ImageUtils() {

    }

    public static Set<Tag> drewTagsAdapter(Metadata metadata) {
        Set<Tag> tags = new LinkedHashSet<>();
        Iterable<Directory> directories = metadata.getDirectories();
        directories.forEach(directory -> {
            Collection<com.drew.metadata.Tag> drewTags = directory.getTags();
            drewTags.forEach(tag -> tags.add(convertDrewTagToTag(tag)));
        });
        return tags;
    }

    private static Tag convertDrewTagToTag(com.drew.metadata.Tag tag) {
        return new Tag(tag.getDescription(), tag.getDirectoryName(), tag.getTagName(), tag.getTagTypeHex(), tag.getTagType());
    }
}