<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>我的订单</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="css/order.css">
	<link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/laydate.css" />
	<link rel="stylesheet" href="danlan/laydate.css" />
	<script type="text/javascript" src="js/laydate.dev.js" ></script>
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
    <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/order.js"></script>

  </head>
  
  <body>
    <!-- 顶部导航 -->
    <div id="top"></div>
    <div id="header">
        <div class="pic1">
           <img alt="@@@@@" src="image/logo3.png" style="width: 120px;">
        </div>
        <div class="process">
           <div class="write"><span>1.填写订单</span></div>
           <div class="choose"><span>2.选择支付方式</span></div>
           <div class="finish"><span>3.完成预定</span></div>
        </div>
    </div>
    
    <form action="/HotelSystem/order" method="post">
    <div id="content">
      <div id="left">
      
        <div class="prepare">
          <span class="row1">预定信息&nbsp;&nbsp;&nbsp;</span>          
        </div>
        <!-- <hr style= "border:1px solid  #E0E0E0;width: 85%; margin-left: 6%;" /> -->
        <div class="line1"></div>
        
        <div class="row3">
        <span>入住时间：</span>
        <input type="text" onclick="laydate({istime: true,min: laydate.now(0),max: laydate.now(30)})" 
         name="date1" id="date1">
        
        <span>&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;</span>
        <input type="text" id="date2" name="date2">
        <select id="select_data_in" onchange="Complay_Date()">
         	<option>选择预订时长</option>
         	<option value="1">预订一天</option>
         	<option value="2">预订二天</option>
         	<option value="3">预订三天</option>
         	<option value="4">预订四天</option>
         	<option value="5">预订五天</option>
         	<option value="6">预订六天</option>
         	<option value="7">预订七 天</option>     
         </select>     
        </div>
        
        <div class="row4">
        <span>房间数量：</span>
         <input type="radio" value="1" name="select" checked="checked" onclick="getSum1();"><a style="margin: 0px 10px">1</a>
         <input type="radio" value="2" name="select" onclick="getSum2();"><a style="margin: 0px 10px">2</a>
        </div>
        
     <div class="row5">
     <span>房费单价：</span>
     <span class="char">￥ ${prices} </span>
     <input type="hidden" name="single_Price" value="${prices}">
     </div>
       
      <div class="checkin">

        <span class="row6">入住信息</span>
      </div>  
      <div class="line2"></div>
        
        
        <div class="men">
        <span class="symbol">*</span>
        <span>入住人：</span>
        <input type="text" name="cusName" style="
        border: 1px solid #E0E0E0;height: 35px;width: 160px; border-radius:5px;
        font-weight: bolder; font-size: 13px;">
        <span class="symbol">&nbsp;&nbsp;&nbsp;*</span>
        <span name="sex">性别：</span>
        <input type="text" name="sex" style=" 
        border: 1px solid #E0E0E0;height: 35px;width: 160px; border-radius:5px;
        font-weight: bolder; font-size: 13px;">
        <span style="color: red;">${errorMsg3 }</span>
        <div id="addInput"></div>
        <button type="button" class="btn btn-default" aria-label="Right Align" style="width: 120px; border: none; margin-top: 12px;margin-left: 8.4%" 
        onclick="addCustomer()">
        <span class="glyphicon glyphicon-plus" aria-hidden="true" style="text-align: right;font-size: 12px;color: #9F0050">添加入住人</span>
        </button><br>
        <div class="statement">
        <span>至少填写1人，填写姓名必须与入住时所持有效证件姓名保持一致</span><br>
        <span>请正确填写入住人姓名，当实际入住人与订单入住人不一致时，酒店有权拒绝接待</span>
        </div>
        </div>
        
        <div class="IDNum">
        <span class="symbol">*</span>
        <span>身份证号：</span>
        <input type="text" name="IDNum" style=" 
        border: 1px solid #E0E0E0;height: 35px;width: 190px; border-radius:5px;
        font-weight: bolder; font-size: 13px;"> 
        <span style="color: red;">${errorMsg2 }</span>
        </div>
        
        <div class="telNum">
        <span class="symbol">*</span>
        <span>手机号码：</span>
        <input type="text" name="telNum" style=" 
        border: 1px solid #E0E0E0;height: 35px;width: 190px; border-radius:5px;
        font-weight: bolder; font-size: 13px;"> 
        <span style="color: red;">${errorMsg1 }</span>
        </div>
        
        
        
        <div class="picture">
        <span class="symbol">*</span>
        <span>图形验证码：</span>
        <input type="text" name="randomCode" style=" 
        border: 1px solid #E0E0E0;height: 35px;width: 190px; border-radius:5px;
        font-weight: bolder;">
        <img alt="验证码" src="/HotelSystem/randomCode" id="randomCodeImg"
        onclick="changeCode();">
        <span style="color: red;">${errorMsg }</span>
        </div>
        

        <div class="total">       
          <span>房费总价</span>         
          <span id="totalPrice1">￥284</span><br> 
                                 
          <span>&nbsp;优&nbsp;惠&nbsp;券</span>         
          <span>&nbsp;￥0</span><br>                        
        </div>
            
      <hr style= "border:1px dashed  #e6e6e6;width: 85%; margin-left: 6%;" />  

        <div class="end">
          <p style="text-align: right">订单总价<span style="color: #f60">￥</span>
          <span style="color: #f60;font-size: 24px;" id="totalPrice">284</span></p>
          <input type="submit" value="提交订单" style="width: 160px; height: 40px;
          background-color: #9F0050; color: white; font-size: 16px; border-radius:7px;
          line-height: 40px;border: 0px solid #9F0050">
        </div>
        
      </div> 
      
      
      <div id="right">
       <img alt="@@@@" src="image/526txj.jpg" style="width: 280px;margin: 30px 30px">
       
       <div class="row1">
        <span style="font-weight: bolder; font-size: 15px">CO鼎辉煌酒店</span><br>
        <span style="font-size: 12px">厦门市软件园西门</span>
       </div>
       
       <hr style= "border:1px solid  #e6e6e6;width: 85%; margin-left: 6%;" />
      
       <div class="row2">
         <h4 style="font-weight: bolder;">双床房</h4>
         <h6>床型：双床</h6>
         <h6>面积：25</h6>
         <h6>窗户：有</h6>
         <h6>楼层：1~3层</h6>
         <h6>入住人数：2人(不可加人)</h6>
         <h6>是否无烟：该房型为无烟房</h6>
         <h6>宽带上网：客房wifi</h6>
       </div>
      
      <hr style= "border:1px solid  #e6e6e6;width: 85%; margin-left: 6%;" />
      
       <div class="row3">
       <h4 style="font-weight: bolder;">酒店公告</h4>
         <h6>酒店电话：1234567</h6>
         <h6>客服电话：7654321</h6>
       </div>
       
       <hr style= "border:1px solid  #e6e6e6;width: 85%; margin-left: 6%;" />
       
       <div class="row4">
       <h4 style="font-weight: bolder;">订单政策</h4>
         <h6 style="color: #9F0050">免费取消  全额退款</h6>
         <h6>请于入住日中午12:00后办理入住，如提前到店，视<br>酒店空房情况安排。</h6>
         <h6>本订单最晚保留时间为19:00,若到店时间较晚，建议<br>预付房费</h6>
         <h6>最晚取消时间：在线支付完成1小时内,逾时无法取消<br>和退款！</h6>       
       </div>
       
        <hr style= "border:1px solid  #e6e6e6;width: 85%; margin-left: 6%;" />
        
        
      </div>   
    </div>
       </form>
    
    <div id="footer">
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
