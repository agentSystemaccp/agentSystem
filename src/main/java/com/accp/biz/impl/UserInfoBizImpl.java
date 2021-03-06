package com.accp.biz.impl;

import com.accp.biz.UserInfoBiz;
import com.accp.dao.ResourceDao;
import com.accp.dao.RoleDao;
import com.accp.dao.UserInfoDao;
import com.accp.entity.Role;
import com.accp.entity.UserInfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;


@Service("userInfoBiz")
public class UserInfoBizImpl implements UserInfoBiz {

    @Resource(name = "userInfoDao")
    private UserInfoDao userInfoDao;
    @Resource(name = "resourceDao")
    private ResourceDao resourceDao;
    @Resource(name = "roleDao")
    private RoleDao roleDao;

    /**
     * 登录验证
     * @param userInfo
     * @return
     */
    public UserInfo login(UserInfo userInfo) {
        userInfo=userInfoDao.login(userInfo);
        if(userInfo!=null){
            Role role=new Role();
            role.setRoleId(userInfo.getRoleId());
            Role role1=roleDao.findRoleInfo(role);      //查找角色权限信息
            userInfo .setRole(role1);
        }
        return userInfo;
    }


    /**
     *  修改密码
     * @param userInfo
     * @return
     */
    @Transactional(propagation = Propagation.REQUIRED,timeout = 30,rollbackFor = {RuntimeException.class,Exception.class})
    public int updatePassword(UserInfo userInfo) throws Exception {
        if(userInfoDao.updatePassword(userInfo)>0){
            return 1;
        }
        throw new RuntimeException("修改密码异常!");

    }

    /**
     * 通过日期来查询用户余额信息
     * @param starttime
     * @param endtime
     * @return
     */
    public List<UserInfo> queryAllUserBalance(String starttime, String endtime) {
        return userInfoDao.queryAllUserBalance(starttime,endtime);
    }

    public List<UserInfo> queryAllUserInfo() {
        return userInfoDao.queryAllUserInfo();
    }

    public boolean updateUserInfo(UserInfo userInfo) throws Exception{
        if (userInfoDao.updateUserInfo(userInfo)>0){
            return true;
        }
        throw new RuntimeException("修改登录用户异常!");
    }
}
