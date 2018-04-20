package com.accp.dao;

import com.accp.entity.Menu;
import com.accp.entity.Resource;
import com.accp.entity.Role;

import java.util.List;

public interface ResourceDao {
    /**
     * 根据参数查询信息
     * @param resource
     * @return
     */
    Resource findResourceInfo(Resource resource);

    /**
     * 根据角色查询其权限
     * @param role
     * @return
     */
    List<Resource> findResourceByRole(Role role);

    /**
     * 查询所有权限
     * @return
     */
    List<Resource> findAllResource();


}
