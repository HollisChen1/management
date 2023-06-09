package com.github.hollis.domain.vo.permission;

import com.github.hollis.domain.vo.base.Tree;
import lombok.Data;

import java.util.Date;

@Data
public class ResourceTree extends Tree<ResourceTree> {
    private Integer id;
    private String resourceCode;
    private String resourceName;
    private String resourceDescription;
    private Byte resourceType;
    private String icon;
    private String resourceUrl;
    private Integer createBy;
    private Date createAt;
    private Integer sort;
    private boolean checked;
}
