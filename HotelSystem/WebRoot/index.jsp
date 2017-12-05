<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Co鼎辉煌大酒店</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">	
	
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
    <script type="text/javascript" src="jquery-3.2.0.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/loginupdown.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
	<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/script/index.js"></script>


    <link href="css/lrtk.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="css/demo.css" />
	<link rel="stylesheet" type="text/css" href="css/slicebox.css" />
	<link rel="stylesheet" type="text/css" href="css/custom.css" />
	<script type="text/javascript" src="js/modernizr.custom.46884.js"></script>

    <!-- 设置图片轮播开始 -->
	 <style type="text/css">
      #header .header-mid ul li{
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
        var i=1;
        var myTime;
        function showImg(){
           var img=document.getElementById("img");
           img.src="image/"+i+".jpg";
           
           //设置样式
           for(index=1;index<=3;index++){
               
              var liobj=document.getElementById("li"+index);
              if(index==i){
                 liobj.style.background="white";
              }else{
                 liobj.style.background="transparent";
              }            
           }
           i++;
           if(i>3){
             i=1;
           }
           myTime=setTimeout("showImg()",5000);       
        }
        function stopShowImg(){
           clearTimeout(myTime);       
        }
          /* 设置图片轮播结束 */ 
          
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
	  /* 客服开始 */
   $(function() {
	    $(".btn_top").hide();
		$(".btn_top").live("click",function(){
			$('html, body').animate({scrollTop: 0},300);return false;
		});
		$(window).bind('scroll resize',function(){
			if($(window).scrollTop()<=300){
				$(".btn_top").hide();
			}else{
				$(".btn_top").show();
			}
		});
   });
	/* 客服结束 */	      
		      
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
				<a class="navbar-brand" href="index.jsp"><img alt="logo" src="image/logo3.png" style="width: 148px;margin-top: -55px;"></a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">首页<span class="sr-only">(current)</span>
					</a>
					</li>
					<!-- <li><a href="#">Co鼎辉煌欢迎</a>
					</li> -->
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">
						 国内酒店
						 <span class="caret"></span>
					</a>
						<ul class="dropdown-menu ">
							<li><a href="/HotelSystem/test?city=beijing" id="beijing"  target="_blank" >北京</a>
							</li>
							<li><a href="/HotelSystem/test?city=shanghai" id="shanghai"  target="_blank" >上海</a>
							</li>
							<li><a href="/HotelSystem/test?city=nanjing" id="nanjing"  target="_blank">南京</a>
							</li>
							<li role="separator" class="divider"></li>
							<li><a href="/HotelSystem/test?city=shenzhen" id="shenzhen" target="_blank">深圳</a>
							</li>							
							<li><a href="/HotelSystem/test?city=guangzhou" id="guangzhou" target="_blank">广州</a>
							</li>							
							<li><a href="/HotelSystem/test?city=xianggang" id="xianggang" target="_blank">香港</a>
							</li>
							<li role="separator" class="divider"></li>
							<li><a href="/HotelSystem/test?city=xiamen" id="xiamen" target="_blank">厦门</a>
							</li>
							<li><a href="/HotelSystem/test?city=hangzhou" id="hanzhou" target="_blank">杭州</a>
							</li>
							<li role="separator" class="divider"></li>							
							<li><a href="/HotelSystem/test?city=chengdu" id="chengdu" target="_blank">成都</a>
							</li>
							<li><a href="/HotelSystem/test?city=haerbing" id="haerbing" target="_blank">哈尔滨</a>
							</li>
							
						</ul></li>
				</ul>
				<div class="weather">
				  <!-- 天气预报开始 -->				
				<iframe id="fancybox-frame" name="fancybox-frame1510984195465" width="450" scrolling="no" height="80" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=2&color=%238d8d8d&icon=4&py=xiamen&num=3&site=12"></iframe>
				<!-- 天气预报结束 -->
				
				<div/>
				
				<form class="navbar-form navbar-left" style="margin-left: 450px;" action="/HotelSystem/indexsearch" target="_blank">
					<div class="form-group">
					<input type="text" class="form-control" placeholder="请输入关键字" name="indexsearch">
					
					<button type="submit" class="btn btn-default"> <span class="glyphicon glyphicon-search"></span></button>
                    </div>
				</form>
                
						<ul class="nav navbar-nav navbar-right"
							id="bs-example-navbar-collapse-2">

							<li class="dropdown"><a href="#" class="dropdown-toggle"
								data-toggle="dropdown" role="button" aria-haspopup="true"
								aria-expanded="false"><p
										class="glyphicon glyphicon-align-justify"></p>
									</span> </a>
								<ul class="dropdown-menu" id="dropdown-menu1"
									>
                                    <br/>
									<li role="presentation">
										<div class="icon1">
											<img alt="user" src="image/user.png"
												style="width: 25px;position: absolute; margin-left: -110px; margin-top: 2px;">
										</div> <a role="menuitem" tabindex="-1"
										href="${sessionScope.Index_IN_SESSION==null?'javascript:showdiv()':'javascript:volid(0)'};" class="login_up" name="login_up" style="${sessionScope.Index_IN_SESSION==null?' ':' cursor:not-allowed;'}">登录</a></li><br/>

									<li role="presentation">
							     	<div class="icon2">
									<img alt="login" src="image/login.png"
										style="width: 35px;position: absolute; margin-left: -113px; margin-top: -3px;">
								    </div> <a role="menuitem" tabindex="-1" href="${sessionScope.Index_IN_SESSION==null?'register.jsp':'javascript:return false'};"
								    target="_blank" style="${sessionScope.Index_IN_SESSION==null?' ':' cursor:not-allowed;'}">注册</a>
							        </li>
									
									
									<br/>
									<li role="separator" class="divider"></li>
									<br/>
									<li role="presentation"><a role="menuitem" tabindex="-1"
								    href="" class="weixin" onMouseOut="hideImg1()"
							    	onmouseover="showImg1()">微信</a>
							    	<div id="wxImg"
									style="display:none;height:20px;back-ground:#f00;position:absolute;">
									<img alt="weixin" src="image/weixin.jpg">
							    	</div>	    	
						     	</li>
						         	<br/><br/>
								</ul>
							</li>
						</ul>
					</div>
				
		</div>
 </nav>       	
 
	  <!--   头部菜单栏结束 -->
      </div>
      <!-- 欢迎显示开始 -->
         <div style="font-family:'华文彩云'; ${sessionScope.Index_IN_SESSION==null?'display:none;':'display:block;'} z-index: 99999; position: fixed; margin-top:8px; margin-left:1028px;">
              <span style="font-family:'KaiTi_GB2312'; opacity:0.5; color:#b81e5b;" id="indexname">欢迎${sessionScope.Index_IN_SESSION},</span>
              <a style=" font-family:'KaiTi_GB2312'; color:#b81e5b; opacity:0.5;" id="indexExit" href="/HotelSystem/indexExit">退出</a>
         </div>
      <!-- 欢迎显示结束-->
       
           
           
      <div id="login_updown" style="${errorMsg==null?'display:none;':'display:block;'}position: fixed; z-index: 99999">       
      <span style="color:#b81e5b;  z-index: 99999;" class="errorMsg">${errorMsg}</span>        
      <form class="form" action="/HotelSystem/loginIndex" method="post">
      <h3>登录</h3>     
      <a class="glyphicon glyphicon-remove" href="javascript:hidediv();" style="font-size: 30px; position: absolute; margin-left: 380px;margin-top: 45px;"></a>
      <p type="Tel:"><input placeholder="请输入你的电话号码.." name="user_tel"></input></p>
      <p type="password:"><input type="password" placeholder="请输入你的密码.." name="password"></input></p>     
      <p type="Verification Code:"><input placeholder="请输入验证码.." name="randomCode"></input>
      </p>      
      <img alt="验证码" src="/HotelSystem/randomCode" id="RandomImg"
      title="看不清?请点我刷新" onclick="setRandomCode()" style="position: absolute; margin-top: 10px; width: 90px;"> 
      <button>Login</button>
      </form>
      
      </div>
  
  
  
      
           
      <div class="header-mid">
      <!--------- 设置图片轮播开始 ----------->
        <img alt="#" src="image/1.jpg" id="img" onmouseover="stopShowImg()" onmouseout="showImg()" style="width: 100%;">
    <ul>
        <li id="li1"><a href="#"></a></li>
        <li id="li2"><a href="#"></a></li>
        <li id="li3"><a href="#"></a></li>
 
         
    </ul>
      <!--------- 设置图片轮播结束 ----------->
      
      </div>
       
</div>

       <div id="bodier">
           
           <!-- 客服代码 开始 -->
           <div class="izl-rmenu">
           <a class="consult" target="_blank"><div class="phone" style="display:none;">010-12345678</div></a>    
           <!-- <a class="cart"><div class="pic"></div></a> --> 
           <a href="javascript:void(0)" class="btn_top" style="display: block;"></a>
           </div>
           <a href="http://wpa.qq.com/msgrd?v=3&uin=840038244&site=qq&menu=yes" id="udesk-feedback-tab" class="udesk-feedback-tab-left" style="display: block; background-color: black;"></a>
           <!--客服 代码 结束 -->
           
       
       
          <div class="bodier1">
			 <div class="bodier1-left">

				<h3 class="title">Co鼎辉煌大酒店</h3>
				<br /><br/>

				<h4 class="name">Coding HuiHuang Hotel</h4><br/>
				<p>
					全新升级的Co鼎辉煌大酒店将为您带来更加舒心的<br />温馨体验！ 从极具现代感的迎宾区到独匠新格的<br />创意客房，高品质隔音门和sweet
					bed是您优质睡眠<br />的保证，更配合“15分钟满意”合同与<br />24小时的贴心服务，
					领先同类酒店的高品质<br />是我们的特质。我们承诺8小时便餐，7点至10点<br /> 提供自助式早餐，更有下午茶和酒吧服务，<br />
					选择中软国际大酒店将会成为您可靠而舒心的家。
				</p>

			</div>
			 <div class="bodier1-right">
				<!-- <img alt="#" src="image/woshou.jpg"
					style="width: 450px; height:280px;"> -->
					
					
	<!-- 3D图切换开始 -->
			<div class="container">

			<div class="wrapper">

				<ul id="sb-slider" class="sb-slider">
					<li>
						<a href="http://www.flickr.com/photos/strupler/2969141180" target="_blank"><img src="image/001.jpg" alt="image1"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-北京大酒店</h3>
						</div>
					</li>
					<li>
						<a href="http://www.flickr.com/photos/strupler/2968268187" target="_blank"><img src="image/002.jpg" alt="image2"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-上海大酒店</h3>
						</div>
					</li>
					<li>
						<a href="http://www.flickr.com/photos/strupler/2968114825" target="_blank"><img src="image/003.jpg" alt="image1"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-南京大酒店</h3>
						</div>
					</li>
					<li>
						<a href="http://www.flickr.com/photos/strupler/2968122059" target="_blank"><img src="image/004.jpg" alt="image1"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-深圳大酒店</h3>
						</div>
					</li>
					<li>
						<a href="http://www.flickr.com/photos/strupler/2969119944" target="_blank"><img src="image/005.jpg" alt="image1"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-广州大酒店</h3>
						</div>
					</li>
					<li>
						<a href="http://www.flickr.com/photos/strupler/2968126177" target="_blank"><img src="image/006.jpg" alt="image1"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-香港大酒店</h3>
						</div>
					</li>
					<li>
						<a href="http://www.flickr.com/photos/strupler/2968945158" target="_blank"><img src="image/007.jpg" alt="image1"/></a>
						<div class="sb-description">
							<h3>Co鼎辉煌-厦门大酒店</h3>
						</div>
					</li>
				</ul>

				<div id="shadow" class="shadow"></div>

				<div id="nav-arrows" class="nav-arrows" style="position:absolute;padding-left: 600px;margin-top: -210px;margin-left: -50px;">
					<a href="#">Next</a>
					<a href="#">Previous</a>
				</div>

			</div><!-- /wrapper -->


		</div>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.slicebox.js"></script>
		<script type="text/javascript">
			$(function() {
				
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ).hide(),
						$shadow = $( '#shadow' ).hide(),
						slicebox = $( '#sb-slider' ).slicebox( {
							onReady : function() {

								$navArrows.show();
								$shadow.show();

							},
							orientation : 'r',
							cuboidsRandom : true,
							disperseFactor : 30
						} ),
						
						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':first' ).on( 'click', function() {

								slicebox.next();
								return false;

							} );

							$navArrows.children( ':last' ).on( 'click', function() {
								
								slicebox.previous();
								return false;

							} );

						};

						return { init : init };

				})();

				Page.init();

			});
		</script>
					
				<!-- 3D图切换结束 -->	
					
					
			</div>  
		</div>
            
            
            
            <div class="bodier2" style="position: absolute; margin-top: 1250px;">
                 
                <img alt="#" src="image/05.png" style="width: 1000px;">
            
            </div>
            
            <div class="bodier3">
            
                <h3>精选推广</h3><br/><br/>
        <table>
            <tr>
               <td> <a href="/HotelSystem/test?city=beijing" target="_blank"><img alt="#" src="image/beijing.png"> </a> </td>
               <td><a href="/HotelSystem/test?city=shanghai" target="_blank"> <img alt="#" src="image/shanghai.png"> </a></td>
               <td><a href="/HotelSystem/test?city=shenzhen" target="_blank"> <img alt="#" src="image/shenzhen.png"> </a></td>
            </tr>
            
            <tr>
               <td> <a href="/HotelSystem/test?city=guangzhou" target="_blank"><img alt="#" src="image/guangzhou.png"></a></td>
               <td><a href="/HotelSystem/test?city=xianggang" target="_blank"> <img alt="#" src="image/xianggang.png"></a></td>
               <td><a href="/HotelSystem/test?city=xiamen" target="_blank"> <img alt="#" src="image/xiamen.png"></a></td> 
            </tr>
        
        </table>
        
            
        </div>
    
       
</div>
       
      <div id="footer" style="background-color: url(image/)">
		<div class="wrapper footer">
			<div class="service">
				<div class="container">
					<div class="col-md-3 col-sm-12">
						<div class="link_logo"></div>
					</div>
					<div class="col-md-6 col-sm-12">
						<div class="link_tel"></div>
					</div>
					<div class="col-md-3 col-sm-12 fx">
						<div class="bshare-custom icon-medium">
							<div class="bsPromo bsPromo2"></div>
							<a title="分享到一键通" class="bshare-bsharesync"
								href="javascript:void(0);"></a> <a title="分享到QQ空间"
								class="bshare-qzone"></a> <a title="分享到新浪微博"
								class="bshare-sinaminiblog" href="javascript:void(0);"></a> <a
								title="分享到人人网" class="bshare-renren" href="javascript:void(0);"></a>
							<a title="更多平台"
								class="bshare-more bshare-more-icon more-style-addthis"></a>
						</div>
						<script type="text/javascript" charset="utf-8"
							src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script>
						<script type="text/javascript" charset="utf-8"
							src="http://static.bshare.cn/b/bshareC0.js"></script>
					</div>
				</div>
			</div>
			<div class="container">
				<!-- <div class="friendlink">
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a href="#"><img src="image/wx_link.png"
							class="img-responsive">
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a href="#"><img src="image/taobao_link.png"
							class="img-responsive">
						</a>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12">
						<a href="#"><img src="image/wb_link.png"
							class="img-responsive">
						</a>
					</div>
				</div> -->
				
				<!-- <div class="copyright col-md-12">
					<p>版权所有：Co鼎辉煌大酒店 预订电话：15611549285 传真：010-66094197</p>
					<p>厦门市湖里区软件园二期 2号楼1601号  邮编：361000 备案专政号 闽IPC备1300362号</p>
				</div> -->
				
			<div class="Myfoot" style="position: relative;margin-left: 10px;">
			<div class="links">
				<a href="hotel_info.jsp" target="_blank">酒店介绍</a>				
				<a href="welcome.jsp" target="_blank">酒店招聘</a>
				<a href="http://www.baidu.com" target="_blank">友情链接</a>
				<a href="about_us.jsp" target="_blank">联系我们</a>
				
			</div>			
			<div class="copyright">闽ICP备12041475 | ©2017 Coding All Rights reserved. Co鼎辉煌酒店管理有限公司</div>
		
		</div>
				
			</div>

		</div>
      </div>

</body>
</html>
