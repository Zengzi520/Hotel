package com.system.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.system.entity.Room_Class;


@WebServlet("/goorder")
public class GotoOrderServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String price = req.getParameter("CRoom");
		req.setAttribute("prices", price);
		req.getRequestDispatcher("/order.jsp").forward(req, resp);
		
	}

}
