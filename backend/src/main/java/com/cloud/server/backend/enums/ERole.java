package com.cloud.server.backend.enums;

import com.cloud.server.backend.exceptions.RoleNotFoundException;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @Create 12/19/2021
 * @Author Michael Terletskyi
 */

public enum ERole {
    ROLE_USER,
    ROLE_ADMIN;

    public static ERole findRole(String title) {
        return new HashSet<>(findAll())
                .stream()
                .filter(role -> role.toString().equals(title.toUpperCase().strip()))
                .collect(Collectors.toSet())
                .stream()
                .findFirst()
                .orElseThrow(RoleNotFoundException::new);
    }

    public static Set<ERole> findAll() {
        return new HashSet<>(Set.of(ERole.values()));
    }
}