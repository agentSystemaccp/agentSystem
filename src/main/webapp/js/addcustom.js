var contactcount=0;
var path = $("#path").val();
	mover(1);
	//初始化日期	
	$("#regdate").val(new Date().format("yyyy-MM-dd"));
//	var date=new Date();	
//	$("#regdate").val(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay());

	
	//初始化customtypename
	$("#customtype").change(function(){
		$("#customtypename").val($("#customtype option:selected").text());		
	});
	//初始化customcardtypename
	$("#customcardtype").change(function(){
		$("#customcardtypename").val($("#customcardtype option:selected").text());		
	});
	
	//添加联系人
	$("#addcontact").click(function(){
		var str="<tr><td><input type='text' name='contacts["+contactcount+"].contactsName'  value=''></td>" +
				"<td><input type='text' name='contacts["+contactcount+"].contactsTel' placeholder='13|5|8000000000' class='contactsTel' value=''></td>" +
				"<td><input type='text' name='contacts["+contactcount+"].contactsFax' placeholder='0111-1111111' class='contactsFax' value=''></td>" +
				"<td><input type='text' name='contacts["+contactcount+"].contactsEmail' placeholder='zhangsan-001@gmail.com' class='contactsEmail' value=''></td>" +
				"<td><input type='text' name='contacts["+contactcount+"].contactsPost' value=''></td>" +
				"<td  onclick='delTr(this)'><a href='javascript:void()'>删除</a></td></tr>";
		$("#addtr").append(str);
		contactcount++;
	});
	
	//验证证件号码数字
	$("#cardnum").blur(function(){
		var t=$("#cardnum").val();
		if(!checkValidateNum(t))
            $.MsgBox.Alert("消息","证件号码请输入数字!");
	})





function delTr(obj){
	$(obj).parent().remove();
	contactcount--;
}
//验证,提交
function checksave(){
    var customname=$.trim($("#customname").val());
    //数据验证
    if(validate()){
        $.post(path+"/agent/isexitcustomname",{"companyName":customname},function(result){
            if(result=="peat"){
                $.MsgBox.Alert("消息","对不起,该客户名称已存在");
            }else if(result=="nopeat"){
                customerSubmit(customname);
            }
        },'html');
	}





}

function customerSubmit(customname) {


    $("#cform").ajaxSubmit({
        type:"post",
        url:path+"/agent/insertCustomer",
        dataType : 'json',
        success :function (result) {
            if(result=="success"){
                $.MsgBox.Alert("消息","添加[ "+customname+" ]成功!","/agent/toCustomerManage");
            }else {
                $.MsgBox.Alert("消息","添加[ "+customname+" ]失败,请重新添加!")
            }
        }

    })
}

