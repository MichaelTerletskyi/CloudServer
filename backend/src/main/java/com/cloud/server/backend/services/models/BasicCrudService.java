package com.cloud.server.backend.services.models;

import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

/**
 * @Create 12/23/2021
 * @Author Michael Terletskyi
 */

@Service
public abstract class BasicCrudService<T> {
    public abstract T getById(Long id);

    public abstract List<T> getAll();

    public abstract T save(T t);

    public abstract T update(T t);

    public abstract boolean hasId(T t);

    public abstract void deleteById(Long id);

    public abstract void delete(T t);

    public abstract boolean isExistById(Long id);

    public T saveOrUpdate(T t) {
        return hasId(t) ? update(t) : save(t);
    }

    public void saveAll(Collection<T> collection) {
        collection.forEach(this::save);
    }
}