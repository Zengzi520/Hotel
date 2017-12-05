package com.system.servlet;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.system.dao.LoginIndexDao;
import com.system.utils.StringUtils;
@WebServlet("/loginIndex")
public class LoginIndexServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private LoginIndexDao dao =new LoginIndexDao();
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp)
    		throws ServletException, IOException {
    	// TODO Auto-generated method stub
    	req.setCharacterEncoding("UTF-8");
    	resp.setContentType("text/html; charset=UTF-8");
    	String randomCode = req.getParameter("randomCode");
    	String user_tel = req.getParameter("user_tel");
    	String password = req.getParameter("password"); 
    	
    	
    	String sessionRandomCode = (String)req.getSession().getAttribute("RANDOMCODE_IN_SESSION");
    	
    	if(!StringUtils.hasLength(user_tel)||!StringUtils.hasLength(user_tel)){
    		
    		req.setAttribute("errorMsg", "亲,用户名或密码不能为空");
    		
    		req.getRequestDispatcher("/index.jsp").forward(req, resp);  

    		return;
    	}else if(!StringUtils.hasLength(randomCode)||!StringUtils.hasLength(sessionRandomCode)){
    		
    		req.setAttribute("errorMsg", "亲,验证码不能为空或请求以过时"); 
    		req.getRequestDispatcher("/index.jsp").forward(req, resp);

    		return;
    	}else if(!randomCode.equals(sessionRandomCode)){
    		req.setAttribute("errorMsg", "亲,验证码有误,请重新输入");
    		req.getRequestDispatcher("/index.jsp").forward(req, resp);
    		
    		return;
    	}else {
    		
    		ResultSet set =dao.queryUser(user_tel, password);   
    		
    		if(set==null){
    			
        		req.setAttribute("errorMsg", "亲，用户名或密码错误");
    			req.getRequestDispatcher("/index.jsp").forward(req, resp);    			
    			System.out.println("登录失败");
    			return;
        	}else{
        	     
/*        		PrintWriter out = resp.getWriter();
        		String sb = com.alibaba.fastjson.JSON.toJSONString(set);
        		System.out.println(sb);
        		out.print(sb);*/
            	try {
            		
            		System.out.println(set.getString("U_USERNAME")+"----");
            		
            		System.out.println("登录成功");
            		
            		while(set.next()){
            			
            			System.out.println(set);
            			System.out.println(set.getString("U_USERNAME"));
            			req.getSession().setAttribute("Index_IN_SESSION",set.getString("U_USERNAME"));
            			
            		}           		
					resp.sendRedirect("/HotelSystem/index.jsp");
					
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}       		
        	}
    	}
	
    }
  
}
