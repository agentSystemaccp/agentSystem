package com.accp.biz.impl;

import com.accp.biz.KeywordBiz;
import com.accp.dao.CustomerDao;
import com.accp.dao.DealDetailDao;
import com.accp.dao.KeyWordDao;
import com.accp.dao.UserInfoDao;
import com.accp.entity.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class KeywordBizImpl implements KeywordBiz {

    @Resource
    private KeyWordDao keyWordDao;

    @Resource
    private DealDetailDao dealDetailDao;
    @Resource
    private UserInfoDao userInfoDao;
    @Resource
    private CustomerDao customerDao;

    /**
     * 添加关键词,冻结资金,添加明细
     * @param keyword
     * @return
     */
    @Transactional(propagation = Propagation.REQUIRED,timeout = 30,rollbackFor = {RuntimeException.class,Exception.class})
   public int addKeyWord(Keyword keyword, UserInfo userInfo,int price) throws Exception{
       //冻结一年资金资金
       userInfo.setBalance(userInfo.getBalance()-(price/keyword.getTerm()));
       userInfo.setFrozenFunds(userInfo.getFrozenFunds()+price);          //冻结资金
       if(userInfoDao.updateUserInfo(userInfo)>0){
           //添加明细
           DealDetail dealDetail = new DealDetail();
           dealDetail.setUserId(userInfo.getUserid());
           dealDetail.setBalance((float) userInfo.getBalance()-(price/keyword.getTerm()));
           dealDetail.setCreateTime(new Date());
           dealDetail.setFinanceFund(-price/keyword.getTerm());
           dealDetail.setFinanceType("预注册冻结资金");
           dealDetail.setRemark(userInfo.getUserName()+"对"+keyword.getKeyword()+"进行关键词申请预注册操作,冻结资金:"+price/keyword.getTerm());
           dealDetail.setDetailType(13);
           if(dealDetailDao.addDealDetail(dealDetail)>0){
               keyWordDao.addKeyWord(keyword);
               Customer customer=new Customer();
               customer.setCustomerId(keyword.getCustomerId());
               customer.setKeywordId(keyWordDao.queryByKeyWord(keyword).getKeywordId());
               if(customerDao.updateCustomer(customer)>0){
                   return 1;
               }
           }
       }
        throw new RuntimeException("添加关键词时发生异常!");
   }


    /**
     * 关键词申请管理列表
     * @param keyword
     * @param pageSize
     * @param pageNo
     * @return
     */
    public Page<Keyword> queryKeyWordList(String keyword,int userId, int pageSize, int pageNo) {
        Page<Keyword> page = new Page<Keyword>();
        page.setPageSize(pageSize);
        page.setPageNo(pageNo);
        //有问题
        page.setTotalRows(keyWordDao.queryKeyWordCount(keyword,userId));
        //设置总页数
        page.setTotalPage((page.getTotalRows()+pageSize-1)/pageSize);
        //设置查询的集合
        page.setPageList(keyWordDao.queryKeyWordList(keyword,userId,(pageNo-1)*pageSize,pageSize));
        return page;
    }

    /**
     * 动态验证关键词是否存在
     * @param keyword
     * @return
     */
    public Keyword queryByKeyWord(Keyword keyword) {
        return keyWordDao.queryByKeyWord(keyword);
    }


    /**
     * 根据id得到关键词对象
     * @param keywordId
     * @return
     */
    public Keyword queryKeyWordById(int keywordId) {
        return keyWordDao.queryKeyWordById(keywordId);
    }

    /**
     * 续费操作
     * @param keyword
     * @return
     */
    @Transactional(propagation = Propagation.REQUIRED,timeout = 30,rollbackFor = {RuntimeException.class,Exception.class})
    public int updateKeyWord(Keyword keyword,UserInfo userInfo,int price) {
        //扣除续费资金
        userInfo.setBalance(userInfo.getBalance()-price);
        if(userInfoDao.updateUserInfo(userInfo)>0){
            //添加明细
            DealDetail dealDetail = new DealDetail();
            dealDetail.setUserId(userInfo.getUserid());
            dealDetail.setBalance((float) userInfo.getBalance()-price);
            dealDetail.setCreateTime(new Date());
            dealDetail.setFinanceFund(-price);
            dealDetail.setFinanceType("扣除续费"+keyword.getTerm()+"年"+price+"元");
            dealDetail.setRemark(userInfo.getUserName()+"对"+keyword.getKeyword()+"进行关键词续费操作,扣除续费资金:"+keyword.getTerm()+"年"+price+"元");
            if(dealDetailDao.addDealDetail(dealDetail)>0){
                if(keyWordDao.updateKeyWord(keyword)>0){
                    return 1;
                }
            }
        }
        throw new RuntimeException("关键词更新异常!!");



    }
}
