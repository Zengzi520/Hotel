(function(){
    var hintText=
           {
            user_name:{hint:"请输入3-12个字符的用户名（包括字母/数字/下划线）",right:"√用户名格式正确",wrong:"×用户名格式有误"},
            name:{hint:"请输入3-12姓名",right:"√姓名输入正确",wrong:"×姓名输入有误"},
            address:{hint:"请输入正确地址",right:"√地址输入正确",wrong:"×地址输入有误"},
            mobile:{hint:"请输入11位电话号码",right:"√电话号码输入正确",wrong:"×手机号输入有误"},
            id_card:{hint:"请输入18位身份证号码",right:"√身份证号码输入正确",wrong:"×身份证号码输入有误"},
            password:{hint:"请输入6位以上密码",right:"√密码格式正确",wrong:"×密码格式不正确"},
            repassword:{hint:"请再次输入密码",right:"√再次输入密码正确",wrong:"×两次输入的密码不一致"}};
    var regEvent=function(node, event, func){
        if (node.addEventListener)
            node.addEventListener(event, func);
        else if (node.attachEvent)
            node.attachEvent("on" + event, func);
        else
            node["on" + event] = func;
    };
    function regValue(id,i){
        var flag=false,
        input=document.getElementById(id),
        value=input.value;
        switch (id){
            case "user_name":
            case "login_user_name":
            case "info_user_name":
                flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="user_name";
                break;
            case "name":
            case "send_to_name":
            case "send_from_name":
                flag=/^[a-zA-Z ]{1,20}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="name";
                break;
            case "send_from_address":
            case "send_to_address":
                flag=/^\S{6,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="address";
                break;
            case "password":
            case "login_password":
            case "info_password":
                flag=/^\S{6,16}$/.test(value);
                id="password";
                break;
            case "repassword":
                flag=document.getElementById("password").value==value && value !="" && value !=null && (/^\S{6,16}$/.test(value));
                break;
            case "info_repassword":
                flag=document.getElementById("info_password").value==value && value !="" && value !=null && (/^\S{6,16}$/.test(value));
                id="repassword";
                break;
            case "user_email":
            case "forget_user_email":
            case "info_user_email":
                flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
                id="user_email";
                break;
            case "mobile":
            case "login_mobile":
            case "info_mobile":
            case "send_to_mobile":
            case "send_from_mobile":
                flag=/^((\(\d{2,3}\))|(\d{3}\-))?1[3,8,5]{1}\d{9}$/.test(value);
                id="mobile";
                break;
            case "id_card":
                flag=/^\S{18}$/.test(value);
                break;
            case "weight":
                flag=/^\d{1,4}$/.test(value);
                break;
            default:
                break;
        }
        if(flag) {
            index=0;
            input.className="right input";
            hint[i].className="hint hint_right";
            hint[i].innerHTML=hintText[id].right;
        }else{
            input.className="wrong input";
            hint[i].className="hint hint_wrong";
            hint[i].innerHTML=hintText[id].wrong;
            index=1;
        }
    };
    var inputs=document.getElementsByClassName("input"),
    id,
    hint=document.getElementsByClassName("hint"),
    index=0;
    for(var j=0;j<inputs.length;j++){
        (function(i){
            regEvent(inputs[i],"focus",function(){
                hint[i].style.visibility="visible";
                id=inputs[i].id;
            });
            regEvent(inputs[i],"blur",function(){
               regValue(id,i);
            });
        })(j);
    }
    regEvent(document.getElementById("submit"),"click",function(e){
        if(index!==0){
            /*alert(index);*/
            e.preventDefault();
            alert("您的注册信息有误，请检查并重新输入！");
            return false;
        }  
    });  
    regEvent(document.getElementById("button"),"click",function(e){
        if(index!==0){
           /* e.preventDefault();*/
            alert("您的登录信息有误，请检查并重新输入！");
            return false;
            
        }  
    });  
})();


