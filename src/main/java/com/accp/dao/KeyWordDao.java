package com.accp.dao;

import com.accp.entity.Keyword;
import org.apache.ibatis.annotations.Param;

import java.security.Key;
import java.util.List;

public interface KeyWordDao {

    //查询关键词是否存在
    Keyword queryByKeyWord(Keyword keyword);
    //添加关键词
    int addKeyWord(Keyword keyword);
    //关键词申请管理
    List<Keyword> queryKeyWordList(@Param("keyword")String keyword,@Param("uid")int uid, @Param("offset") int offset, @Param("pageSize") int pageSize);

    int queryKeyWordCount(@Param("keyword") String keyword,@Param("userId") int userId);


    //根据id得到关键词
    Keyword queryKeyWordById(int keywordId);

    //修改关键词
    int updateKeyWord(Keyword keyword);
}
