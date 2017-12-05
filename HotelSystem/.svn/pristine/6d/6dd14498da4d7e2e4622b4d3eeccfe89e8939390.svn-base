<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Co鼎-招贤纳士</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
 	
	<link rel="stylesheet" type="text/css" href="css/welcome.css">
	<script type="text/javascript" src="jquery-3.2.0.min.js"></script>
	<!-- <link rel="stylesheet" href="css/loginupdown.css"> -->
	
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">	
    <link rel="stylesheet" type="text/css" href="css/index.css">
	<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/script/index.js"></script>
	


	
	<style type="text/css">
      #bodier1 ul li{
          float: left;
          list-style: none;
          margin: 5px;
          padding: 10px;
          border: 1px solid lightgrey;
          text-align: center;
          border-radius:50%;
          
       }
       a{
        text-decoration: none;     
        }   
       
    </style>
	 <script type="text/javascript">
        
       
        function showwel1(){
           var img=document.getElementById("imgwel");
          
           img.src="image/wel01.png";                   
           }
            function showwel2(){
           var img=document.getElementById("imgwel");
           img.src="image/wel02.png";                    
           }
            function showwel3(){
           var img=document.getElementById("imgwel");
           img.src="image/wel03.png";                     
           }
            function showwel4(){
           var img=document.getElementById("imgwel");
           img.src="image/wel04.png";                     
           }
         
        
          
        /* 设置微信二维码开始 */
		function showImg1() {
				document.getElementById("wxImg").style.display = 'block';
					}
		function hideImg1() {
				document.getElementById("wxImg").style.display = 'none';
					}
		 /* 设置微信二维码结束 */		
		 	
		 
		 /* 登录框开始	 */
		 	function showdiv() {   
		 	    document.getElementById("login_updown").style.display = 'block';	
		 	    }		 	   
				
	      	function hidediv() {
				document.getElementById("login_updown").style.display = 'none';
					}		
			/* 登录框结束	 */	
			
					
	         /*  设置验证码开始 */
		function setRandomCode(){
		     
             document.getElementById("RandomImg").src="/HotelSystem/randomCode?"+new Date().getTime();

        }
		      /* 设置验证码结束 */


	</script>

  </head>
  
  
  
  
  
  <body style="background:#e1dac8;">
    <div id="header">

		<div class="header-top">
			<!--   头部菜单栏开始 -->
			<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
						aria-expanded="false">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="index.jsp"><img alt="logo"
						src="image/logo3.png" style="width: 148px;margin-top: -55px;">
					</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active"><a href="#">首页<span class="sr-only">(current)</span>
						</a></li>
						<!-- <li><a href="#">Co鼎辉煌欢迎</a>
					</li> -->
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false"> 国内酒店 <span class="caret"></span> </a>
							<ul class="dropdown-menu ">
								<li><a href="javascript:beijing();" id="beijing"
									value="beijing">北京</a></li>
								<li><a href="javascript:shanghai();" id="shanghai">上海</a></li>
								<li><a href="javascript:nanjing();" id="nanjing">南京</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="javascript:xiamen();" id="xiamen">厦门</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="javascript:guangzhou();" id="guangzhou">广州</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="weather">
						<!-- 天气预报开始 -->
						<iframe id="fancybox-frame" name="fancybox-frame1510984195465"
							width="450" scrolling="no" height="80" frameborder="0"
							allowtransparency="true"
							src="http://i.tianqi.com/index.php?c=code&id=2&color=%238d8d8d&icon=4&py=xiamen&num=3&site=12"></iframe>
						<!-- 天气预报结束 -->

						<div />

						<form class="navbar-form navbar-left" style="margin-left: 450px;">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Search">

								<button type="submit" class="btn btn-default">
									<span class="glyphicon glyphicon-search"></span>
								</button>
							</div>
						</form>





						<ul class="nav navbar-nav navbar-right"
							id="bs-example-navbar-collapse-2">

							<li class="dropdown"><a href="#" class="dropdown-toggle"
								data-toggle="dropdown" role="button" aria-haspopup="true"
								aria-expanded="false"><p
										class="glyphicon glyphicon-align-justify"></p> </span> </a>
								<ul class="dropdown-menu" id="dropdown-menu1">
									<br />
									<li role="presentation">
										<div class="icon1">
											<img alt="user" src="image/user.png"
												style="width: 25px;position: absolute; margin-left: -110px; margin-top: 2px;">
										</div> <a role="menuitem" tabindex="-1" href="javascript:showdiv();"
										class="login_up" name="login_up">登录</a>
									</li>
									<br />

									<li role="presentation">
										<div class="icon2">
											<img alt="login" src="image/login.png"
												style="width: 35px;position: absolute; margin-left: -113px; margin-top: -3px;">
										</div> <a role="menuitem" tabindex="-1" href="register.jsp"
										target="_blank">注册</a></li>


									<br />
									<li role="separator" class="divider"></li>
									<br />
									<li role="presentation"><a role="menuitem" tabindex="-1"
										href="" class="weixin" onMouseOut="hideImg1()"
										onmouseover="showImg1()">微信</a>
										<div id="wxImg"
											style="display:none;height:10px;back-ground:#f00;position:absolute;">
											<img alt="weixin" src="image/weixin.jpg">
										</div></li>
									<br />
									<br />
								</ul></li>
						</ul>
					</div>

				</div>
			</nav>

			<!--   头部菜单栏结束 -->
		</div>
		<!-- 欢迎显示开始 -->
		<div>
			<span
				style="color:#b81e5b;  z-index: 99999; position: fixed;margin-top:8px; margin-left:1000px;"
				id="indexname">${sessionScope.Index_IN_SESSION}</span> <a
				style="${sessionScope.Index_IN_SESSION==null?'display:none;':'display:block;'} color:#b81e5b;  z-index: 99999; position: fixed;margin-top:8px; margin-left: 1095px; id="
				indexExit" href="/HotelSystem/indexExit">退出</a>
		</div>
		<!-- 欢迎显示结束-->



		<div id="login_updown"
			style="${errorMsg==null?'display:none;':'display:block;'}position: fixed; z-index: 99999">
			<span style="color:#b81e5b;  z-index: 99999;" class="errorMsg">${errorMsg}</span>
			<form class="form" action="/HotelSystem/loginIndex" method="post">
				<h2>登录</h2>
				<a class="glyphicon glyphicon-remove" href="javascript:hidediv();"
					style="font-size: 30px; position: absolute; margin-left: 380px;margin-top: 45px;"></a>
				<p type="Name/Tel:">
					<input placeholder="请输入你的用户名/电话号码.." name="user_tel"></input>
				</p>
				<p type="password:">
					<input type="password" placeholder="请输入你的密码.." name="password"></input>
				</p>
				<p type="Verification Code:">
					<input placeholder="请输入验证码.." name="randomCode"></input>
				</p>
				<img alt="验证码" src="/HotelSystem/randomCode" id="RandomImg"
					title="看不清?请点我刷新" onclick="setRandomCode()"
					style="position: absolute; margin-top: 10px; width: 90px;">
				<button>Login</button>
			</form>

		</div>
	</div>
    <img alt="welcome" src="image/welcome1.jpg" style="width: 100%;margin-top: 130px;">
    
    <div id="bodier" style="position: absolute; margin-left: 200px; margin-top: -110px;">
         <a href="welcome.jsp#wel1">招聘信息</a>
         <a href="welcome.jsp#wel2">人才培养</a>
         <a href="welcome.jsp#wel3">联系我们</a>   
    </div>
    
     <div id="bodier1" style="width: 85%; border: 1px solid #eeeae9; height: 400px; margin-left: 120px;margin-top: 50px;" >
         <a name="wel1"></a>
         
         <div style="margin-top: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
            <a href="javascript:showwel1();">百万年薪俱乐部</a>&nbsp;&nbsp;&nbsp;
            <a href="javascript:showwel2();">酒店总经理</a>&nbsp;&nbsp;&nbsp;
            <a href="javascript:showwel3();">社会招聘</a>&nbsp;&nbsp;&nbsp;
            <a href="javascript:showwel4();">校园招聘</a>
         </div>
         <div>
            <img alt="#" src="image/wel01.png" id="imgwel" style="width: 100%;margin-top: 20px;">
            <!-- <img alt="#" src="image/wel02.png">
            <img alt="#" src="image/wel03.png">
            <img alt="#" src="image/wel04.png"> -->
         </div>
         
    
    
     </div>    
     <div id="bodier2" style="width: 85%;  border: 1px solid #eeeae9;  height: 300px; margin-left: 120px;margin-top: 50px;" >
         <a name="wel2"></a>
    <!--      <table>
            <tr>
               <td>类别</td>
               <td>部门</td>
               <td>一年</td>
               <td>培养阶段第二\三年</td>
               <td>第四至第五年</td>
            </tr>
            <tr>
               <td>职能类</td>
               <td>行政\人力等</td>
               <td>主管</td>
               <td>经理\高级经理</td>
               <td>总监</td>
            </tr>
            <tr>
               <td>运营类</td>
               <td>开发\筹建\业务</td>
               <td>经理</td>
               <td>运营总监</td>
               <td>高级总监</td>
            </tr>
            <tr>
               <td>财务类</td>
               <td>财务\成本相关等</td>
               <td>主管</td>
               <td>经理</td>
               <td>总监</td>
            </tr>
            <tr>
               <td>营销类</td>
               <td>品牌\销售\创新等</td>
               <td>经理</td>
               <td>总监</td>
               <td>高级总监</td>
            </tr>
            <tr>
               <td>其他类</td>
               <td>董事长秘书等专职</td>
               <td>主管</td>
               <td>经理</td>
               <td>总监</td>
            </tr>
         
         </table> -->
         
<table class="table table-hover">
	<caption></caption>
	<thead>
		<tr>
			<th>类别</th>
			<th>部门</th>
			<th>一年</th>
			<th>培养阶段第二\三年</th>
			<th>第四至第五年</th>
		</tr>
	</thead>
	<tbody>
		<tr>
               <td>职能类</td>
               <td>行政\人力等</td>
               <td>主管</td>
               <td>经理\高级经理</td>
               <td>总监</td>
            </tr>
            <tr>
               <td>运营类</td>
               <td>开发\筹建\业务</td>
               <td>经理</td>
               <td>运营总监</td>
               <td>高级总监</td>
            </tr>
            <tr>
               <td>财务类</td>
               <td>财务\成本相关等</td>
               <td>主管</td>
               <td>经理</td>
               <td>总监</td>
            </tr>
            <tr>
               <td>营销类</td>
               <td>品牌\销售\创新等</td>
               <td>经理</td>
               <td>总监</td>
               <td>高级总监</td>
            </tr>
            <tr>
               <td>其他类</td>
               <td>董事长秘书等专职</td>
               <td>主管</td>
               <td>经理</td>
               <td>总监</td>
            </tr>
	</tbody>
</table>
         
         
     </div>  
     <div id="bodier3" style="width: 85%; border: 1px solid #eeeae9; height: 300px; margin-left: 120px;margin-top: 50px;" >
         <a name="wel3"></a><br/><br/><br/>
         <p>地址:厦门市湖里区软件园二期观日路2号楼中软国际</p><br/>
         <p>招聘热线:13599920123(曾小姐)</p><br/>
         <p>招聘邮箱:123@qq.com</p>
         <img alt="weixin" src="image/weixin.jpg" style="position:absolute; margin-left: 500px;margin-top: -200px;">
         <span class="weixin1" style="position:absolute; margin-left: 750px;margin-top: -146px;">扫一扫</span>
         <span class="weixin2" style="position:absolute; margin-left: 800px;margin-top: -150px;">关注中软国际公众号</span>
         
     </div>  
    
    
    
    
    
    <div id="footer">
      <div class="Myfoot" style="position: relative;margin-left: 250px;margin-top: -1800px;">
			<div class="links">
				<a href="hotel_info.jsp" target="_blank">酒店介绍</a>
				<a href="#" target="_blank">酒店加盟</a>
				<a href="welcome.jsp" target="_blank">酒店招聘</a>
				<a href="about_us.jsp" target="_blank">联系我们</a>
			</div>			
			<div class="copyright">闽ICP备12041475 | ©2017 Coding All Rights reserved. Co鼎辉煌酒店管理有限公司</div>		
		</div>
    </div>
  </body>
</html>
