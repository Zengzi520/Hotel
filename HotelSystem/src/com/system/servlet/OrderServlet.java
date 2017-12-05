package com.system.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.system.dao.OrderDao;
import com.system.entity.Order;
import com.system.utils.StringToDate;
import com.system.utils.StringUtils;

@WebServlet("/order")
public class OrderServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");


		// 入住人姓名
		String cusName = req.getParameter("cusName"); //用户名*********
		String cusNameB = req.getParameter("cusNameB");
		// 性别
		String sex = req.getParameter("sex");//性别*********
		// 身份证号
		String IDNum = req.getParameter("IDNum");//身份证号*********
		// 手机号码
		String telNum = req.getParameter("telNum");//手机号*********
		// 入住时间
		String Bdate = req.getParameter("date1");//入住时间*********
		Date date_in = null;
		try {
			date_in = new SimpleDateFormat("yyyy/MM/dd").parse(Bdate);
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		// 退房时间
		String Adate = req.getParameter("date2");
		
		
		long time1 = 0L; // Sutil有长度，赋值
		if (StringUtils.hasLength(Bdate)) {
			time1 = StringToDate.toSqlTimestamp(Bdate).getTime();
		}
		long time2 = 0L;
		// Sutil有长度，赋值
		if (StringUtils.hasLength(Adate)) {
			time2 = StringToDate.toSqlTimestamp(Adate).getTime();
		}
		long i = (time2 - time1) / 86400000; //时间间隔*********
		BigDecimal dayin = new BigDecimal(i);
		System.out.println(Bdate + "," + Adate + "," + cusName + "," + sex
				+ "," + IDNum + "," + telNum);
		
		String singlePrice = req.getParameter("single_Price"); //房间单价*********
		String allPrice = req.getParameter("all_Price"); //房间总价*********
		
		BigDecimal sprice = new BigDecimal(Long.valueOf(singlePrice));
		BigDecimal aprice = new BigDecimal(Long.valueOf("568"));
		
		
		// 将String类型转换为Date类型
		DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date indate = null;
		Date outdate = null;
		try {
			indate = format.parse(Bdate);
			outdate = format.parse(Adate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// 验证入住人姓名不能为空
		if (!StringUtils.hasLength(cusName) || !StringUtils.hasLength(sex)) {
			req.setAttribute("errorMsg3", "亲，入住人姓名或性别不能为空");
			req.getRequestDispatcher("/order.jsp").forward(req, resp);
			return;
		}

		// 验证手机号码是否正确
		String regex = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
		if (!StringUtils.hasLength(telNum)) {
			req.setAttribute("errorMsg1", "亲，请输入手机号码");
			req.getRequestDispatcher("/order.jsp").forward(req, resp);
			return;
		}
		if (!telNum.matches(regex)) {
			req.setAttribute("errorMsg1", "亲，请输入正确的手机号码");
			req.getRequestDispatcher("/order.jsp").forward(req, resp);
			return;
		}
		BigDecimal telp = new BigDecimal(Long.valueOf(telNum));

		// 验证身份证号是否正确
		String idnum = "^(\\d{6})(19|20)(\\d{2})(1[0-2]|0[1-9])(0[1-9]|[1-2][0-9]|3[0-1])"
				+ "(\\d{3})(\\d|X|x)?$";
		if (!IDNum.matches(idnum)) {
			req.setAttribute("errorMsg2", "亲，您输入的身份证号码格式错误");
			req.getRequestDispatcher("/order.jsp").forward(req, resp);
			return;
		}
		BigDecimal UserId = new BigDecimal(Long.valueOf(IDNum));
		
		String randomCode = req.getParameter("randomCode");

		String sessionRandomCode = (String) req.getSession().getAttribute(
				"RANDOMCODE_IN_SESSION");

		if (!StringUtils.hasLength(randomCode)
				|| !StringUtils.hasLength(sessionRandomCode)) {
			req.setAttribute("errorMsg", "亲，验证码不能为空请重新输入");
			req.getRequestDispatcher("/order.jsp").forward(req, resp);
			return;
		}
		if (!randomCode.equals(sessionRandomCode)) {
			req.setAttribute("errorMsg", "亲，验证码有误请重新输入");
			req.getRequestDispatcher("/order.jsp").forward(req, resp);
			return;
		}

		// 将数据插入数据库。*********************
		OrderDao dao = new OrderDao();
		boolean flag = dao.addOrder(date_in,dayin,cusName,sex,UserId,telp,sprice,aprice);
		// 插入成功，跳转到支付界面
		if (flag) {
			// 设置支付接口所需参数：
			// 获取订单号：时间搓
			long orderTime = System.currentTimeMillis();
			req.getRequestDispatcher("/payServlet?p2_Order="+orderTime + "&&p3_Amt=0.01&&pd_FrpId=CCB-NET-B2C").forward(req, resp);
			return;
		} else {// 失败则提示出现错误，返回订单界面
			req.getRequestDispatcher("/error.jsp").forward(req, resp);
		}
	}

}
