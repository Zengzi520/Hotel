/*alert(11111);*/


function checkCode() {
	var yan = document.getElementById("yan").value;
	
	//1.创建Ajax对象
	var ajax = createAjax();
	
	ajax.open("get","/HotelSystem/register?yan="+yan);
	
	
	//获取请求状态  异步  回调函数
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200){//接收响应数据
			var text =  ajax.responseText;
			
			document.getElementById("yanzhengma").innerHTML = text;
		}
	};
	
	//3.发送请求
	ajax.send();
}
//创建Ajax对象
function createAjax() {
	var ajax;
	try {
		ajax = new XMLHttpRequest();	
	} catch (e) {
		// : handle exception
		ajax = new ActiveXObject();	
	}
	return ajax;
}


