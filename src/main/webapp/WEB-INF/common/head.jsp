<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>

<title>代理商管理</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery-form.js"></script>
	<script type="text/javascript" src='${pageContext.request.contextPath }/js/prompt.js'></script>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/public.css">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/main.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/files/updatePassword/styles.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/caiwu.css">
<!-- ymPrompt弹出框 -->
<%--<link rel="stylesheet" type="text/css" href="/alertframe/skin/simple_gray/ymPrompt.css" />--%>
<%--<!-- humane提醒库 -->--%>
<%--<link id='theme' rel='stylesheet' href='/humane/themes/original.css' />--%>




<script type="text/javascript" src="${pageContext.request.contextPath }/js/main.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/public.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/login.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/ymPrompt.js"></script>
	<%--<script src="${pageContext.request.contextPath }/js/menu.js" type="text/javascript"></script>--%>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<link href="${pageContext.request.contextPath }/resources/css/jquery-ui-themes.css" type="text/css" rel="stylesheet"/>
	<link href="${pageContext.request.contextPath }/resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
	<link href="${pageContext.request.contextPath }/js/styles.css" type="text/css" rel="stylesheet"/>
	<link href="${pageContext.request.contextPath }/files/manage/styles.css" type="text/css" rel="stylesheet"/>

	<!-- humane提醒库 -->
	<link id='theme' rel='stylesheet' href='${pageContext.request.contextPath }/humane/themes/original.css' />

	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/axQuery.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/globals.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/axutils.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/annotation.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/axQuery.std.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/doc.js"></script>
	<script src="${pageContext.request.contextPath }/js/document.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/messagecenter.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/events.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/action.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/expr.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/geometry.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/flyout.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/ie.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/model.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/repeater.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/sto.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/utils.temp.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/variables.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/drag.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/move.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/visibility.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/style.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/adaptive.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/tree.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/init.temp.js"></script>
	<script src="${pageContext.request.contextPath }/files/updatePassword/data.js"></script>
	<script src="${pageContext.request.contextPath }/files/manage/data.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/legacy.js"></script>
	<script src="${pageContext.request.contextPath }/resources/scripts/prototype/viewer.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/permission.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/caiwu.js"></script>


</head>
<body>
	<div class="head">
		<ul>
			<li class="headfunc">
				<ul>
					<li>欢迎您 ：${userLogin.userName} <a
						id="modifypwdbtna">修改密码</a> <a href="#" id="loginout">退出</a>
						</li>
				</ul>
			</li>
	</ul>

	</div>
	<!-- 主菜单 -->
	<div id="menu">
		<ul>
			<c:forEach var="menu" items="${userLogin.role.menus}" varStatus="sta">
					<li class="m_line"><img src="${pageContext.request.contextPath }/imgs/line1.gif"></li>
					<li id="m_${sta.count}" class="m_li"  onmouseover="mover(${sta.count})">
						<a class="showChildMenu" menuid="${menu.menu_id}" href="javascript:;">${menu.menuName}</a>
					</li>
			</c:forEach>
		</ul>
	</div>

	<!-- 子菜单 -->
	<div class="subbox">
		<ul class="smenu">

		</ul>
	</div>


	<!-- 修改密码 -->
	<input type="hidden" id="path" value="${pageContext.request.contextPath}" name="path"/>
	<input type="hidden" id="role_id" value="${userLogin.role.roleId}"/>
	<input type="hidden" name="allUrl" id="allUrl" value="${pageContext.request.getRequestURI()}">
	<div id="modifydiv" class="modifydiv">

		<div class="modifTop">修改密码</div>
		<div class="modifyPasswordContent">
				<ul>
					<li>请输入原密码：<input type="password" id="oldpwdtext"> <span
							id="oldpwdtexttip">您本次登录的密码</span>
					<li>请输入新密码：<input type="password" id="newpwd"><span
							id="newpwdtip">新密码不少于6个字符</span>
					<li>请确认原密码：<input type="password" id="newpwd2"><span
							id="newpwd2tip">新密码不少于6个字符</span>
					<li><input type="button" id="modifypwdbtn" value="确认修改密码">
						<input id="modifypwdcancel" type="button" value="取消">
				</ul>


		</div>
		<div></div>
	</div>