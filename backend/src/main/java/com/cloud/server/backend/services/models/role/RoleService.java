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

@Service
public class RoleService extends BasicCrudService<Role> {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role getById(Long id) {
        return this.roleRepository.getById(id);
    }

    @Override
    public List<Role> getAll() {
        return this.roleRepository.findAll();
    }

    @Override
    public Role save(Role role) {
        return this.roleRepository.save(role);
    }

    @Override
    public Role update(Role role) {
        return this.roleRepository.save(role);
    }

    @Override
    public boolean hasId(Role role) {
        return Objects.nonNull(role.getId());
    }

    @Override
    public void deleteById(Long id) {
        this.roleRepository.deleteById(id);
    }

    @Override
    public void delete(Role role) {
        this.roleRepository.delete(role);
    }

    @Override
    public boolean isExistById(Long id) {
        return roleRepository.existsById(id);
    }

    public Role findByName(String name) {
        ERole role = ERole.findRole(name);
        return this.roleRepository.findByName(role).orElseThrow(RoleNotFoundException::new);
    }
}
