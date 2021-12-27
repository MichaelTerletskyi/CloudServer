package com.cloud.server.backend.services.models.files.audios.impls;

import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.impls.audios.Audio;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.files.audios.AudioRepository;
import com.cloud.server.backend.services.models.files.audios.AudioService;
import com.cloud.server.backend.services.models.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link AudioService} class.
 */

@Service
public class AudioServiceImpl extends AudioService {
    private final AudioRepository audioRepository;
    private final UserService userService;
    private static final String USER_NOT_FOUND = "User not found";

    @Autowired
    public AudioServiceImpl(AudioRepository audioRepository, UserService userService) {
        this.audioRepository = audioRepository;
        this.userService = userService;
    }

    @Override
    public Audio getById(Long id) {
        return audioRepository.getById(id);
    }

    @Override
    public List<Audio> getAll() {
        return audioRepository.findAll();
    }

    @Override
    public Set<Audio> getAllByUserId(Long id) {
        return audioRepository.findAllByUserId(id);
    }

    @Override
    public Audio saveWithUserId(MultipartFile file, Long id) {
        if (!userService.isExistById(id)) {
            throw new UserNotFoundException(USER_NOT_FOUND);
        }

        Audio audio = new Audio(file);
        User user = userService.getById(id);
        audio.setUser(user);
        save(audio);
        return audio;
    }

    @Override
    public Audio save(Audio audio) {
        return audioRepository.save(audio);
    }

    @Override
    public Audio update(Audio audio) {
        return save(audio);
    }

    @Override
    public boolean hasId(Audio audio) {
        return ObjectUtils.isEmpty(audio.getId());
    }

    @Override
    public void deleteById(Long id) {
        audioRepository.deleteById(id);
    }

    @Override
    public void delete(Audio audio) {
        audioRepository.delete(audio);
    }

    @Override
    public boolean isExistById(Long id) {
        return audioRepository.existsById(id);
    }
}