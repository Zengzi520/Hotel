package com.system.servlet;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.system.dao.hotel_dao;
import com.system.entity.Hotel;
import com.system.entity.Room_Class;



@WebServlet("/test")
public class HotelServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		hotel_dao dao = new hotel_dao();
		
		String city = req.getParameter("city");
		int i=0;
		if(city.equals("beijing")){
			i=1;
			req.setAttribute("City", "beijing");
			
		}else if(city.equals("shanghai")){
			i=2;
			req.setAttribute("City", "shanghai");
			
		}else if(city.equals("nanjing")){
			i=3;
			req.setAttribute("City", "nanjing");
			
		}else if(city.equals("shenzhen")){
			i=4;
			req.setAttribute("City", "shenzhen");
			
		}else if(city.equals("guangzhou")){
			i=5;
			req.setAttribute("City", "guangzhou");
			
		}else if(city.equals("xianggang")){
			i=6;
			req.setAttribute("City", "xianggang");
			
		}else if(city.equals("xiamen")){
			i=7;
			req.setAttribute("City", "xiamen");
			
		}else if(city.equals("hangzhou")){
			i=8;
			req.setAttribute("City", "hangzhou");
			
		}else if(city.equals("chengdu")){
			i=9;
			req.setAttribute("City", "chengdu");
		}else if(city.equals("haerbing")){
			i=10;
			req.setAttribute("City", "haerbing");
		}
		
		
		BigDecimal id = new BigDecimal(i);
		Hotel hotel = dao.getHotel(id);
		List<Room_Class> list = dao.getroomclass();
		req.setAttribute("hotel", hotel);
		req.setAttribute("list", list);
		req.getRequestDispatcher("/hotel.jsp").forward(req, resp);
	}

}
