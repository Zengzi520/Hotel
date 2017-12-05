package com.system.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebFilter(value= {"/order.jsp","/test.jsp"})
public class CheckLoginFilter implements Filter{

	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		// TODO Auto-generated method stub
		
		HttpServletRequest req =(HttpServletRequest)request;
		HttpServletResponse resp =(HttpServletResponse)response;
		
		Object obj = req.getSession().getAttribute("Index_IN_SESSION");
		if(obj==null){
			req.setAttribute("errorMsg", "亲，在这里登录");
			req.getRequestDispatcher("/index.jsp").forward(req, resp); 
			return;
		}
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}
