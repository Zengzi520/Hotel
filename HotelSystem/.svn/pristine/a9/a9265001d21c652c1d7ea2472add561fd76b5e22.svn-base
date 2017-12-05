<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Co鼎辉煌酒店</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="css/hotel2.css" />
	<link rel="stylesheet" href="css/bootstrap.css" />
	<link rel="stylesheet" href="css/laydate.css" />
	<link rel="stylesheet" href="danlan/laydate.css" />
	<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/laydate.dev.js" ></script>
	<script type="text/javascript" src="js/after.js" ></script>

  </head>
  
  <body>
    <div class="title">
			<h1 class="hotelname">Co鼎辉煌酒店系统</h1>
			<div class="top">
				<a href="#">注销</a>
			</div>
	</div>
	<div class="content">
		<div class="contleft">
			<div class="lfmenu" id="lfmenu">
			    <i class="glyphicon glyphicon-th-list"></i>
				<a >主菜单</a>
				<i class="glyphicon glyphicon-menu-down"></i>
			</div>
			<div class="lfhotel" id="lfhotelinfo">
				<i class="glyphicon glyphicon-home"></i>
				<a >酒店管理系统</a>
			</div>
			<div class="lfreserve" id="lftoday_reserve">
				<i class="glyphicon glyphicon-phone-alt"></i>
				<a >今日住房</a>
			</div>
			<div class="lfreserve" id="lfnew_reserver">
				<i class="glyphicon glyphicon-phone-alt"></i>
				<a>新的订单</a>
			</div>
			<div class="lfreserve" id="lfhava_reserver">
				<i class="glyphicon glyphicon-phone-alt"></i>
				<a>已预约订单</a>
			</div>
			<div class="lfQrecord" id="lfhistory_record">
			    <i class="glyphicon glyphicon-book"></i>
				<a>往期统计</a>
			</div>
        </div>
        <div class="rghotel" >
        	<div class="rgmenu">
		        <a>显示信息</a>
		    </div>
			<div class="hotelinfo" hidden="hidden">
		    <div class="titel">
		    	<span style="font-size: 30px; color: firebrick;">房间住客情况</span>
		    	<ul>
		    		<li><input type="radio" name = "roomclass" value="" /><a>全部</a></li>
		    		<li><input type="radio" name = "roomclass" value="1002" /><a>大床间</a></li>
		    		<li><input type="radio" name = "roomclass" value="1001" /><a>标间</a></li>
		    		<li><input type="radio" name = "roomclass" value="1005" /><a>高级大床房</a></li>
		    		<li><input type="radio" name = "roomclass" value="1003" /><a>商务房</a></li>
		    		<li><input type="radio" name = "roomclass" value="1004" /><a>豪华套房</a></li>
		    		<li><input type="radio" name = "roomclass" value="1006" /><a>特价房</a></li>
		    		
		    	</ul>
		    	<div class="serch">
		    		<a>房间号:</a>
		    		<input type="text" id="roomser" />
		    		<input type="button" value="查找" id="findrooms" >
		    	</div>
		    </div>
		    <div class="center">
		    	<ul id="roomsinfo">
		    	</ul>
		    	</div>
		   </div>
		    <div class="today_reserve" hidden="hidden">
		        <div class="titel">
		    	<span style="font-size: 30px; color: firebrick;">今日订单详情</span>
		    	<div>
		    		<span>客户名称:</span><input type="text" id="todayuser" />  
		    		<span>房间房号:</span><input type="text" id="todayroom" />  
		    		<input type="button" value="查看" id="bt_todayorder" />
		    	</div>
		        </div>
		        <div class="recenter">
		        	<table class="reservetable">
		        		<thead>
		        			<tr>
		        				<td>房间号</td>
		        				<td>房间类型</td>
		        				<td>入住时间</td>
		        				<td>客户姓名</td>
		        				<td>性别</td>
		        				<td>证件号</td>
		        				<td>联系方式</td>
		        				<td>退房时间</td>
		        				<td>房价</td>
		        				<td>总价</td>
		        			</tr>
		        		</thead>
		        		<tbody id="todaytable">	
		        		</tbody>
		        	</table>
		        </div>
		    </div>
		    <div class="new_reserver" hidden="hidden">
		        <div class="titel" >
		    	<span style="font-size: 30px; color: firebrick;">最新未确认订单</span>
		        </div>
		        <div class="recenter">
		        	<table class="reservetable">
		        		<thead>
		        			<tr>
		        				<td>
		        			 <input type="checkbox" />
		        				</td>
		        				<td>预约类型</td>
		        				<td>安排房间</td>
		        				<td>入住时间</td>
		        				<td>共几晚</td>
		        				<td>客户姓名</td>
		        				<td>性别</td>
		        				<td>证件号</td>
		        				<td>联系方式</td>
		        				<td>房价</td>
		        				<td>总付</td>
		        			</tr>
		        		</thead>
		        		<tbody id="newreserveinfo">
		        		</tbody>
		        	</table>
		        	<div class="configorder">
		        		<a id="bt_configorder">确认订单</a>
		        	</div>
		        </div>
		    </div>
		    <div class="hava_reserver" hidden="hidden">
		    	<div class="titel">
		    	<span style="font-size: 30px; color: firebrick;">已预约订单</span>
		    	<div>
		    		<span>客户名称:</span><input type="text" id="reusername" />
		    		<span>联系方式</span><input type="text" id="retel" />
		    		<input type="button" value="查询" id="reserveQuery" />
		    	</div>
		        </div>
		        <div class="recenter">
		        	<table class="reservetable">
		        		<thead>
		        			<tr>
		        				<td>预约类型</td>
		        				<td>房间号</td>
		        				<td>入住时间</td>
		        				<td>预约天数</td>
		        				<td>客户姓名</td>
		        				<td>性别</td>
		        				<td>证件号</td>
		        				<td>联系方式</td>
		        				<td>房价</td>
		        				<td>总价</td>
		        			</tr>
		        		</thead>
		        		<tbody id="allorder">	
		        		</tbody>
		        	</table>
		        </div>
		        <div class="foot">
		        	 <a href="" class="conduct">办理入住</a>
		        </div>
		    </div>
            <div class="history_record" hidden="hidden" >
		    	<div class="titel">
		    		<span style="font-size: 30px; color: firebrick;">往期酒店住房统计</span>	
		    		<div class="queryrecord">
		    			时间:<input type="text" id="begintime" onclick="laydate({istime: true,max: laydate.now(-1)})" />至<input type="text" id="endtime" /> 
		    			<input type="button" value="查询" />
		    		</div>
		    	</div>
		    	<div class="recordcenter">
		    		<table>
		    			<thead>
		    				<tr>
		    					<td></td>
		    				</tr>
		    			</thead>
		    		</table>
		    	</div>
		    </div>
		</div>
	</div>
  </body>
</html>
