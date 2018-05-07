var userid;
var userbalance;
var path;
window.onload=function() {
    userid = -1;
    mover(4);
	path=$("#path").val();
    $("#searchUserText").keyup(function () {

        loadUsers();
    });
    $("#searchUserText").click(function () {

        loadUsers();
    });

    $("#caiwuok").click(function () {
        var zijin= /^[+-]?\d+(?:\.\d{1,2})?$/;

        // 提交并执行账户操作
        if (userid < 0)
            $.MsgBox.Alert("消息","对不起,您还没有选择用户,请搜索进行用户选择!");
        else if ($("#zijintype").val() == '') {
            $.MsgBox.Alert("消息","对不起,你还没有选择操作类型,请选择!");
        }
        else if ($("#zijin").val() == '' || $("#zijin").val().length <= 0) {
            $.MsgBox.Alert("消息","对不起,您还没有输入金额!");
        }
        else if(zijin.test($("#zijin").val())==false){
            $.MsgBox.Alert("消息","对不起，请填写正确的操作资金格式!");
        }else {
            if (confirm("是否确定执行当前操作?")) {

                $.post(path+"/deal/createAccountDetail", {
                    'userId': userid,
                    //'account.userName': $("#searchUserText").val(),
                    'money': $("#zijin").val(),
                    //'accountDetail.detailType': $("#zijintype").val(),
                    'detailTypeName': $("#zijintype option:selected").text(),
                    'memo': $("#memo").val(),
                    'userbalance':userbalance
                }, function (result) {
                    if (result == "success") {

                        $.MsgBox.Alert("消息","恭喜,当前操作成功");
                        $("#systemtip").html("恭喜,当前操作成功");
                        $("#searchUserText").val("");
                    }
                    else {
                        $.MsgBox.Alert("消息","对不起,当前操作失败");
                        $("#systemtip").html("对不起,当前操作失败");
                        $("#searchUserText").val("");
                    }

                }, 'html');
            }
        }

    });

}

function confirmUser(uid, ubalance,ucode) {
	userid = uid;
    userbalance=ubalance;
	$("#searchUserText").val(ucode);
	$("#searchresult").html("");
}
function loadUsers() {
    // {
    //     'user.userAccount' : $("#searchUserText").val()
    // },
	var url=path+"/user/showUserName";
	$.post(url,function(result) {
		// result 是List<User> 的json格式
		var userList = "<ul>";
		for ( var i = 0; i < result.length; i++) {
			userList = userList + "<li onclick=\"confirmUser('" + result[i].userid
                    +"','" + result[i].balance
					+ "','" + result[i].userAccount + "')\">" + result[i].userAccount
					+ "</li>";
		}

		userList = userList + "</ul>";
		$("#searchresult").html(userList);

	}, 'json');
}