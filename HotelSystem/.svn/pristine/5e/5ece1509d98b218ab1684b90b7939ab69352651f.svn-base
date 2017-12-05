<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC >
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>修改密码</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
	<link rel="stylesheet" type="text/css" href="css/common.css">
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<link rel="stylesheet" href="css/jquery.slider.css" />
	<link rel="stylesheet" href="css/forget.css" />
	<script src="js/jquery.slider.min.js"></script>
	<script src="js/forget_Ajax.js"></script>
	<script src="js/register.js"></script>
    
  </head>
  <body>
  <!-- -------顶部----开始----- -->
 <div class="top" style="height: 4px;"></div>
  <div class="logo_bar">
    <img alt="辉煌酒店" src="image/logo3.png" >
     <span class="set_info">酒店介绍</span>
      <span id="top1"><a href="index.jsp" target="view_window">【Co鼎辉煌酒店首页】</a>
      <a href="about_us.jsp" target="view_window">【关于酒店】</a>
      </span>
  </div>
   

  <!-- -------中间----开始----- -->
    <div class="login_cont" ><!-- style="background-color: red;" -->
		<div class="login_nav" >
			<div class="nav_slider">
				<p class="signup focus">修改密码</p>
			</div>
		</div>
		<!-- 	---------- -->
		<form action="/HotelSystem/forget" method="post">
		  <div class="input_signup active">
			<span class="label1" ><i>*</i>请输入登录手机号</span>	
			<input class="input" id="mobile"  name="mobile" type="text" class="account"  placeholder="手机号（11位）" onfocus="fnSPhone()" >
			<div class="hint_alfter" id="hint_alfter_phone" >${errMsg_phone}</div>
			<div class="hint"></div> 	
			<span class="label2" ><i>*</i>新密码</span>	
			<input class="input" id="password"  name="password" type="password"  placeholder="密码（不少于 6 位）" onfocus="fnSPassword()">
			<div class="hint_alfter" id="hint_alfter_pass">${errMsg_pass}</div>
			<div class="hint"></div>
			<span class="label3" ><i>*</i>再输入一次</span>	
			<input class="input" id="repassword" name="repassword" type="password"  placeholder="请再次输入密码" onfocus="fnSRePassword()">
			<div class="hint_alfter" id="hint_alfter_repass">${errMsg_repass}</div>
			<div class="hint"></div>
			<div style="height: 30px;"></div>
				
			<input type="text" id="yan" name="yan" style="width: 150px" placeholder="验证码" onfocus="fnSCheckNum()"/>
			<input id="zphone"  style="width: 185px;color:rgb(127, 31, 89);font-weight: bold;
			font-size: 14px" type="button"   value="获取手机验证码" onClick="get_mobile_code()" />
			<div class="hint_alfter" id="hint_alfter_checkcode">${errMsg_codenum}</div>
			<div id="yanzhengma" ></div>
			<span class="label4" ><i>*</i>验证码</span>
				
			<input type="submit" id="submit" class="button" name="button" value="确认修改">
		  </div>	
		</form>
	</div>
	<!-- -------底部----开始----- -->
	<div class="forget_footer"> 
	      <div class="forget_list">       
	            <a href="hotel_info.jsp" target="view_window">Co鼎酒店介绍</a>
	             <a href="#">酒店加盟</a>
	             <a href="#">意见反馈</a>
	             <a href="about_us.jsp" target="view_window">联系我们</a>	       
	      </div>
	     
	        <p >  <a>闽ICP备12041475 | ©2017 Huazhu All Rights reserved. Co鼎辉煌酒店管理有限公司</a>  </p>
	</div>

	<script type="text/javascript" src="js/custom.js"></script> 
	<script type="text/javascript" src="js/login.js"></script>
    <script type="text/javascript" src="js/yanzhengma.js"></script>
	<script type="text/javascript" src="js/form_forget.js"></script> 
	
	
  </body>
</html>
