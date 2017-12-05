
function creatAjax(){
	var ajax;
	try {
		ajax= new XMLHttpRequest();
	} catch (e) {
		// TODO: handle exception
		
		ajax=new ActiveXObject();
	}
	
	return ajax;
}


window.onload = function(){
	
	  var ajax= creatAjax();
	  
	  ajax.open("get", "/HotelSystem/loginIndex");
	  
	  ajax.onreadystatechange=function(){
		 // console.debug(ajax.readyState);
		  
		  if(ajax.readyState==4 && ajax.status==200){
			  
			  var jsonStr = ajax.responseText;	
			  var jsonObj=eval("("+jsonStr+")");
			  var html="";			  
			  html+=jsonObj.U_USERNAME;

			  document.getElementById("indexname").innerHTML=html;			  
		  }
	  };
	  
	  ajax.send();
	  
};