package com.cloud.server.backend.services.models.files;

import org.json.JSONException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.concurrent.atomic.AtomicReference;

/**
 * @Create 5/1/2022
 * @Author Michael Terletskyi
 */

@Component
public class FileServiceUtils {

    private FileServiceUtils() {

    }

    @SuppressWarnings("unchecked")
    public static String getValueFromJSONFile(String relativePath, String field) {
        ClassPathResource classPathResource = new ClassPathResource(relativePath);
        AtomicReference<String> atomicReference = new AtomicReference<>();
        try {
            URL classPathResourceURL = classPathResource.getURL();
            String path = classPathResourceURL.getPath();
            JSONParser parser = new JSONParser();
            JSONArray arr = (JSONArray) parser.parse(new FileReader(path));

            arr.forEach(url -> {
                String link = ((JSONObject) url).get(field).toString();
                atomicReference.set(link);
            });
        } catch (IOException | JSONException | ParseException e) {
            e.printStackTrace();
        }
        return atomicReference.get();
    }
}
