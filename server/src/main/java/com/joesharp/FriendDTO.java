package com.joesharp;

import java.util.StringJoiner;

public class FriendDTO {
    private final long id;
    private final String name;

    public FriendDTO(final long id,
                     final String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", FriendDTO.class.getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("name='" + name + "'")
                .toString();
    }
}
