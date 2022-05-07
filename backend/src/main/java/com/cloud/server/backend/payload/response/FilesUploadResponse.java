package com.cloud.server.backend.payload.response;

import com.cloud.server.backend.models.files.File;

import java.util.Set;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

public class FilesUploadResponse {
    private Set<String> messages;
    private Set<File> files;

    public FilesUploadResponse(Set<String> messages, Set<File> files) {
        this.messages = messages;
        this.files = files;
    }

    public Set<String> getMessages() {
        return messages;
    }

    public void setMessages(Set<String> messages) {
        this.messages = messages;
    }

    public Set<File> getFiles() {
        return files;
    }

    public void setFiles(Set<File> files) {
        this.files = files;
    }
}