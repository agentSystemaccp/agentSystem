package com.accp.controller;

import com.accp.biz.*;
import com.accp.entity.*;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

/**
 * 代理商控制器
 */
@Controller
@RequestMapping(value="/agent")
public class AgentController {

    @Resource
    private CustomerBiz customerBiz;
    @Resource
    private TypeBiz typeBiz;
    @Resource
    private KeywordBiz keywordBiz;
    @Resource
    private AppInfoBiz appInfoBiz;
    @Resource
    private ProtalBiz protalBiz;
    @Resource
    private ContactsBiz contactsBiz;
    @Resource
    private DealDetailBiz dealDetailBiz;



//    -------------------------------关键词申请------------------------------
    /**
     * 点击搜索框显示当前登录用户的所有客户
     * @return
     */
    @RequestMapping("/searchcustomer")
    @ResponseBody
    public Object searchcustom(String companyName,HttpSession session){
        int uid = ((UserInfo)session.getAttribute("userLogin")).getUserid();
        Customer customer = new Customer();
        customer.setUserId(uid);
        customer.setCompanyStatus(1);
        customer.setCompanyName(companyName);
        List<Customer> customerList = customerBiz.queryCustomBySearch(customer);
        return JSONArray.toJSONString(customerList);
    }


    /**
     * 加载服务类别
     * @return
     */
    @RequestMapping("/loadServiceType")
    @ResponseBody
    public Object loadServiceType(){
        return JSONArray.toJSONString(typeBiz.queryTypeByParentId(3,1));
    }

    /**
     * 关键词动态验证
     * @return
     */
    @RequestMapping("/valikey")
    @ResponseBody
    public Object valikey(String keyword){
        Keyword keyWord = new Keyword();
        keyWord.setKeyword(keyword);
        if(keywordBiz.queryByKeyWord(keyWord)==null){
            return "success";
        }
        return "fail";
    }


    /**
     * 动态计算价格
     * @return
     */
    @RequestMapping("/calculate")
    @ResponseBody
    public Object calculate(String servicetype,String serviceyear){
        int total = 0;
        if(servicetype.equals("20")){      //一年26000
            total= serviceyear.equals("买二赠一") ? 2*26000 :Integer.parseInt(serviceyear)*26000;
        }else if(servicetype.equals("21")){    //一年18000
            total= serviceyear.equals("买二赠一") ? 2*18000 :Integer.parseInt(serviceyear)*18000;
        }else {
            return JSON.toJSONString("exception");
        }
        return JSONArray.toJSONString(total);
    }

    /**
     * 余额验证
     * @return
     */
    @RequestMapping("/valiBalance")
    @ResponseBody
    public Object valiBalance(String balance,HttpSession session){
        UserInfo u = (UserInfo)session.getAttribute("userLogin");
        if(u.getBalance()<Integer.parseInt(balance)){
            return JSON.toJSONString("nomoney");
        }
        return  JSON.toJSONString("success");
    }


    /**
     * 关键词提交申请
     * @return
     */

    @RequestMapping("/submitkeyword")
    @ResponseBody
    public Object submitKeyword(String price,String keyword,String customerId,String servicetype ,String serviceyear,HttpSession session){
        UserInfo userInfo = ((UserInfo)session.getAttribute("userLogin"));
        Keyword keyWord = new Keyword();
        keyWord.setUserId(userInfo.getUserid());
        keyWord.setKeyword(keyword);
        keyWord.setCustomerId(Integer.parseInt(customerId));
        keyWord.setCreateTime(new Date());
        keyWord.setKeywordStatus(1);
        keyWord.setTypeId(Integer.parseInt(servicetype));
        keyWord.setCheckStatus(1);      //未审核
        keyWord.setUseStatus(1);        //使用状态,默认已使用
        keyWord.setAppStatus(2);        //未开通
        keyWord.setTerm(serviceyear.equals("买二赠一") ? 2:Integer.parseInt(serviceyear));
        if(keywordBiz.addKeyWord(keyWord,userInfo,Integer.parseInt(price))>0){
            return "success";
        }
        return "failed";
    }


    //    -------------------------------关键词申请管理------------------------------
    /**
     * 关键词列表
     * @return
     */
    @RequestMapping("/keyWordsList")
    @ResponseBody
    public Object keyWordsList(String keyword, HttpSession session,@RequestParam(value = "pageIndex",required = false) String pageIndex){
        int uid = ((UserInfo)session.getAttribute("userLogin")).getUserid();
        if(pageIndex==null||pageIndex==""){
            pageIndex="1";
        }
        Page<Keyword> page = keywordBiz.queryKeyWordList(keyword,uid,5,Integer.parseInt(pageIndex));
        return JSONArray.toJSONString(page);
    }


    /**
     * 根据id得到关键词信息,打开app
     * @param kid
     * @return
     */
    @RequestMapping("/openapp")
    public String openApp(String kid, Model model){
        Keyword keyword = keywordBiz.queryKeyWordById(Integer.parseInt(kid));
        model.addAttribute("keyword",keyword);
        return  "openapp";
    }


    /**
     * 开通app
     * @param
     * @return
     */
    @RequestMapping("/openappSubmit")
    @ResponseBody
    public Object openAppSubmit(String appCode,String appPassword,String keywordId){
        AppInfo appInfo = new AppInfo();
        appInfo.setAppCode(appCode);
        appInfo.setAppPassword(appPassword);
        appInfo.setKeywordId(Integer.parseInt(keywordId));


        Keyword keyword = new Keyword();
        keyword.setKeywordId(Integer.parseInt(keywordId));
        keyword.setAppStatus(1);        //1:已开通,2:未开通

        return JSONArray.toJSONString(appInfoBiz.addAppInfo(appInfo,keyword));
    }



    /**
     * 根据id得到关键词信息,打开app
     * @param kid
     * @return
     */
    @RequestMapping("/xufei")
    public String xufei(String kid, Model model){
        Keyword keyword = keywordBiz.queryKeyWordById(Integer.parseInt(kid));
        model.addAttribute("xufei",typeBiz.queryTypeByParentId(3,1));
        model.addAttribute("keyword",keyword);
        return  "xufei";
    }


    /**
     * 执行续费
     * @return
     */
    @RequestMapping("/submitXufei")
    @ResponseBody
    public Object xufeiSubmit(String keyword,String price,String keywordId,String servicetype ,String serviceyear,HttpSession session){
        UserInfo userInfo = ((UserInfo)session.getAttribute("userLogin"));
        Keyword keyWord = new Keyword();
        keyWord.setKeywordId(Integer.parseInt(keywordId));
        keyWord.setTypeId(Integer.parseInt(servicetype));
        keyWord.setTerm(Integer.parseInt(serviceyear));
        keyWord.setKeyword(keyword);
        if(keywordBiz.updateKeyWord(keyWord,userInfo,Integer.parseInt(price))>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("failed");
    }





//    -----------------------------------------------代理商客户管理-----------------------------------------------------------


    /**
     * 加载客户列表
     * @param session
     * @return
     */
    @RequestMapping("/customerList")
    @ResponseBody
    public Object customerList(HttpSession session,String cname,String pageIndex,Model model){
        int uid = ((UserInfo)session.getAttribute("userLogin")).getUserid();
        if(pageIndex==null||pageIndex==""){
            pageIndex="1";
        }
        Page<Customer> page = customerBiz.queryCustomByList(cname,uid,5,Integer.parseInt(pageIndex));
        model.addAttribute("companyName",cname);
        return JSONArray.toJSONString(page);
    }


    /**
     * 停用启用
     * @param cid
     * @param customStatus
     * @return
     */
    @RequestMapping("/modifycustomstatus")
    @ResponseBody
    public Object modifyCustomstatus(String cid,String customStatus){
        Customer customer = new Customer();
        customer.setCustomerId(Integer.parseInt(cid));
        if(customStatus.equals("1"))
            customer.setCompanyStatus(2);
        else
            customer.setCompanyStatus(1);

        String reuslt = "false";
        //操作成功
        if(customerBiz.updateCustomer(customer)>0)
            return "success";
        else
            return  "false";
    }

    /**
     * 修改客户
     * @return
     */
    @RequestMapping("/modifycustom")
    public String modifycustom(String cid,String type,Model model){
        Protal protal = null;
        List<Contacts> contactsList = null;
        if(!cid.equals("0")){
            protal =protalBiz.queryProtalById(0,Integer.parseInt(cid));
            contactsList = contactsBiz.queryContactsById(Integer.parseInt(cid));
        }


        List<Type> typeList = typeBiz.queryTypeByParentId(1,1);   //根据父级id拿值
        List<Type> idTypeList = typeBiz.queryTypeByParentId(4,1); //证件类型


        model.addAttribute("protal",protal);
        model.addAttribute("typeList",typeList);
        model.addAttribute("idTypeList",idTypeList);
        model.addAttribute("contactsList",contactsList);
        if(type.equals("modify")){
            return "modifycustomer";
        }else {
            return "addcustomer";
        }
    }

    /**
     * 验证用户是否存在
     * @param companyName
     * @return
     */
    @RequestMapping("/isexitcustomname")
    @ResponseBody
    public Object isExitCustomer(String companyName){
        Customer customer = new Customer();
        customer.setCompanyName(companyName);
        if(customerBiz.queryCustomerByParam(customer)==null){
            return "nopeat";
        }

        return "peat";
    }

    /**
     * 添加客户
     * @param customer
     * @param protal
     * @return
     */
    @RequestMapping("/insertCustomer")
    @ResponseBody
    public Object insertCustomer(Customer customer,Protal protal,HttpSession session){
        int uid = ((UserInfo)session.getAttribute("userLogin")).getUserid();
        customer.setUserId(uid);
        protal.setCreateTime(new Date());
        if(customerBiz.addCustomer(customer,protal)>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("false");
    }

    /**
     * 修改客户
     * @return
     */
    @RequestMapping("/updateCustomer")
    @ResponseBody
    public Object updateCustomer(Protal protal,Customer customer,HttpSession session){
        int uid = ((UserInfo)session.getAttribute("userLogin")).getUserid();
        customer.setUserId(uid);
        if(customerBiz.updateCustomerAndProtal(customer,protal)>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("false");
    }

    /**
     * 删除联系人
     * @return
     */
    @RequestMapping("/delContacts")
    @ResponseBody
    public Object delContacts(int contactsId){
        if(contactsBiz.delContactsById(contactsId)>0){
            return "success";
        }
        return  "false";
    }





//      ------------------------------------------代理商预付款--------------------------------------------------------

    /**
     * 跳转至预付款
     * @return
     */
    @RequestMapping("/loadType")
    @ResponseBody
    public Object loadType(String parentId){
        //下拉列表
        List<Type> typeList = typeBiz.queryTypeByParentId(Integer.parseInt(parentId),1);
        return JSONArray.toJSONString(typeList);
    }


    /**
     * 加载预付款列表
     * @param detailType
     * @param starttime
     * @param endtime
     * @return
     */
    @RequestMapping("/loadDetailList")
    @ResponseBody
    public Object loadDetailList(String detailType,String starttime,String endtime,String pageIndex,HttpSession session){
        int uid = ((UserInfo)session.getAttribute("userLogin")).getUserid();
        if(pageIndex==null||pageIndex==""){
            pageIndex="1";
        }
        if(detailType==null||detailType==""){
            detailType="0";
        }
        Page<DealDetail> detailPage = dealDetailBiz.queryListByParam(uid, Integer.parseInt(detailType), starttime, endtime, 5, Integer.parseInt(pageIndex));

        return JSON.toJSONString(detailPage);
    }



    @RequestMapping("/toYFK")
    public String toYFK(){
        return "yfk";
    }

    /**
     * 空跳至代理商客户管理页面
     * @return
     */
    @RequestMapping("/toCustomerManage")
    public String toCustomerManage(){
        return "customermanage";
    }

    /**
     * 空跳至关键词页面
     * @return
     */
    @RequestMapping("/toKeyWord")
    public String toKeyWord(){
        return "keyword";
    }


    /**
     * 跳至关键词申请管理
     * @return
     */
    @RequestMapping("/toKeyWordManage")
    public String toKeyWordManage(){
        return "keywordmanage";
    }
}
