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
    
    <title>朕要注册</title>
    
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
	<script src="js/register_Ajax.js"></script>
	<script src="js/register.js"></script>
  
  </head>
  
  <body>
   <div class="top"></div><!-- 顶部横线 -->
  <!-- -------顶部----开始----- -->
<div class="top"></div>
  <div class="logo_bar">
    <img alt="梦想家" src="image/logo3.png" >
     <span class="set_info">会员注册|登录</span>
      <span id="top1"><a href="index.jsp"  target="view_window">【Co鼎辉煌酒店首页】</a>
      <a href="hotel_info.jsp" target="view_window">【关于酒店】</a>
      </span>
  </div>
   

  <!-- -------中间----开始----- -->
 <div id="mydiv"  >
    <div class="login_cont">
		<div class="login_nav">
			<div class="nav_slider">
				<p class="signup focus">会员注册</p>
				<p class="signin">登录</p>
			</div>
		</div>
		<!-- 	-----注册----- -->
		<form action="/HotelSystem/register" method="post">
			<div class="input_signup active">
				<input class="input" id="user_name" name="user_name" type="text" value="${user_name}"  placeholder="用户名(4~16个字符)" onfocus="fnSUsername()">
				<div class="hint_alfter" id="hint_alfter_name">${errMsg_name}</div>
				<div class="hint"></div>				
				<input class="input" id="mobile" name="mobile" type="text" value="${mobile}" class="account"  placeholder="手机号（11位）" onfocus="fnSPhone()">
				<div class="hint_alfter" id="hint_alfter_phone">${errMsg_phone}</div>
				<div class="hint"></div>
				<input class="input" id="password"  name="password" type="password"  placeholder="密码（不少于 6 位）" onfocus="fnSPassword()">
				<div class="hint_alfter" id="hint_alfter_pass">${errMsg_pass}</div>
				<div class="hint"></div>
				<input class="input" id="repassword" name="repassword" type="password"  placeholder="请再次输入密码" onfocus="fnSRePassword()">
				<div class="hint_alfter" id="hint_alfter_repass">${errMsg_repass}</div>
				<div class="hint"></div>
				<div style="height: 30px;"></div>
			    <input type="text" id="yan" name="yan" style="width: 145px" placeholder="验证码" onfocus="fnSCheckNum()"/>
			    <!--  onblur="checkCode()" -->
			    
			    <input id="zphone"  style="width: 180px;color:rgb(127, 31, 89);font-weight: bold;
			    font-size: 14px" type="button"   value="获取手机验证码" onClick="get_mobile_code()" />
			   	<div class="hint_alfter" id="hint_alfter_checkcode">${errMsg_codenum}</div>
			    <div id="yanzhengma" ></div>
			     
				<input type="submit" id="submit" class="button" name="button" value="注册">
			</div>	
		</form>
	<!-- 	-----登录----- -->
		<div class="hint_alfter" id="login_alfter_phone">${errMsg_Login_user}</div>
		<form action="/HotelSystem/login" method="post">			
			<div class="input_signin">
				<input class="input" id="login_mobile" name="login_mobile" type="text"  placeholder="手机号(11位)">
				<div class="hint"> </div>
				<input class="input" id="login_password" name="login_password" type="password"  placeholder="密码">
				<div class="hint" > </div>			
			<!-- 滑块验证 -->
				<div id="slider2" class="slider" ></div>
							
				<script>
				$("#slider2").slider({
					callback: function(result) {			
					/* document.getElementById("result2").val=result; */
					/* alert(result); */
						 $("#result2").val(result); 
					}
				});
			    </script>
		    	<input type="text" name="result2" style="visibility: hidden;" id="result2">
				<input type="submit" id="button" class="button" name="button" value="登录">
				<div class="forget" style="padding-top: 3px;font-size: 14px;"><a href="forget.jsp">忘记密码？</a></div>
			</div>
		</form>
	</div>

	
	
</div>

	<!-- -------底部----开始----- -->
	<div class="footer1" > 
	   
	      <div class="list">       
	            <a href="hotel_info.jsp" target="view_window">辉煌酒店介绍</a>
	             <a href="#">酒店加盟</a>
	             <a href="#">意见反馈</a>
	             <a href="about_us.jsp" target="view_window">联系我们</a>	       
	      </div> 
	      
	      <div>
	          <p>闽ICP备12041475 | ©2017 Huazhu All Rights reserved. Co鼎辉煌酒店管理有限公司</p>
	      </div>
  
 </div>
	<script type="text/javascript" src="js/custom.js"></script> 
	<script type="text/javascript" src="js/login.js"></script>
    <script type="text/javascript" src="js/yanzhengma.js"></script>
	<script type="text/javascript" src="js/form.js"></script> 

  </body>
</html>
