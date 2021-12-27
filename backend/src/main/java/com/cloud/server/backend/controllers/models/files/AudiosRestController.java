package com.cloud.server.backend.controllers.models.files;

import com.cloud.server.backend.models.files.impls.audios.Audio;
import com.cloud.server.backend.services.models.files.audios.AudioService;
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
public class AudiosRestController {
    private final AudioService audioService;

    @Autowired
    public AudiosRestController(AudioService audioService) {
        this.audioService = audioService;
    }

    @GetMapping("/get/all/audios/by/user/id/{id}")
    public ResponseEntity<Set<Audio>> getAllAudios(@PathVariable Long id) {
        Set<Audio> allAudiosByUserId = audioService.getAllByUserId(id);
        return new ResponseEntity<>(allAudiosByUserId, HttpStatus.OK);
    }

    @PostMapping("/save/audio/user_id={id}")
    public ResponseEntity<Audio> uploadAudio(@RequestParam(name = "audio") MultipartFile file, @PathVariable Long id) {
        return new ResponseEntity<>(audioService.saveWithUserId(file, id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/audio/by/id={id}")
    public ResponseEntity<Long> deleteAudio(@PathVariable Long id) {
        if (!audioService.isExistById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        audioService.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}