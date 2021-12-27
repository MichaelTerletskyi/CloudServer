package com.cloud.server.backend.services.models.files.audios;

import com.cloud.server.backend.models.files.impls.audios.Audio;
import com.cloud.server.backend.services.models.files.FileService;
import org.springframework.stereotype.Service;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link FileService} class.
 */

@Service
public abstract class AudioService extends FileService<Audio> {

}