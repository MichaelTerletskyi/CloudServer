package com.cloud.server.backend.services.models.files.videos.impls;

import com.cloud.server.backend.exceptions.UserNotFoundException;
import com.cloud.server.backend.models.files.impls.videos.Video;
import com.cloud.server.backend.models.users.User;
import com.cloud.server.backend.repository.files.videos.VideoRepository;
import com.cloud.server.backend.services.models.files.videos.VideoService;
import com.cloud.server.backend.services.models.users.UserService;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Set;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link VideoService} class.
 */

@Service
public class VideoServiceImpl extends VideoService {
    private final VideoRepository videoRepository;
    private final UserService userService;
    private static final String USER_NOT_FOUND = "User not found";

    @Autowired
    public VideoServiceImpl(VideoRepository videoRepository, UserService userService) {
        this.videoRepository = videoRepository;
        this.userService = userService;
    }

    @Override
    public Video getById(Long id) {
        return videoRepository.getById(id);
    }

    @Override
    public List<Video> getAll() {
        return videoRepository.findAll();
    }

    @Override
    public Set<Video> getAllByUserId(Long id) {
        return videoRepository.findAllByUserId(id);
    }

    @Override
    public Video saveWithUserId(MultipartFile file, Long id) {
        if (!userService.isExistById(id)) {
            throw new UserNotFoundException(USER_NOT_FOUND);
        }

        Video video = new Video(file);
        User user = userService.getById(id);
        video.setUser(user);
        save(video);
        return video;
    }

    @Override
    public Video save(Video video) {
        return videoRepository.save(video);
    }

    @Override
    public Video update(Video video) {
        return save(video);
    }

    @Override
    public boolean hasId(Video video) {
        return ObjectUtils.isNotEmpty(video);
    }

    @Override
    public void deleteById(Long id) {
        videoRepository.deleteById(id);
    }

    @Override
    public void delete(Video video) {
        videoRepository.delete(video);
    }

    @Override
    public boolean isExistById(Long id) {
        return videoRepository.existsById(id);
    }
}
