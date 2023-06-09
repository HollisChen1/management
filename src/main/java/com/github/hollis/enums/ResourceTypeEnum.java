package com.github.hollis.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum ResourceTypeEnum {
    FUNCTION((byte) 1),
    MENU((byte) 2),
    COLLECTION((byte) 3);
    private final Byte code;

    public static List<Byte> all() {
        return Stream.of(ResourceTypeEnum.values()).map(ResourceTypeEnum::getCode).collect(Collectors.toList());
    }
}
