package com.cloud.server.backend.controllers.models.files;

import com.cloud.server.backend.models.files.impls.videos.Video;
import com.cloud.server.backend.services.models.files.videos.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rest/api/data")
public class VideosRestController {
    private final VideoService videoService;

    @Autowired
    public VideosRestController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping("/get/all/video/by/user/id/{id}")
    public ResponseEntity<Set<Video>> getAllVideos(@PathVariable Long id) {
        Set<Video> allVideosByUserId = videoService.getAllByUserId(id);
        return new ResponseEntity<>(allVideosByUserId, HttpStatus.OK);
    }

    @PostMapping("/save/video/user_id={id}")
    public ResponseEntity<Video> uploadVideo(@RequestParam(name = "video") MultipartFile file, @PathVariable Long id) {
        return new ResponseEntity<>(videoService.saveWithUserId(file, id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/video/by/id={id}")
    public ResponseEntity<Long> deleteVideo(@PathVariable Long id) {
        if (!videoService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        videoService.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}