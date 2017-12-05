package com.system.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/indexsearch")
public class IndexSearchServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp)
    		throws ServletException, IOException {
    	// TODO Auto-generated method stub
    	String[] str={"酒店类型","酒店房间","房间","预订","折扣","活动","地图"};
    	String search = req.getParameter("indexsearch");
    	for(int i=0; i<str.length;i++){
    		if(search.contains(str[i])){    		
    			resp.sendRedirect("/HotelSystem/test?city=xiamen");
    			
    		}	
    	}
    }
}
