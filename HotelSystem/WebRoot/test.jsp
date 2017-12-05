<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'test.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
        <meta charset="utf-8" />
    <title>Bootstrap 导航下拉实例</title>
    <link href="/try/bootstrap/twitter-bootstrap-v2/docs/assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
    
    
    
  </head>
  
  <body>
    
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <ul class="nav">
                    <a class="brand" href="#">runoob</a>
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li class="dropdown" id="accountmenu">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tutorials<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">MySQL</a></li>
                            <li class="divider"></li>
                            <li><a href="#">JavaScript</a></li>
							<li><a href="#">HTML5</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid">
     <h1>下拉菜单实例</h1>
    </div>
	<script type="text/javascript" src="/try/bootstrap/twitter-bootstrap-v2/docs/assets/js/jquery.js"></script>
	<script type="text/javascript" src="/try/bootstrap/twitter-bootstrap-v2/docs/assets/js/bootstrap-dropdown.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.dropdown-toggle').dropdown();
        });
   </script>
	
  </body>
</html>
