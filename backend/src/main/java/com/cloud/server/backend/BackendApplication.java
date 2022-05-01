package com.cloud.server.backend;

import com.cloud.server.backend.enums.ERole;
import com.cloud.server.backend.models.users.Role;
import com.cloud.server.backend.repository.users.RoleRepository;
import com.cloud.server.backend.services.models.files.FileServiceUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.env.Environment;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

@SpringBootApplication
public class BackendApplication {
    private final Environment env;

    @Autowired
    public BackendApplication(Environment env) {
        this.env = env;
    }

    @Bean
    public StandardServletMultipartResolver multipartResolver() {
        return new StandardServletMultipartResolver();
    }

    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedOrigins("*")
                        .allowedHeaders("*");
            }
        };
    }

     // First Start
//    @Bean
//    CommandLineRunner commandLineRunner(RoleRepository roleRepository) {
//        return args -> {
//            try {
//                String driverClassName = env.getProperty("spring.datasource.driver-class-name");
//                String datasourceUrl = env.getProperty("spring.datasource.url");
//                String username = env.getProperty("spring.datasource.username");
//                String password = env.getProperty("spring.datasource.password");
//                String bytesUsageLimit = FileServiceUtils.getValueFromJSONFile("bytesUsageLimit");
//
//                roleRepository.save(new Role(ERole.ROLE_USER));
//                roleRepository.save(new Role(ERole.ROLE_ADMIN));
//
//                Class.forName(driverClassName);
//                Connection connection = DriverManager.getConnection(datasourceUrl, username, password);
//
//                Statement stmt = connection.createStatement();
//                String sql = "SET GLOBAL max_allowed_packet=" + bytesUsageLimit;
//                stmt.execute(sql);
//                connection.close();
//            } catch (ClassNotFoundException | SQLException e) {
//                e.printStackTrace();
//            }
//        };
//    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}