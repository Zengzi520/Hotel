$(function(){
	
	$("#endtime").click(function(){
		var indate = $("#begintime").val();
		laydate({
			min: indate	,
			max:laydate.now(0)
		});
	});
	$("#endtime").blur(function(){
		var indate = $("#dpinputtime").val();
		var outdate = $("#dpoutputtime").val();
		var date1 = new Date(indate);
		var date2 = new Date(outdate);
		var day = (date2-date1)/(24*60*60*1000);
	});
	$("#lfmenu").click(function(){
		$(".rgmenu").show();
		$(".hotelinfo").hide();
		$(".today_reserve").hide();
		$(".new_reserver").hide();
		$(".hava_reserver").hide();
		$(".history_record").hide();
	});
	$("#lfhotelinfo").click(function(){
		$(".rgmenu").hide();
		$(".hotelinfo").show();
		$(".today_reserve").hide();
		$(".new_reserver").hide();
		$(".hava_reserver").hide();
		$(".history_record").hide();
		
		findrooms();
	});
	$("#lftoday_reserve").click(function(){
		$(".rgmenu").hide();
		$(".hotelinfo").hide();
		$(".today_reserve").show();
		$(".new_reserver").hide();
		$(".hava_reserver").hide();
		$(".history_record").hide();
		
		tudayorder();
	});
	$("#lfnew_reserver").click(function(){
		$(".rgmenu").hide();
		$(".hotelinfo").hide();
		$(".today_reserve").hide();
		$(".new_reserver").show();
		$(".hava_reserver").hide();
		$(".history_record").hide();
		
		neworder();
	});
	$("#lfhava_reserver").click(function(){
		
		$(".rgmenu").hide();
		$(".hotelinfo").hide();
		$(".today_reserve").hide();
		$(".new_reserver").hide();
		$(".hava_reserver").show();
		$(".history_record").hide();
		
		allreserve();
	});
	$("#lfhistory_record").click(function(){
		$(".rgmenu").hide();
		$(".hotelinfo").hide();
		$(".today_reserve").hide();
		$(".new_reserver").hide();
		$(".hava_reserver").hide();
		$(".history_record").show();
	});
	
	
	$("#findrooms").click(function(){
		findrooms();
	});
	
	$("#bt_todayorder").click(function(){
		tudayorder();
	});
	
	$("#reserveQuery").click(function(){
		allreserve();
	});
	
	
	$("#bt_configorder").click(function(){
		configorder();
	});
	
	function findrooms(){
		var ajax ;
		var html = "";
		var C_room = $("input[name='roomclass']:checked").val();
		var room_no = $("#roomser").val();
		if(window.XMLHttpRequest){
		     ajax = new XMLHttpRequest();
		  }
	    else{
		    ajax = ActiveXObject("Microsoft.XMLHTTP");
		  }
		ajax.open("get","/Myhtml/after?cmd=find&roomclass="+C_room+"&roomno="+room_no,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var jsonstr = ajax.responseText;
				var jsons=eval(jsonstr);
				for ( var i = 0; i < jsons.length; i++) {
					if(jsons[i].rO_EMPRY == "无"){
					html += "<li><img src='"+jsons[i].rO_IMG+
					"' width='150px' height='80px' class='gray' /><span>"+jsons[i].rO_NO+
					"</span><div class='roomprice' style='font-size: 16px; color: firebrick;'>价格:<span>"+jsons[i].rO_PRICE+"</span></div></li>";
					}else{
						html += "<li><img src='"+jsons[i].rO_IMG+
						"' width='150px' height='80px' class='gray' /><span>"+jsons[i].rO_NO+
						"</span><div class='roomprice' style='font-size: 16px; color: gray;'>价格:<span>"+jsons[i].rO_PRICE+"</span></div></li>";
					}
						
				}
			$("#roomsinfo").html(html);
			}
			
		};
		ajax.send();
	}
	
	function allreserve(){
		var ajax ;
		var html = "";
		var name = $("#reusername").val();
		var tel = $("#retel").val();
		if(window.XMLHttpRequest){
		     ajax = new XMLHttpRequest();
		  }
	    else{
		    ajax = ActiveXObject("Microsoft.XMLHTTP");
		  }
		ajax.open("get","/Myhtml/after?cmd=allreserve&name="+name+"&tel="+tel,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var jsonstr = ajax.responseText;
				var jsons=eval(jsonstr);
				for ( var i = 0; i < jsons.length; i++) {
					html += "<tr><td>"+jsons[i].rE_CROOM+"</td><td>"+jsons[i].rE_ROOMNO+"</td>"+jsons[i].rE_CROOM+"</td>"+
					"<td>"+jsons[i].rE_DATE+"</td><td>"+jsons[i].rE_DAY+"</td><td>"+jsons[i].rE_USER+
					"</td><td>"+jsons[i].rE_SAX+"</td><td>"+jsons[i].rE_USERID+"</td><td>"+jsons[i].rE_USERTEL+
					"</td><td>"+jsons[i].rE_PRICE+	"</td><td>"+jsons[i].rE_PAYMONEY+"</td></tr>";
				}
				
			$("#allorder").html(html);
			}
			
		};
		ajax.send();
	}
	
	function neworder(){
		var ajax ;
		var html = "";
		if(window.XMLHttpRequest){
		     ajax = new XMLHttpRequest();
		  }
	    else{
		    ajax = ActiveXObject("Microsoft.XMLHTTP");
		  }
		ajax.open("get","/Myhtml/after?cmd=newreserve",true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var jsonstr = ajax.responseText;
				var jsons=eval(jsonstr);
				for ( var i = 0; i < jsons.length; i++) {
					html += "<tr><td><input type='checkbox'/></td><td>"+jsons[i].rE_CROOM+"</td><td><select onfocus=select('"+jsons[i].rE_CROOM+"')><option>选择房间</option></select></td>"+
					"<td>"+jsons[i].rE_DATE+"</td><td>"+jsons[i].rE_DAY+"</td><td>"+jsons[i].rE_USER+
					"</td><td>"+jsons[i].rE_SAX+"</td><td>"+jsons[i].rE_USERID+"</td><td>"+jsons[i].rE_USERTEL+
					"</td><td>"+jsons[i].rE_PRICE+	"</td><td>"+jsons[i].rE_PAYMONEY+"</td></tr>";
				}
				
			$("#newreserveinfo").html(html);
			}
			
		};
		ajax.send();
	}
	
	function tudayorder(){
		var ajax ;
		var html = "";
		var username = $("#todayuser").val();
		var roomno = $("#todayroom").val();
		if(window.XMLHttpRequest){
		     ajax = new XMLHttpRequest();
		  }
	    else{
		    ajax = ActiveXObject("Microsoft.XMLHTTP");
		  }
		ajax.open("get","/Myhtml/after?cmd=today_order&username="+username+"&roomno="+roomno,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status == 200){
				var jsonstr = ajax.responseText;
				var jsons=eval(jsonstr);
				for ( var i = 0; i < jsons.length; i++) {
					html += "<tr onclick=outroom()><td>"+jsons[i].o_ROOMNO+"</td><td>"+jsons[i].o_RCLASS+"</td>"+
					"<td>"+jsons[i].o_INDATE+"</td><td>"+jsons[i].o_USERNAME+"</td>"+
					"<td>"+jsons[i].o_USAX+"</td><td>"+jsons[i].o_IDNO+"</td><td>"+
					jsons[i].o_USERTEL+"</td><td>"+jsons[i].o_OUTDATE+"</td><td>"+jsons[i].o_PRICE+
					"</td><td>"+jsons[i].o_PAYMONEY+"</td></tr>";
				}
			$("#todaytable").html(html);
			}
			
		};
		ajax.send();
	}
	


	
});

function select(croom){
	var ajax ;
	var html = "";
	if(window.XMLHttpRequest){
	     ajax = new XMLHttpRequest();
	  }else{
	    ajax = ActiveXObject("Microsoft.XMLHTTP");
	  }
	ajax.open("get","/Myhtml/after?cmd=getrooms&crooms="+croom,true);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var jsonstr = ajax.responseText;
			var jsons=eval(jsonstr);
			for ( var i = 0; i < jsons.length; i++) {
				html +="<option value='"+jsons[i].rO_NO+"'>"+jsons[i].rO_NO+"</option>";
				
			}
			$("").append(html);
		}
		
	};
	ajax.send();
}
function formatDate(now) {
	var year=now.getYear();
	var month=now.getMonth()+1;
	var date=now.getDate();
	return "20"+year+"-"+month+"-"+date;
	} 
function configorder(){
	
}
function outroom(){
	alert("退房成功");  
}
