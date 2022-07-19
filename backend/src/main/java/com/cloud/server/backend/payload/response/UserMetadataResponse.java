package com.cloud.server.backend.payload.response;

import com.cloud.server.backend.models.users.User;

import java.math.BigInteger;
import java.util.Objects;

/**
 * @Create 7/17/2021
 * @Author Michael Terletskyi
 */

public class UserMetadataResponse {
    private BigInteger sizeOfAllUserFilesInBytes;
    private BigInteger maxUsageMemory;
    private BigInteger amountOfFiles;
    private String displaySizeOfAllUserFiles;
    private String displayMemoryUsageRemaining;
    private String displayMaxUsageMemory;

    public UserMetadataResponse(User user) {
        this.sizeOfAllUserFilesInBytes = user.sizeOfAllUserFilesInBytes();
        this.maxUsageMemory = user.maxUsageMemory();
        this.amountOfFiles = new BigInteger(String.valueOf(user.amountOfFiles()));
        this.displaySizeOfAllUserFiles = user.displaySizeOfAllUserFiles();
        this.displayMemoryUsageRemaining = user.displayMemoryUsageRemaining();
        this.displayMaxUsageMemory = user.displayMaxUsageMemory();
    }

    public BigInteger getSizeOfAllUserFilesInBytes() {
        return sizeOfAllUserFilesInBytes;
    }

    public BigInteger getMaxUsageMemory() {
        return maxUsageMemory;
    }

    public BigInteger getAmountOfFiles() {
        return amountOfFiles;
    }

    public String getDisplaySizeOfAllUserFiles() {
        return displaySizeOfAllUserFiles;
    }

    public String getDisplayMemoryUsageRemaining() {
        return displayMemoryUsageRemaining;
    }

    public String getDisplayMaxUsageMemory() {
        return displayMaxUsageMemory;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserMetadataResponse)) return false;
        UserMetadataResponse that = (UserMetadataResponse) o;
        return Objects.equals(sizeOfAllUserFilesInBytes, that.sizeOfAllUserFilesInBytes) &&
                Objects.equals(maxUsageMemory, that.maxUsageMemory) &&
                Objects.equals(amountOfFiles, that.amountOfFiles) &&
                Objects.equals(displaySizeOfAllUserFiles, that.displaySizeOfAllUserFiles) &&
                Objects.equals(displayMemoryUsageRemaining, that.displayMemoryUsageRemaining) &&
                Objects.equals(displayMaxUsageMemory, that.displayMaxUsageMemory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sizeOfAllUserFilesInBytes, maxUsageMemory, amountOfFiles, displaySizeOfAllUserFiles, displayMemoryUsageRemaining, displayMaxUsageMemory);
    }

    @Override
    public String toString() {
        return "UserMetadataResponse{" +
                "sizeOfAllUserFilesInBytes=" + sizeOfAllUserFilesInBytes +
                ", maxUsageMemory=" + maxUsageMemory +
                ", amountOfFiles=" + amountOfFiles +
                ", displaySizeOfAllUserFiles='" + displaySizeOfAllUserFiles + '\'' +
                ", displayMemoryUsageRemaining='" + displayMemoryUsageRemaining + '\'' +
                ", displayMaxUsageMemory='" + displayMaxUsageMemory + '\'' +
                '}';
    }
}