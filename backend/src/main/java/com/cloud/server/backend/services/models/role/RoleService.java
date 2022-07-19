package com.cloud.server.backend.services.models.role;

import com.cloud.server.backend.enums.ERole;
import com.cloud.server.backend.exceptions.RoleNotFoundException;
import com.cloud.server.backend.models.users.Role;
import com.cloud.server.backend.repository.users.RoleRepository;
import com.cloud.server.backend.services.models.BasicCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

/**
 * @Create 7/9/2022
 * @Author Michael Terletskyi
 * @Extends of {@link BasicCrudService} interface.
 */

@Service
public class RoleService implements BasicCrudService<Role> {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role getById(Long id) {
        return roleRepository.findById(id).orElseThrow(()
                -> new RoleNotFoundException(String.format("Role with id '%d' has not been found", id)));
    }

    @Override
    public List<Role> getAll() {
        return roleRepository.findAll();
    }

    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public Role update(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public boolean hasId(Role role) {
        return Objects.nonNull(role.getId());
    }

    @Override
    public void deleteById(Long id) {
        roleRepository.deleteById(id);
    }

    @Override
    public void delete(Role role) {
        roleRepository.delete(role);
    }

    @Override
    public boolean isExistById(Long id) {
        return roleRepository.existsById(id);
    }

    public Role findByName(ERole name) {
        return this.roleRepository.findByName(name).orElseThrow(()
                -> new RoleNotFoundException(String.format("Role name '%s' has not been found", name)));
    }
}