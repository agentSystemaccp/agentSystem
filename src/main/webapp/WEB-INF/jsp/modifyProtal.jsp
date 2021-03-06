﻿<%@include file="../common/head.jsp"%>
<div class="mbxnav">
  <!-- 导航 -->
  门户管理\ <a href="">门户管理</a>\ 修改门户信息
</div>
<div class="container">
  <form id="cform" action="" method="post">

    <input type="hidden" name="appId" value="${protal.customer.keyword.appInfo.appId}">
    <c:if test="${protal != null}">
      <div class="subtitle">注册的移动云端信息</div>
      <div class="info2">
        <ul>
          <li>登录账号 :
            <c:if test="${not empty protal.customer.keyword.appInfo.appCode}">
              <input type="text" name="appCode" value="${protal.customer.keyword.appInfo.appCode}" />
            </c:if>
          </li>
          <li>登录密码 :
            <c:if test="${not empty protal.customer.keyword.appInfo.appPassword}">
              <input type="text" name="appPassword" value="${protal.customer.keyword.appInfo.appPassword}" />
            </c:if>
          </li>
          <li>客户端下载地址(IOS) :
            <c:if test="${not empty protal.customer.keyword.appInfo.appIOSUrl}">
              <input type="text" name="appIOSUrl" value="${protal.customer.keyword.appInfo.appIOSUrl}" />
            </c:if>
          </li>
          <li>二维码下载地址(IOS) :
            <c:if test="${not empty protal.customer.keyword.appInfo.appIOSQRCodeUrl}">
              <input type="text" name="appIOSQRCodeUrl" value="${protal.customer.keyword.appInfo.appIOSQRCodeUrl}" />
            </c:if>
          </li>
          <li>客户端下载地址(Android) :
            <c:if test="${not empty protal.customer.keyword.appInfo.appAndroidUrl}">
              <input type="text" name="appAndroidUrl" value="${protal.customer.keyword.appInfo.appAndroidUrl}" />
            </c:if>
          </li>
          <li>二维码下载地址(Android) :
            <c:if test="${not empty protal.customer.keyword.appInfo.appAndroidQRCodeUrl}">
              <input type="text" name="appAndroidQRCodeUrl" value="${protal.customer.keyword.appInfo.appAndroidQRCodeUrl}" />
            </c:if>
          </li>
          <li>关键字 : ${protal.customer.keyword.keyword}</li>
          <li>关键字开始日期 : <fmt:formatDate value='${protal.customer.keyword.createTime}' pattern='yyyy-MM-dd'/></li>
          <li>关键字结束日期 : <fmt:formatDate value='${endDate}' pattern='yyyy-MM-dd'/></li>
          <li>关键字服务年限 : ${protal.customer.keyword.term}</li>
        </ul>
        <div class="clear"></div>
      </div>

      <div style="clear: both"></div>
      <div class="subtitle">基本信息</div>
      <div class="info1">
        <ul>
          <li>企业名称 : ${protal.customer.companyName}</li>
          <li>状态 : <span style="color: lawngreen;">${protal.customer.companyStatus==1?"启用":"停用"}</span></li>
          <li>企业类型 : ${protal.customer.type.typeName}</li>
          <li>企业主页 : ${protal.customer.companyPages}</li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>


      <div class="subtitle">门户信息</div>
      <div class="info2">
        <ul>
          <li>法人代表: ${protal.legalRepresentative}</li>
          <li>注册日期:<fmt:formatDate value="${protal.createTime}" pattern="yyyy-MM-dd"/>
          </li>
          <li>证件类型: ${protal.type.typeName }</li>
          <li>证件号码:${protal.idNumber}</li>
          <li>国家:${protal.state}</li>
          <li>省份: ${protal.province }</li>
          <li>公司传真:${protal.companyFax}</li>
          <li>城市: ${protal.city}</li>
          <li>公司电话:${protal.companyTel}</li>
          <li>公司地址:${protal.companyAddress}</li>
          <li>备注:${protal.remark }</li>
        </ul>
        <div class="clear"></div>
      </div>



      <div class="subtitle">联系信息</div>
      <div class="info3">

        <table>
          <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>传真</th>
            <th>邮箱</th>
            <th>职务</th>

          </tr>
          </thead>
          <tbody id="addtr">
          <c:forEach items="${protal.customer.contacts}" var="contact">
            <tr>
              <td>${contact.contactsName}</td>
              <td>${contact.contactsTel}</td>
              <td>${contact.contactsFax}</td>
              <td>${contact.contactsEmail}</td>
              <td>${contact.contactsPost}</td>
            </tr>
          </c:forEach>
          </tbody>
        </table>
      </div>
    </c:if>
    <c:if test="${protal ==null}">
      <p style="color: red;">没有任何结果</p>
    </c:if>
    <div class="goback">
      <input type="button" value="保存" onclick="checksave();"> <input
            type="button" value="返回" onclick="history.go(-1);">
    </div>
  </form>

</div>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/css/modifycustom.css">
<script type="text/javascript" src="${pageContext.request.contextPath }/js/modifyProtal.js"></script>
  </body>
</html>
