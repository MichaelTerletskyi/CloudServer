package com.cloud.server.backend.models.users;

import com.cloud.server.backend.enums.ERole;
import com.cloud.server.backend.models.files.File;
import com.cloud.server.backend.services.models.files.AtomicBigInteger;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.maxmind.geoip.Location;
import com.maxmind.geoip.LookupService;
import io.jsonwebtoken.lang.Collections;
import net.sf.oval.constraint.Email;
import net.sf.oval.constraint.Length;
import net.sf.oval.constraint.NotBlank;
import net.sf.oval.constraint.Size;
import net.sf.oval.guard.Guarded;
import net.sf.oval.guard.PostValidateThis;
import org.apache.commons.io.FileUtils;
import org.json.JSONException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.*;
import java.math.BigInteger;
import java.net.URL;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;

/**
 * @Create 4/29/2021
 * @Author Michael Terletskyi
 * @Implements of {@link Serializable} interface.
 */

@Guarded(checkInvariants = false)
@Component
@Entity
@Table(name = "USERS",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User implements Serializable {
    private static final long serialVersionUID = -7704786855879035969L;

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min = 2, max = 32)
    @Length(min = 2, max = 32)
    @Column(length = 32)
    private String username;

    @NotBlank
    @Email
    @Size(min = 3, max = 254)
    @Length(min = 3, max = 254)
    @Column(length = 254)
    private String email;

    @NotBlank
    @Size(min = 8, max = 60)
    @Length(min = 8, max = 60)
    @Column(length = 60)
    private String password;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<File> files = new HashSet<>();

    public User() {

    }

    @PostValidateThis
    public User(@NotBlank @Size(min = 2, max = 32) @Length(min = 2, max = 32) String username,
                @NotBlank @Email @Size(min = 3, max = 254) @Length(min = 3, max = 254) String email,
                @NotBlank @Size(min = 8, max = 60) @Length(min = 8, max = 60) String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @JsonIgnore
    public Set<File> getFiles() {
        return files;
    }

    public void setFiles(Set<File> files) {
        this.files = files;
    }

    @JsonGetter
    public long amountOfFiles() {
        return this.files.size();
    }

    @JsonIgnore
    public boolean isAdmin() {
        return this.getRoles().stream().allMatch(role -> role.getName() == ERole.ROLE_ADMIN);
    }

    @JsonGetter
    public Set<String> logicalTagsOfAllUserFiles() {
        Set<String> logicalTagsSet = new HashSet<>();
        if (Objects.nonNull(getFiles()) && Collections.isEmpty(logicalTagsSet)) {
            getFiles().forEach(file -> logicalTagsSet.addAll(file.logicalTags()));
        }
        return logicalTagsSet;
    }

    @JsonGetter
    public BigInteger sizeOfAllUserFilesInBytes() {
        BigInteger sizeOfFiles = BigInteger.ZERO;
        AtomicBigInteger atomicBigInteger = new AtomicBigInteger(sizeOfFiles);
        getFiles().forEach(file -> atomicBigInteger.incrementAndGet(file.sizeInBytes()));
        return atomicBigInteger.get();
    }

    @JsonGetter
    public String displaySizeOfAllUserFilesInBytes() {
        return FileUtils.byteCountToDisplaySize(sizeOfAllUserFilesInBytes());
    }

    @JsonGetter
    public BigInteger memoryUsageRemaining() {
        return maxUsageMemory().subtract(sizeOfAllUserFilesInBytes());
    }

    @JsonGetter
    public BigInteger maxUsageMemory() {
        return BigInteger.valueOf(FileUtils.ONE_GB);
    }

    @JsonGetter
    public String displayMemoryUsageRemaining() {
        return FileUtils.byteCountToDisplaySize(memoryUsageRemaining());
    }

    @JsonGetter
    public Location location() {
        try {
            ClassPathResource classPathResource = new ClassPathResource("static/GeoLiteCity.dat", this.getClass().getClassLoader());
            URL url = classPathResource.getURL();
            java.io.File file = new java.io.File(url.getPath());
            LookupService lookupService = new LookupService(file, LookupService.GEOIP_MEMORY_CACHE | LookupService.GEOIP_CHECK_CACHE);
            return lookupService.getLocation(ipAddress());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    @JsonGetter
    @SuppressWarnings("unchecked")
    public String ipAddress() {
        try {
            ClassPathResource classPathResource = new ClassPathResource("static/urls.json", this.getClass().getClassLoader());
            URL classPathResourceURL = classPathResource.getURL();
            String path = classPathResourceURL.getPath();

            JSONParser parser = new JSONParser();
            JSONArray arr = (JSONArray) parser.parse(new FileReader(path));
            AtomicReference<String> atomicReferenceUrl = new AtomicReference<>();
            arr.forEach(url -> {
                String link = ((JSONObject) url).get("url").toString();
                atomicReferenceUrl.set(link);
            });

            URL ipUrl = new URL(atomicReferenceUrl.get());
            try (BufferedReader br = new BufferedReader(new InputStreamReader(ipUrl.openStream()))) {
                return br.readLine();
            }
        } catch (IOException | JSONException | ParseException e) {
            e.printStackTrace();
        }
        return "IP is not recognized";
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) &&
                Objects.equals(username, user.username) &&
                Objects.equals(email, user.email) &&
                Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}