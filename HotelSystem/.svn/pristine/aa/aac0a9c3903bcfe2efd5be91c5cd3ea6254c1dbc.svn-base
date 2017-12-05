<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">

<title>Co鼎辉煌大酒店预订</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" href="css/Hotel.css" />
<link rel="stylesheet" href="css/bootstrap.css" />
<link rel="stylesheet" href="css/laydate.css" />
<link rel="stylesheet" href="danlan/laydate.css" />
<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/laydate.dev.js"></script>
<script type="text/javascript" src="js/hotel.js"></script>

<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=2.0&ak=IRhbOx6KFghzfhQDZhNzKZKmSDq4glgM	">
	//v2.0版本的引用方式：src="http://api.map.baidu.com/api?v=2.0&ak=您的密钥"
</script>


<!-- 头部开始link -->
<link href="css/lrtk.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<link rel="stylesheet" type="text/css"
	href="bootstrap/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="css/index.css">
<link rel="stylesheet" type="text/css" href="css/loginupdown.css">
<script
	src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script
	src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/script/index.js"></script>
<!-- 头部结束link -->

<!-- 头部js开始 -->
<script type="text/javascript">
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
	function setRandomCode() {

		document.getElementById("RandomImg").src = "/HotelSystem/randomCode?"
				+ new Date().getTime();

	}
	/* 设置验证码结束 */

	/* 客服开始 */
	$(function() {
		$(".btn_top").hide();
		$(".btn_top").live("click", function() {
			$('html, body').animate({
				scrollTop : 0
			}, 300);
			return false;
		});
		$(window).bind('scroll resize', function() {
			if ($(window).scrollTop() <= 300) {
				$(".btn_top").hide();
			} else {
				$(".btn_top").show();
			}
		});
	});
	/* 客服结束 */
</script>
<!-- 头部js结束 -->

</head>

<body style="background:#e1dac8;">
	<!-- <div class="newtitle">
			<img class="hotellogo" width="110px" height="55px" src="img/Hotel_logo.png"/>
			<ul class="Lcfx">
				<li class="lfll"><a href="#">首页</a></li>
				<li class="lfll"><a href="#">国内酒店</a></li>
				<li class="lfll"><a href="#">海外酒店</a></li>
				<li class="lfll"><a href="#">特卖专区</a></li>
				<li class="lfll"><a href="#">旗下酒店</a></li>
			</ul>
			<div class="lflr">
				<i class="glyphicon glyphicon-phone" ></i>
				<i class="glyphicon glyphicon-"></i>
			    <a class="signin" href="#">登录</a>
			    <a class="signup" href="#">注册</a>
			</div>
		</div> -->
	<!-- 头部开始 -->
	<div class="header-top" style="height: 130px;">
		<!--   头部菜单栏开始 -->
		<nav class="navbar navbar-default navbar-fixed-top"
			style="height:130px;">
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
					src="image/logo3.png" style="width: 148px;margin-top: -25px;">
				</a>
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
						aria-expanded="false"> 国内酒店 <span class="caret"></span> </a>
						<ul class="dropdown-menu ">
							<li><a href="/HotelSystem/test?city=beijing" id="beijing"
								target="_blank">北京</a>
							</li>
							<li><a href="/HotelSystem/test?city=shanghai" id="shanghai"
								target="_blank">上海</a>
							</li>
							<li><a href="/HotelSystem/test?city=nanjing" id="nanjing"
								target="_blank">南京</a>
							</li>
							<li role="separator" class="divider"></li>
							<li><a href="/HotelSystem/test?city=shenzhen" id="shenzhen"
								target="_blank">深圳</a>
							</li>
							<li><a href="/HotelSystem/test?city=guangzhou"
								id="guangzhou" target="_blank">广州</a>
							</li>
							<li><a href="/HotelSystem/test?city=xianggang"
								id="xianggang" target="_blank">香港</a>
							</li>
							<li role="separator" class="divider"></li>
							<li><a href="/HotelSystem/test?city=xiamen" id="xiamen"
								target="_blank">厦门</a>
							</li>
							<li><a href="/HotelSystem/test?city=hangzhou" id="hanzhou"
								target="_blank">杭州</a>
							</li>
							<li role="separator" class="divider"></li>
							<li><a href="/HotelSystem/test?city=chengdu" id="chengdu"
								target="_blank">成都</a>
							</li>
							<li><a href="/HotelSystem/test?city=haerbing" id="haerbing"
								target="_blank">哈尔滨</a>
							</li>

						</ul></li>
				</ul>
				<div class="weather">
					<!-- 天气预报开始 -->
					<iframe id="fancybox-frame" name="fancybox-frame1510984195465"
						width="450" scrolling="no" height="80" frameborder="0"
						allowtransparency="true"
						src="http://i.tianqi.com/index.php?c=code&id=2&color=%238d8d8d&icon=4&py=${City}&num=3&site=12"></iframe>
					<!-- 天气预报结束 -->

					<div />

					<form class="navbar-form navbar-left" style="margin-left: 450px;"
						action="/HotelSystem/indexsearch" target="_blank">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="请输入关键字"
								name="indexsearch">

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
									</div> <a role="menuitem" tabindex="-1" href="${sessionScope.Index_IN_SESSION==null?'javascript:showdiv()':'javascript:volid(0)'};"
									class="login_up" name="login_up"
									style="${sessionScope.Index_IN_SESSION==null?' ':' cursor:not-allowed;'}">登录</a>
								</li>
								<br />

								<li role="presentation">
									<div class="icon2">
										<img alt="login" src="image/login.png"
											style="width: 35px;position: absolute; margin-left: -113px; margin-top: -3px;">
									</div> <a role="menuitem" tabindex="-1" href="${sessionScope.Index_IN_SESSION==null?'register.jsp':'javascript:return false'};"
									target="_blank"
									style="${sessionScope.Index_IN_SESSION==null?' ':' cursor:not-allowed;'}">注册</a>
								</li>


								<br />
								<li role="separator" class="divider"></li>
								<br />
								<li role="presentation"><a role="menuitem" tabindex="-1"
									href="" class="weixin" onMouseOut="hideImg1()"
									onmouseover="showImg1()">微信</a>
									<div id="wxImg"
										style="display:none;height:10px;back-ground:#f00;position:absolute;">
										<img alt="weixin" src="image/weixin.jpg">
									</div>
								</li>
								<br />
								<br />
							</ul>
						</li>
					</ul>
				</div>

			</div>
		</nav>

		<!--   头部菜单栏结束 -->
	</div>
	<!-- 欢迎显示开始 -->
	<div
		style="font-family:'华文彩云'; ${sessionScope.Index_IN_SESSION==null?'display:none;':'display:block;'} z-index: 99999; position: fixed; margin-top:-120px; margin-left:1028px;">
		<span style="font-family:'KaiTi_GB2312'; opacity:0.5; color:#b81e5b;"
			id="indexname">欢迎${sessionScope.Index_IN_SESSION},</span> <a
			style=" font-family:'KaiTi_GB2312'; color:#b81e5b; opacity:0.5;"
			id="indexExit" href="/HotelSystem/indexExit">退出</a>
	</div>
	<!-- 欢迎显示结束-->



	<div id="login_updown"
		style="${errorMsg==null?'display:none;':'display:block;'}position: fixed; z-index: 99999;">
		<span style="color:#b81e5b;  z-index: 99999;" class="errorMsg">${errorMsg}</span>
		<form class="form" action="/HotelSystem/loginIndex" method="post">
			<h2>登录</h2>
			<a class="glyphicon glyphicon-remove" href="javascript:hidediv();"
				style="font-size: 30px; position: absolute; margin-left: 380px;margin-top: 45px;"></a>
			<p type="Tel:">
				<input placeholder="请输入你的电话号码.." name="user_tel"></input>
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
	<!--  头部结束 -->
	<input type="hidden" id="addcity" value="${City}">

	<div class="Cmbox">

		<!-- 客服代码 开始 -->
		<div class="izl-rmenu">
			<a class="consult" target="_blank"><div class="phone"
					style="display:none;">010-12345678</div> </a>
			<!--  <a class="cart"><div class="pic"></div></a>  -->
			<a href="javascript:void(0)" class="btn_top" style="display: block;"></a>
		</div>
		<a href="http://wpa.qq.com/msgrd?v=3&uin=840038244&site=qq&menu=yes"
			id="udesk-feedback-tab" class="udesk-feedback-tab-left"
			style="display: block; background-color: black;"></a>
		<!--客服 代码 结束 -->


		<div class="inner_Cwrap" style="width: 85%;">

			<div class="Cdir">
				<a href="#"> <i class="glyphicon glyphicon-home"></i> 首页 </a> <span>></span>
				<!-- <a href="">上海酒店预定</a>
					<span>></span> -->
				<a href="" style="font-size: 17px;">${hotel.h_NAME }</a>
			</div>
			<div class="Pdate_prat1">
				<div class="prat1_top">
					<div class="info_lf1">
						<div class="hotelname">
							<h1>${hotel.h_NAME}</h1>
							<span>新品</span>
						</div>
						<div class="hotle_site" style="margin: 2px 0px;">${hotel.h_LOC
							}</div>
						<div>
							<i class="glyphicon glyphicon-shopping-cart"></i> <i
								class="glyphicon glyphicon-apple"></i> <i
								class="glyphicon glyphicon-cutlery"></i> <i
								class="glyphicon glyphicon-apple"></i>
						</div>
					</div>
					<div class="info_rg1">
						<div class="price_lt" style="color: orange;">
							<i>¥</i> <span id="hotel_price" style="font-size: 24px;">168</span>
							<i>起</i>
						</div>
						<div class="favoritebox">
							<a href="#"><i></i>收藏这家酒店</a>
						</div>
					</div>
				</div>
				<div class="lcfx_lm5">
					<div class="hotelpic">
						<img class="large_img" src="${hotel.h_IMG}" width="265"
							height="265" />
						<div class="imgbox">
							<c:forEach items="${list}" var="var">

								<img class="large_img" src="${var.RC_IMG}" date-index="1"
									width="175" height="130" />
							</c:forEach>
						</div>
					</div>
					<div class="topcomment">
						<div class="score">
							<span class="scorenum"> 4.6 <i>/5分</i> </span>
							<div class="count">共1365条评论</div>
						</div>
					</div>
				</div>
			</div>
			<div class="Pdate_prat2">
				<div class="tabs" style="top: 0px; left: 79.5px; width: 100%;">
					<div class="backbox"></div>
					<div class="links" style="top:10px;">
						<h2 class="link" id="one">
							<a href="/HotelSystem/test?city=${City}#num1">酒店预定</a>
						</h2>
						<h2 class="link">
							<a href="/HotelSystem/test?city=${City}#num2">交通位置</a>
						</h2>
						<h2 class="link">
							<a href="/HotelSystem/test?city=${City}#num3">酒店概况</a>
						</h2>
						<h2 class="link">
							<a href="/HotelSystem/test?city=${City}#num4">酒店点评</a>
						</h2>
					</div>
				</div>
				<div class="hotelroom_block">
					<a name="num1"></a>
					<div class="block_top">
						<span>入住日期</span>
						<div class="putbox">
							<input id="dpinputtime" class="timeinput" type="text"
								onclick="laydate({istime: true,min: laydate.now(0),max: laydate.now(30)})" />
						</div>
						<span>退房日期</span>
						<div class="putbox">
							<input id="dpoutputtime" class="timeoutput" type="text" />
						</div>
						<span class="indates">共 1 晚</span> <a class="btn_queryroom">查询</a>
					</div>
					<div class="roomtype">
						<table>
							<thead>
								<tr>
									<td width="200">房型</td>
									<td width="210"></td>
									<td width="100">床型</td>
									<td width="100">早餐</td>
									<td width="100">门市价</td>
									<td width="140">房价</td>
									<td width="250"></td>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${list}" var="rooms">
									<tr>
										<td class="roomtd" rowspan="2">
											<div class="roomname">
												<img src="${rooms.RC_IMG}" width="54" height="54" />
												<h3>${rooms.RC_CLASS}</h3>
												<a class="more" href=""> 查看详情<i class="arrow"></i> </a>
											</div>
										</td>
										<td width="210">会员价</td>
										<td width="100">${rooms.BED_CLASS }</td>
										<td width="140"><a class="breakfast" href="#">查看</a>
										</td>
										<td width="100">￥<span class="oldprice">${rooms.RC_OLDPRICE}</span>
										</td>
										<td class="pricearea" width="140">￥<span class="price">${rooms.RC_PRICE}</span>
										</td>
										<td width="210"><a class="orderbtn" href="/HotelSystem/goorder?CRoom=${rooms.RC_PRICE}"
											target="_blank">预定</a>
										</td>
									</tr>
									<tr class="room">
										<td width="210">铂金会员价</td>
										<td width="100">${rooms.BED_CLASS }</td>
										<td width="140"><a class="breakfast" href="#">查看</a>
										</td>
										<td width="100">￥<span class="oldprice">${rooms.RC_OLDPRICE}</span>
										</td>
										<td class="pricearea" width="140">￥<span class="price">${rooms.RC_PRICE}</span>
										</td>
										<td width="210"><a class="orderbtn" href="/HotelSystem/goorder?CRoom=${rooms.RC_PRICE}"  target="_blank">预定</a>
										</td>
									</tr>

								</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="Pdetail_part3">
				<a name="num2"></a>
				<div id="Pdetail_map" class="Pdetail_map"
					data-nblock-id="block/hotelDetailMap">
					<br />
					<h3 class="title">交通位置</h3>
					<br />
					<div id="container" style="height: 100%; width: 100%;"></div>

				</div>
				<div id="Pdetail_basicinfo" class="Pdetail_basicinfo Lmt20"
					style="margin-top: 70px;">
					<br /> <a name="num3"></a>
					<h3 class="title">
						<i class="Cicon small_purulecircle"></i>酒店概况
					</h3>
					<div class="content Lovh">
						<div class="item">
							<span class="label"><i class="Cicon small_telephone"></i>酒店电话</span>
							<div class="text itembox">
								<span>${hotel.h_PHONE }</span><span>酒店传真：021-54720205</span>
							</div>
						</div>
						<div class="item">
							<span class="label"><i class="Cicon small_littlehome"></i>酒店介绍</span>
							<div id="hotelDescText" class="text desc Lpb35">
								<div class="textbox">
									<p>${hotel.h_INFO }</p>
								</div>
								<a href="javascript:;" class="more">查看更多<i class="arrow"></i>
								</a>
							</div>
						</div>
						<div class="item">
							<span class="label"><i class="Cicon small_bell"></i>入住提示</span>
							<div id="hotelNoticeText" class="text Lpb35 checkin_notice">
								<div class="textbox">
									<p>
										酒店通常在14：00后开始办理入住，如果早到可能需要等待<br />

									</p>
								</div>
								<!-- <a href="javascript:;" class="more">查看更多<i class="arrow"></i>
								</a> -->
							</div>
						</div>
						<div class="item">
							<span class="label"><i class="Cicon small_bed"></i>客房设施</span>
							<div class="text itembox">
								<span>国内长途电话</span> <span>24小时热水</span> <span>客房Wifi覆盖</span> <span>独立卫生间</span>
								<span>分体式（中央）空调</span> <span>雨伞</span> <span>欢迎礼品</span> <span>电视</span>
								<span>电吹风</span> <span>免费洗漱用品</span> <span>国际长途电话</span> <span>有线/卫星电视接收</span>
								<span>电水壶</span> <span>免费瓶装水</span> <span>拖鞋</span> <span>免费茶包</span>
								<span>衣柜</span> <span>收费电影</span> <span>110V电压插座</span>
							</div>
						</div>
						<div class="item">
							<span class="label"><i class="Cicon small_chair"></i>综合设施</span>
							<div class="text itembox">
								<span>前台保险箱</span> <span>停车场</span> <span>大堂wifi覆盖</span> <span>大厅上网</span>
								<span>会议室</span> <span>商务休息区</span> <span>商品销售</span> <span>餐厅</span>
								<span>免费咖啡饮料</span> <span>传真打印</span> <span>复印</span> <span>POS机</span>
								<span>自助选房</span>
							</div>
						</div>
						<div class="item">
							<span class="label"><i class="Cicon small_sing"></i>娱乐设施</span>
							<div class="text itembox">
								<span>咖啡厅</span> <span>健身室</span> <span>酒吧</span>
							</div>
						</div>
						<div class="item">
							<span class="label"><i class="Cicon small_dinner"></i>服务项目</span>
							<div class="text itembox">
								<span>自助洗衣</span> <span>客衣送洗服务</span> <span>叫醒服务</span> <span>行李寄存</span>
							</div>
						</div>
					</div>
				</div>
				<div class="Pdetail_comment"
					data-nblock-id="block/hotelDetailComment">
					<a name="num4"></a>
					<h3 class="title Lcfx">
						<i class="Cicon small_purulecircle"></i>酒店点评
					</h3>
					<div class="content">
						<div class="top">
							<div class="scorebox">
								<br /> <span class="label" style="color:#337ab7;">综合评分</span>
								<div class="score">
									<i class='Cicon star full'></i><i class='Cicon star full'></i><i
										class='Cicon star full'></i><i class='Cicon star full'></i><i
										class='Cicon star half'></i><span class="Ldib Lpl5">
										4.6<i>/5分</i> </span>
								</div>
							</div>
						</div>
						<div class="commentbox_Lovh">
							<div class="commentitem" data-hotel-id="8000065">
								<div class="user">
									<img src="image/01P.png" width="53" height="53" class="img"><span
										class="name">1700174</span>
								</div>
								<div>
									<div class="commentitemlist">
										<div class="ctextbox">
											<div class="ctext">
												<div class="cont">Co鼎很赞??已经来入住许多次了，都还是觉得这家Co鼎是非常好的，从环境，设施，人员服务，干净，，都很好！早餐也是不错的。值得推荐给您！</div>
											</div>
											<i class="Cicon arrow"></i>
										</div>
									</div>
									<div class="cbottom Ltar Lcfx">
										<span class="cdate">2017-10-31 11:50</span>
									</div>
								</div>
							</div>
							<div class="commentitem" data-hotel-id="8000065">
								<div class="user">
									<img src="image/02P.png" width="53" height="53" class="img"><span
										class="name">1700174</span>
								</div>
								<div>
									<div class="commentitemlist">
										<div class="ctextbox">
											<div class="ctext">
												<div class="cont">Co鼎一直是优先考虑的，这次入住Co鼎也是很棒的感受，有别于众多不懂得服务业精神的业者，Co鼎很赞??</div>
											</div>
											<i class="Cicon arrow"></i>
										</div>
									</div>
									<div class="cbottom Ltar Lcfx">

										<span class="cdate">2017-10-31 11:47</span>
									</div>
								</div>
							</div>
							<div class="commentitem" data-hotel-id="8000065">
								<div class="user">
									<img src="image/03P.png" width="53" height="53" class="img"><span
										class="name">064952739</span>
								</div>
								<div>
									<div class="commentitemlist">
										<div class="ctextbox">
											<div class="ctext">
												<div class="cont">真心不错！超值的服务！还有健身房！</div>
											</div>
											<i class="Cicon arrow"></i>
										</div>
									</div>
									<div class="cbottom Ltar Lcfx">
										<span class="cdate">2017-10-20 09:14</span>
									</div>
								</div>
							</div>
							<div class="commentitem" data-hotel-id="8000065">
								<div class="user">
									<img src="image/04P.png" width="53" height="53" class="img"><span
										class="name">098114375</span>
								</div>
								<div>
									<div class="commentitemlist">
										<div class="ctextbox">
											<div class="ctext">
												<div class="cont">环境优美还有健身房，典型的时尚高大上酒店。下次仍旧选择入住。</div>
											</div>
											<i class="Cicon arrow"></i>
										</div>

									</div>
									<div class="cbottom Ltar Lcfx">
										<span class="cdate">2017-10-20 12:03</span>
									</div>
								</div>
							</div>
							<div class="commentitem" data-hotel-id="8000065">
								<div class="user">
									<img src="image/05P.png" width="53" height="53" class="img"><span
										class="name">040246618</span>
								</div>
								<div>
									<div class="commentitemlist">

										<div class="ctextbox">
											<div class="ctext">
												<div class="cont">挺好的，干净</div>
											</div>
											<i class="Cicon arrow"></i>
										</div>
									</div>
									<div class="cbottom Ltar Lcfx">
										<span class="cdate">2017-11-18 09:20</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="Myfoot">
		<div class="links">
			<a href="hotel_info.jsp" target="_blank">酒店介绍</a>				
			<a href="welcome.jsp" target="_blank">酒店招聘</a>
			<a href="http://www.baidu.com" target="_blank">友情链接</a>
			<a href="about_us.jsp" target="_blank">联系我们</a>
		</div>
		<div class="copyright">闽ICP备12041475 | ©2017 Coding All Rights
			reserved. Co鼎辉煌酒店管理有限公司</div>
	</div>
</body>
</html>
<script type="text/javascript">
	/*  地图开始  */

	var map = new BMap.Map("container");
	// 创建地图实例  
	var city = document.getElementById("addcity").value;

	var point;
	var label;
	if (city == "beijing") {
		point = new BMap.Point(116.407, 39.904);
		label = new BMap.Label("北京Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -25)
		});
	}
	if (city == "shanghai") {

		point = new BMap.Point(121.4803, 31.236);
		label = new BMap.Label("上海门Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "nanjing") {

		point = new BMap.Point(118.8029, 32.0647);
		label = new BMap.Label("南京Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "hangzhou") {

		point = new BMap.Point(120.1617, 30.2799);
		label = new BMap.Label("杭州Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "shenzhen") {

		point = new BMap.Point(114.066, 22.5485);
		label = new BMap.Label("深圳Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "guangzhou") {

		point = new BMap.Point(113.2708, 23.1351);
		label = new BMap.Label("广州Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "haerbing") {

		point = new BMap.Point(126.5424, 45.8077);
		label = new BMap.Label("哈尔滨Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "chengdu") {

		point = new BMap.Point(104.0712, 30.5763);
		label = new BMap.Label("成都Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "xianggang") {

		point = new BMap.Point(114.1720, 22.2810);
		label = new BMap.Label("香港Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	if (city == "xiamen") {

		point = new BMap.Point(118.188, 24.4938);
		label = new BMap.Label("厦门Co鼎大酒店,地址:${hotel.h_LOC }", {
			offset : new BMap.Size(20, -10)
		});
	}
	// 创建点坐标  
	map.centerAndZoom(point, 18);
	// 初始化地图，设置中心点坐标和地图级别  

	map.addControl(new BMap.MapTypeControl({
		mapTypes : [ BMAP_NORMAL_MAP, BMAP_HYBRID_MAP ]
	}));
	map.setCurrentCity("厦门"); // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
	var marker = new BMap.Marker(point, {
		icon : myIcon
	});
	var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif",
			new BMap.Size(300, 157));
	map.addOverlay(marker);

	marker.setLabel(label);

	var navigationControl = new BMap.NavigationControl({
		// 靠左上角位置
		anchor : BMAP_ANCHOR_TOP_LEFT,
		// LARGE类型
		type : BMAP_NAVIGATION_CONTROL_LARGE,
		// 启用显示定位
		enableGeolocation : true
	});
	map.addControl(navigationControl);
	var geolocationControl = new BMap.GeolocationControl();
	geolocationControl.addEventListener("locationSuccess", function(e) {
		// 定位成功事件
		var address = '';
		address += e.addressComponent.province;
		address += e.addressComponent.city;
		address += e.addressComponent.district;
		address += e.addressComponent.street;
		address += e.addressComponent.streetNumber;
		//alert("当前定位地址为：" + address);
	});
	geolocationControl.addEventListener("locationError", function(e) {
		// 定位失败事件
		alert(e.message);
	});
	map.addControl(geolocationControl);

	/*  地图结束 */
</script>