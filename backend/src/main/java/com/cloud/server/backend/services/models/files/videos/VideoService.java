package com.cloud.server.backend.services.models.files.videos;

import com.cloud.server.backend.models.files.impls.videos.Video;
import com.cloud.server.backend.services.models.files.FileService;
import org.springframework.stereotype.Service;

/**
 * @Create 12/27/2021
 * @Author Michael Terletskyi
 * @Extends of {@link FileService} class.
 */

@Service
public abstract class VideoService extends FileService<Video> {

}
