<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Co鼎辉煌指引方向</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style type="text/css">
		html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,em,button{margin:0;padding:0;}
		body{font-size:12px;font-family:Simsun,sans-serif;color:#333;}
		img,fieldset{border:0 none}
		input,textarea{font-size:12px;}
		textarea{resize:none;}
		table{border-collapse:collapse;border-spacing:0;}
		a{color:#003d7e;text-decoration:none;}
		a:hover{text-decoration:underline;}
		h1,h2,h3,h4,h5,h6{font-family:"Times New Roman",Simsun;}
		ul,ol,li{list-style:none outside none;}
		dfn{font-style:normal;}
		
		.content,.errorinfo,#footer{width:800px;}
		.logo,.tower,.cruise{background:url(image/un_pic.png) no-repeat;}
		.wrap{background:#1158e7 url(image/404_bg.jpg) no-repeat center bottom;width:100%;overflow:hidden;}
		.content{position:relative;z-index:1;height:480px;margin:0 auto;padding-top:100px;}
		.logo{ position: relative;z-index:5; width:144px;height:54px;margin:0 auto;overflow:hidden;text-indent:-500px;background-position:0 0;}
		.errorinfo{color:#fff;display:block;font-family:"microsoft yahei","simhei",sans-serif;font-size:24px;font-weight:normal;text-align:center;margin:30px auto;padding:0;}
		a.goback{display:block;position: relative;z-index: 4; width:112px;margin:20px auto;padding:8px 0;color:#fff;font-family:"microsoft yahei","simhei",sans-serif;font-size:16px;text-align:center;text-decoration:none;background-color:#0f4dc5;}
		a.goback:hover{background-color:#3f92f0;}
		
		.tower{background-position:0 -127px;position:absolute;z-index:2;top:140px;left:20px;width:116px;height:264px;}
		.towerlight{position:absolute;z-index:1;left:52px;top:166px;width:52px;height:52px;background-color:#fefa90;box-shadow:0 0 50px rgba(255,248,74,1);-webkit-animation:3s linear 0s none infinite light;-moz-animation:3s linear 0s none infinite light;animation:3s linear 0s none infinite light;}
		
		#wfooter{ height: 120px;margin-top: 1130px;background-color: #faf8f9;}
		#wfooter .links{margin-top: 30px;text-align: center;}
		ul{list-style: none;}
		ul li{display: inline-block;}
		#wfooter .links ul li a{color: #7f1f59;font-size: 13px;font-weight: bold;display: inline-block;width: 100px;}
		#wfooter .over{text-align: center;margin-top: 15px;}
		#wfooter .over span{font-size: 12px;color: #7f1f59;}	
		
		@-webkit-keyframes light{
			0%{box-shadow:0 0 50px rgba(255,254,165,1);}
			50%{box-shadow:0 0 10px rgba(255,248,74,1);}
			100%{box-shadow:0 0 50px rgba(255,254,165,1);}
		}
		@-moz-keyframes light{
			0%{box-shadow:0 0 50px rgba(255,254,165,1);}
			50%{box-shadow:0 0 10px rgba(255,248,74,1);}
			100%{box-shadow:0 0 50px rgba(255,254,165,1);}
		}
		@keyframes light{
			0%{box-shadow:0 0 50px rgba(255,254,165,1);}
			50%{box-shadow:0 0 10px rgba(255,248,74,1);}
			100%{box-shadow:0 0 50px rgba(255,254,165,1);}
		}
		.beam{position:absolute;z-index:3;left:-232px;top:75px;width:973px;height:198px;background:url(image/beam.png) no-repeat;-webkit-transform:rotate(15deg);transform:rotate(15deg);-webkit-transform-origin:308px 115px;transform-origin:308px 115px;-webkit-animation:10s linear 0s none infinite beam;-moz-animation:10s linear 0s none infinite beam;animation:10s linear 0s none infinite beam;}
		@-webkit-keyframes beam{
			0%{ -webkit-transform:rotate(15deg);}
			50%{ -webkit-transform:rotate(65deg);}
			100%{ -webkit-transform:rotate(15deg);}
		}
		@keyframes beam{
			0%{transform:rotate(15deg);}
			50%{transform:rotate(65deg);}
			100%{transform:rotate(15deg);}
		}
		.wave1{position:relative;z-index:3;width:100%;margin-top:-220px;color:#999;background:url(image/bl.png) repeat-x 0 0;-webkit-animation:8s linear 0s none infinite tweenxx;-moz-animation:8s linear 0s none infinite tweenxx;animation:8s linear 0s none infinite tweenxx;}
		.wave{height:220px;background:url(image/bl.png) repeat-x 330px 0;-webkit-animation:10s linear 0s none infinite tweenx;-moz-animation:10s linear 0s none infinite tweenx;animation:10s linear 0s none infinite tweenx;}
		@-webkit-keyframes tweenx{
			0%{background-position:0 0;}
			100%{background-position:1600px 0;}
		}
		@-moz-keyframes tweenx{
			0%{background-position:0 0;}
			100%{background-position:1600px 0;}
		}
		@keyframes tweenx{
			0%{background-position:0 0;}
			100%{background-position:1600px 0;}
		}
		@-webkit-keyframes tweenxx{
			0%{background-position:0 0;}
			100%{background-position:-1600px 0;}
		}
		@-moz-keyframes tweenxx{
			0%{background-position:0 0;}
			100%{background-position:-1600px 0;}
		}
		@keyframes tweenxx{
			0%{background-position:0 0;}
			100%{background-position:-1600px 0;}
		}
		/*-----footer-----*/
		#footer{margin:0 auto;
			text-align:center;color:#0053aa;font-family:arial;line-height:1.6;padding:8px 0 0 0;}
		#footer a{color:#0053aa;}
		.copyright{color:#333333;}
		/*-----media-----*/
		@media screen and (max-width:640px) {
			body{min-width:320px;}
			.content,.errorinfo,#footer{width:320px;}
			.content { height: 500px;padding-top: 20px;}
			.errorinfo{font-size: 18px;}
			.miscbox{position: relative;z-index: -1;height: 264px;width: 116px;margin: 0 auto;}
			.tower{left: 0;top: 0; }
			.towerlight {left: 32px;top: 30px;}
			.beam {left: -255px;top: -62px;}
			.wave1 {margin-top: -75px;}
		}
		
	</style>

  </head>
  
  <body>
    <div class="wrap">
		<div class="content">
			<a href="/about_us.jsp"><h1 class="logo">Coding</h1></a>		
			<div class="errorinfo">
				<p>人在旅途，难免迷路，好在你有Co鼎辉煌。</p>
				<a class="goback" href="/index.jsp">返回首页</a>				
			</div>
			<div class="miscbox">
				<div class="tower"></div>
				<div class="towerlight"></div>
				<div class="beam"></div>
			</div>
		</div>
		<div class="wave1">
			<div class="wave"></div>
		</div>
	</div>
	<div id="wfooter">
         <hr style= "border:1px solid  #e6e6e6;" />
         <div class="links">
         <ul>
             <li><a href="#">CO鼎辉煌介绍</a></li>
             <li><a href="#">酒店加盟</a></li>
             <li><a href="#">职位招聘</a></li>
             <li><a href="#">意见反馈</a></li>
             <li><a href="#">联系我们</a></li>
         </ul>
         </div>
         
         <div class="over">
         <span>沪ICP备12041475 | © 2017 Huazhu All Rights reserved.华住酒店管理有限公司 </span>
         </div>
    </div>
  </body>
</html>