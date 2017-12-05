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


@WebServlet("/login")
public class LoginServlet extends HttpServlet{

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

	    String login_mobile = req.getParameter("login_mobile");
	    String login_password = req.getParameter("login_password");
	    
	    String result2 = req.getParameter("result2");
	    
	    //errMsg_Login_user
	    if(!StringUtils.hasLength(login_mobile)){
	    	req.setAttribute("errMsg_Login_user", "手机号不能为空~");
	    	req.getRequestDispatcher("/register.jsp").forward(req, resp);
	    	return;
	    }
	    if(!StringUtils.hasLength(login_password)){
	    	req.setAttribute("errMsg_Login_user", "密码不能为空~");
	    	req.getRequestDispatcher("/register.jsp").forward(req, resp);
	    	return;
	    }
	    if(StringUtils.hasLength(login_mobile)&&StringUtils.hasLength(login_password)&&("true".equals(result2))){
			
	    	ResultSet set = dao.queryUser(login_mobile, login_password);
			if (set == null) {
				req.setAttribute("errMsg_Login_user", "亲，用户名或密码错误");
				req.getRequestDispatcher("/register.jsp").forward(req, resp);
				return;
			}else{
				try {
					while (set.next()) {
						req.getSession().setAttribute("Index_IN_SESSION",
								set.getString("U_USERNAME"));
					}
					resp.sendRedirect("/HotelSystem/index.jsp");
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}   	
	    }
	    else{
	    	resp.sendRedirect("/HotelSystem/error.jsp");
	    }
	
	    
	  
	}
}











