package com.accp.biz;

import com.accp.entity.UserInfo;

import java.util.Date;
import java.util.List;

public interface UserInfoBiz {

    /**
     * 登录验证
     * @param userInfo
     * @return
     */
    UserInfo login(UserInfo userInfo);

    /**
     * 修改密码
     * @param userInfo
     * @return
     */
    int updatePassword(UserInfo userInfo) throws Exception;

    /**
     * 通过日期来查询用户余额信息
     * @param starttime
     * @param endtime
     * @return
     */
    public List<UserInfo> queryAllUserBalance(String starttime, String endtime);

    /**
     * 查找所有用户
     * @return
     */
    List<UserInfo> queryAllUserInfo();

    /**
     * 修改用户信息
     * @param userInfo
     * @return
     */
    boolean updateUserInfo(UserInfo userInfo) throws Exception;
}
