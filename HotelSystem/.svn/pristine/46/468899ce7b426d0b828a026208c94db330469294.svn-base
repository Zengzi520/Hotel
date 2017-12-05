package com.system.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.system.dao.Order_dao;
import com.system.dao.Reserve_dao;
import com.system.dao.Rooms_dao;
import com.system.entity.NewReserve;
import com.system.entity.Order;
import com.system.entity.OrderQuery;
import com.system.entity.ReserveQuery;
import com.system.entity.RoomQuery;
import com.system.entity.Room_Class;
import com.system.entity.Rooms;
import com.system.entity.SuperQuery;
import com.system.utils.StringUtils;


@WebServlet("/after")
public class AfterServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public Rooms_dao dao = new Rooms_dao();
	public Order_dao dao1 = new Order_dao();
	public Reserve_dao dao2 = new Reserve_dao();
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		String cmd = req.getParameter("cmd");
		if ("hotelinfo".equals(cmd)) {
			hotelinfo(req,resp);
		}
		if("toAfter".equals(cmd)){
			toAfter(req, resp);
		}
		if ("find".equals(cmd)) {
			findhotel(req, resp);
		}if ("today_order".equals(cmd)) {
			today_order(req, resp);
		}if ("newreserve".equals(cmd)) {
			newreserve(req, resp);
		}if ("getrooms".equals(cmd)) {
			getrooms(req, resp);
		}if ("allreserve".equals(cmd)) {
			allreserve(req, resp);
		}
	}
	protected void allreserve(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException{
		String name = req.getParameter("name");
		String strtel = req.getParameter("tel");
		PrintWriter out = resp.getWriter();
		BigDecimal tel = null;
		if (StringUtils.hasLength(strtel)) {
			tel = new BigDecimal(strtel);
		}
		SuperQuery sQuery = new ReserveQuery(name, tel);
		List<NewReserve> list = dao2.getallreserve(sQuery);
		Object json = JSON.toJSON(list);
		out.print(json);	
	}
	
	protected void getrooms(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException{
		PrintWriter out = resp.getWriter();
		
		String croom = req.getParameter("crooms");
		Room_Class roomid = dao.getroomid(croom);
		List<Rooms> list = dao.getempryroom(roomid.getRC_ID());
		Object c = JSON.toJSON(list);
		out.print(c);
		
	}
	protected void newreserve(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		List<NewReserve> list = dao2.getNewReserve();
		Object json = JSON.toJSON(list);
		out.print(json);
	}
	
	
	protected void today_order(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		String name = req.getParameter("username");
		String roomno = req.getParameter("roomno");
		Date date = new Date(new java.util.Date().getTime());
		SuperQuery sq = new OrderQuery(name,roomno,date);
		List<Order> list = dao1.querytodayorder(sq);
		Object json = JSON.toJSON(list);
		out.print(json);
	}
	protected void hotelinfo(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		SuperQuery srq = new RoomQuery();
		List<Rooms> list = dao.getAllrooms(srq);
		PrintWriter out = resp.getWriter();
		Object json = JSON.toJSON(list);
		out.print(json);
		
	}
	protected void findhotel(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String C_room = req.getParameter("roomclass");
		String roomno = req.getParameter("roomno");
		SuperQuery srq = new RoomQuery(C_room,roomno);
		List<Rooms> list = dao.getAllrooms(srq);
		PrintWriter out = resp.getWriter();
		Object json = JSON.toJSON(list);
		out.print(json);
		
	}
	protected void toAfter(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		resp.sendRedirect("/Myhtml/After_hotel.jsp");
	}

}
