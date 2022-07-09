package com.cloud.server.backend.services.models;

import java.util.Collection;
import java.util.List;

/**
 * @Create 7/9/2022
 * @Author Michael Terletskyi
 */

public interface BasicCrudService<T> {
    T getById(Long id);

    List<T> getAll();

    T save(T t);

    T update(T t);

    boolean hasId(T t);

    void deleteById(Long id);

    void delete(T t);

    boolean isExistById(Long id);

    default T saveOrUpdate(T t) {
        return hasId(t) ? update(t) : save(t);
    }

    default void saveAll(Collection<T> collection) {
        collection.forEach(this::save);
    }
}