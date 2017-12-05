/**
 * 订单
 * 
 */

function changeCode() {
	document.getElementById("randomCodeImg").src = "/HotelSystem/randomCode?"
			+ new Date().getTime();
}

var i = 0;
function addCustomer() {

	i = i + 1;
	if (i < 2) {

		var input1 = document.createElement('input');
		input1.setAttribute('type', 'text');
		input1.setAttribute('class', 'one');
		input1.setAttribute('name', 'cusNameB');
		
		var btn = document.getElementById("addInput");
		btn.insertBefore(input1, null);
		

	} else {
		alert("每间房最多添加两位入住2人");
	}
}



function getSum2() {
 
	var obj = document.getElementById("select_data_in");
	var total = document.getElementById("totalPrice").value;
	for (i = 0; i < obj.length; i++) {// 下拉框的长度就是它的选项数.
		if (obj[i].selected == true) {
			var tdate =Number(obj[i].value);
			total=284*tdate*2;
		}
	}
	document.getElementById("totalPrice").innerHTML = total;
	document.getElementById("totalPrice1").innerHTML = total;

}

function getSum1() {
	var obj = document.getElementById("select_data_in");
	var total = document.getElementById("totalPrice").value;
	for (i = 0; i < obj.length; i++) {// 下拉框的长度就是它的选项数.
		if (obj[i].selected == true) {
			var tdate =Number(obj[i].value);
			total=284*tdate;
		}
	}
	document.getElementById("totalPrice").innerHTML = total;
	document.getElementById("totalPrice1").innerHTML = total;
}

/**
 * 更新时间
 * 把时间加入到到期时间标签内
 */
function Complay_Date(){
	var obj = document.getElementById("select_data_in");//获取选择框
	var date1 = document.getElementById("date1").value;//获取入住时间文本
	if(date1.length == 0){
		var date1 = Date.parse(new Date());
	}else{
		date1 = stringToTime(date1);//秒数
	}
	for (i = 0; i < obj.length; i++) {// 下拉框的长度就是它的选项数.
		if (obj[i].selected == true) {
			var tdate =Number(obj[i].value);// 获取当前选择项的值.  Number(a)
			var date2 =new Date( date1 + tdate*24*60*60*1000);
			
			var y = date2.getFullYear();
			var m = date2.getMonth()+1;
			var d = date2.getDate();			
			var datend = y+"-"+m+"-"+d;					
			//console.debug(dd);
			total=284*tdate;
			document.getElementById("date2").value = datend;
			document.getElementById("totalPrice").innerHTML = total;
			document.getElementById("totalPrice1").innerHTML = total;
		};
	};

}




/**
 * 字符串转成Time所需方法
 */
function stringToTime(string) {
	var f = string.split(' ', 2);
	var d = (f[0] ? f[0] : '').split('-', 3);
	var t = (f[1] ? f[1] : '').split(':', 3);
	return (new Date(parseInt(d[0], 10) || null, (parseInt(d[1], 10) || 1) - 1,
			parseInt(d[2], 10) || null, parseInt(t[0], 10) || null, parseInt(
					t[1], 10)
					|| null, parseInt(t[2], 10) || null)).getTime();
};

