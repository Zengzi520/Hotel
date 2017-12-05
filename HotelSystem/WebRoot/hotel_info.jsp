<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Co鼎辉煌酒店介绍</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  <link rel="stylesheet" type="text/css" href="css/main.css"/>
  <link rel="stylesheet" href="css/forget.css" />
  <link rel="stylesheet" type="text/css" href="css/common.css">
		<!--第二个轮播图-- css -->
 <style>
    * { margin: 0; padding: 0; }
    img { border: 0; vertical-align: top; }
    body { width: 100%; height: 100%; background-color: #F3F3F3; }

    #mask {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    #carousel {
      position: relative;
      z-index: 2;
      height: 200px;
      margin-top: 200px;

      transform-style: preserve-3d;
      perspective: 800px;
    }
    #carousel img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 300px;
      height: 200px;
      margin-left: -150px;
      margin-top: -100px;
      border-radius: 8px;

      transition: transform 0.5s ease-in-out;
    }
  </style>
  
  <!--第一个轮播图-- css -->
  	<script type="text/javascript">
		 var i=1;	
		 var mytimer;	
		function showImg(){
			var imgOBj=	document.getElementById("img1");
			imgOBj.src="img/img"+i+".png";
			i++;
			if(i>3){
				i=1;
			       }
			mytimer= setTimeout("showImg()",900);	
		}
		function stopShow(){
			clearTimeout(mytimer);
		}
		
		</script>
		
		<!------ js样式设置----结束	-->	
	    <style type="text/css">
	  .banner1 ul li{
	  	 list-style: none;
	  	 float: left;
	  	  margin: 50px;
          padding:10px;
          border: 1px solid red;
          border-radius: 50px;
	  }
	
	
		</style>
  
  </head>
  
  <body>
   <body onload="showImg();">
	<!--顶部-----开始-->	
	<div class="top" style="height: 4px;"></div>
  <div class="logo_bar">
    <img alt="辉煌酒店" src="image/logo3.png" style="position: absolute; left: 55px;top: -10px;width: 150px;">
     <span class="set_info">关于Co鼎辉煌酒店</span>
      
  </div>
   
	

	<!--顶部-----结束-->		   
			   
		<!--主体-->
		    <!--  <div id="pic1" align="center" style="background-image: url(img/p1.jpg); width:100%;"  >-->
		<div class="main1">
	            <img src="img/pp1.png" style="width: 100%;"/>
        </div>

        <div class="main2">
	          <h2>三大核心价值</h2>
	          <div class="main_2">
		      <p>作为卓越服务典范，Co鼎辉煌的标准自然更加严谨。我们恪守三大核心价值，确保每一个细节也符合标准，缔造难忘的尊贵住宿体验。</p>
	    </div>
	   

<!--轮播图1---开始-->	
   <div class="banner1">
   	    <img src="img/img1.png" id="img1" onmouseout="showImg()" onmouseover="stopShow();" style="margin: 0px auto;"/>
   	   <!-- <div class="b1"  >
   	        <ul style="float:left; position: absolute;margin-left: 700px;">
				<li id="li1"><a href="#"></a></li>
				<li id="li2"><a href="#"></a></li>
				<li id="li3"><a href="#"></a></li>
			</ul> 
   	  </div>-->
   </div>

<!--轮播图1---结束-->	

                <div class="main2">
			    	  <h2>Co鼎辉煌酒店及度假酒店经典元素与特色</h2>
			    	  <div class="main_2">
			    	  	<p>酒店的每一个经典元素及产品也经过精心挑选和安排，各具特色，触动旅客的味觉、视觉、听觉和嗅觉，全面提升住宿体验。</p>
			    	  </div>  	   
			    </div>
	
	<!--轮播图2---开始-->
	
	
  <div id="mask"></div>

  <div id="carousel">
    <img src="img/1.png" alt="">
    <img src="img/2.png" alt="">
    <img src="img/3.png" alt="">
    <img src="img/4.png" alt="">
    <img src="img/5.png" alt="">
   
  </div>

  <script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
  <script src="js/carousel.js"></script>
  <script>
    $(function () {
      $('#carousel').carousel({curDisplay: 0, autoPlay: true, interval: 900});
    });
  </script>
	

	<!--轮播图2---结束-->	
	
	             <div class="main2" style="margin-top: 60px;">
			    	  <h2>设计</h2>
			    	  <div class="main_2" >
			    	  	<p>每一家Co辉煌酒店的设计也各具特色，揉合酒店建筑和所在城市的精髓。艺术也是Co辉煌酒店设计的重要一环。</p>
			    	  </div>  
			    	  <div class="sheji">
			    	  	<img src="img/sheji.jpg" />
			    	  </div>
			    	  
			    </div>
			    
			     <div class="main2" >
			    	  <h2>餐饮美食</h2>
			    	  <div class="main_2" id="canyin">
			    	  	<p>Co辉煌酒店汇聚环球中西美馔，为餐饮体验锦上添花，因而备受推崇。</p>
			    	  	<p>不论是盛大宴会、主题晚会还是浪漫婚宴，我们的专家团队也能尽应所求，以顶级食材精心创制滋味盛宴。</p>
			    	  	<p>酒店的知名中菜厅唐阁和明阁屡获殊荣，更连续多年获得米其林星级食府荣誉。</p>
			    	  	<p>酒吧装潢时尚脱俗，让宾客细意品尝精心调配的鸡尾酒、高级醇酿和手工啤酒。</p>
			    	  	
			    	  </div>  
			    	  <div class="sheji">
			    	  	<img src="img/canyin.jpg"/>
			    	  </div>
			    	  
			    </div>
			  	<!-- -------底部----开始----- -->
	<div class="footer1" >  
	<div style="height: 1px; background: #E5E0E2"></div>    
	      <div class="list">       
	            <a href="hotel_info.jsp" target="view_window">辉煌酒店介绍</a>
	             <a href="#">酒店加盟</a>
	             <a href="#">意见反馈</a>
	             <a href="about_us.jsp"  target="view_window">联系我们</a>	       
	      </div>    
	      <div>
	          <p>闽ICP备12041475 | ©2017 Huazhu All Rights reserved. Co鼎辉煌酒店管理有限公司</p>
	      </div>
  
 </div>  
  </body>
</html>
