package com.accp.controller;

import com.accp.biz.TypeBiz;
import com.accp.entity.Type;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/type")
public class TypeController {

    @Resource
    private TypeBiz typeBiz;

    //查询财务类型集合并且跳转到财务类型页面
    @RequestMapping("/queryFinanceType")
    public String queryFinanceType(Model model){
        //查询财务类型集合
        List<Type> financeType = typeBiz.queryTypeByParentId(2,0);
        model.addAttribute("financeType",financeType);
        return "financeType";
    }

    //查询服务类型并且跳转到服务类型页面
    @RequestMapping("/queryServiceType")
    public String queryServiceType(Model model){
        List<Type> serviceType = typeBiz.queryTypeByParentId(3,0);
        model.addAttribute("serviceType",serviceType);
        return "serviceType";
    }

    //查询服务年限并且跳转到服务年限页面
    @RequestMapping("/queryLengthService")
    public String queryLengthType(Model model){
        Type type = typeBiz.queryTypeByName("服务年限");
        model.addAttribute("type",type);
        return "lengthService";
    }

    //查询app地址并且跳转到App地址页面
    @RequestMapping("/queryAppURL")
    public String queryAppURL(Model model){
        Type type = typeBiz.queryTypeByName("AAP系统地址");
        model.addAttribute("type",type);
        return "appURL";
    }

    //删除类型
    @RequestMapping("/delFinanceTypo")
    @ResponseBody
    public String delFinanceTypo(int typeId){
        int result = typeBiz.delType(typeId);
        if(result == 1){
            return "1";
        }
        return "2";
    }

    //检查类型是否存在
    @RequestMapping("/checkType")
    @ResponseBody
    public String checkType(String typeName){
        Type type = typeBiz.queryTypeByName(typeName);
        if(type == null){
            return "1";
        }
        return "0";
    }

    //添加类型
    @RequestMapping("/addType")
    @ResponseBody
    public String addType(Type type){
        int result = typeBiz.addType(type);
        if(result == 1){
            return "1";
        }
        return "2";
    }

    //修改类型
    @RequestMapping("/updateType")
    @ResponseBody
    public String updateType(Type type){
        int result = typeBiz.updateType(type);
        if(result == 1){
            return "1";
        }
        return "2";
    }
}
