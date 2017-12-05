
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var code = ""; //验证码
var codeLength = 6;//验证码长度
	function get_mobile_code(){
        $.post('sms.jsp', {mobile:jQuery.trim($('#mobile').val())}, function(msg) {
            /* alert(jQuery.trim(unescape(msg)));*//*弹窗*/
			if(msg=='提交成功'){
				RemainTime();
			}
        });
        curCount = count;
	var dealType; //验证方式
	var uid = $("#uid").val();//用户uid
	if ($("#mobile").attr("checked") == true) {
		dealType = "mobile";
	} else {
		dealType = "email";
	}

	//当为空时，跳出
	/*if(msg=='手机号码不能为空'){
	 $("#mobile").css('border-color','red');
		return;
	}*/
	//设置button效果，开始计时
	$("#zphone").attr("disabled", "true");
	$("#zphone").val(+curCount + "秒再获取");
	InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        
	};
	var iTime = 59;
	var Account;
	function RemainTime(){
		document.getElementById('zphone').disabled = true;
		var iSecond,sSecond="",sTime="";
		if (iTime >= 0){
			iSecond = parseInt(iTime%60);
			iMinute = parseInt(iTime/60);
			if (iSecond >= 0){
				if(iMinute>0){
					sSecond = iMinute + "分" + iSecond + "秒";
				}else{
					sSecond = iSecond + "秒";
				}
			}
			sTime=sSecond;
			if(iTime==0){
				clearTimeout(Account);
				sTime='获取手机验证码';
				iTime = 59;
				document.getElementById('zphone').disabled = false;
			}else{
				Account = setTimeout("RemainTime()",1000);
				iTime=iTime-1;
			}
		}else{
			sTime='没有倒计时';
		}
		document.getElementById('zphone').value = sTime;
	}
	//timer处理函数
function SetRemainTime() {
	if (curCount == 0) {
		window.clearInterval(InterValObj);//停止计时器
		$("#zphone").removeAttr("disabled");//启用按钮
		$("#zphone").val("重新发送验证码");
		code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
	} else {
		curCount--;
		$("#zphone").val(+curCount + "秒再获取");
	}

}
 





