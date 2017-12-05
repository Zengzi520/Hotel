package com.system.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import com.system.dao.RegisterDao;
import com.system.utils.StringUtils;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private RegisterDao dao = new RegisterDao();

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html;charset=UTF-8");

		//1.获取请求参数
			//文本输入：用户名
		String user_name = req.getParameter("user_name");
			//文本输入：手机号
		String mobile = req.getParameter("mobile");
			//文本输入：密码 
		String password = req.getParameter("password");
			//文本输入：密码  
		String repassword = req.getParameter("repassword");
			//文本输入：验证码
		String yan = req.getParameter("yan");

		// ----判断用户名不为空
		if (!StringUtils.hasLength(user_name)) {
			req.setAttribute("errMsg_name", "用户名不能为空");
			req.getRequestDispatcher("/register.jsp").forward(req, resp);
			return;
		}
		req.setAttribute("user_name", user_name);
		// ----判断手机号不为空
		if (!StringUtils.hasLength(mobile)) {
			req.setAttribute("errMsg_phone", "手机号不能为空");
			req.getRequestDispatcher("/register.jsp").forward(req, resp);
			return;
		}
		req.setAttribute("mobile", mobile);
		// ----判断密码不为空
		if (!StringUtils.hasLength(password)) {
			req.setAttribute("errMsg_pass", "密码不能为空");
			req.getRequestDispatcher("/register.jsp").forward(req, resp);
			return;
		}
		// ----判断密码不为空
		if (!StringUtils.hasLength(repassword)) {
			req.setAttribute("errMsg_repass", "密码不能为空");
			req.getRequestDispatcher("/register.jsp").forward(req, resp);
			return;
		}
		// ----判断验证码不为空
		if (!StringUtils.hasLength(yan)) {
			req.setAttribute("errMsg_codenum", "请输入验证码");
			req.getRequestDispatcher("/register.jsp").forward(req, resp);
			return;
			// out.print("×验证码不能为空");
		}
		//获取接口验证码
		Object object = req.getSession().getAttribute("YAN_IN_SESSION");	
		String yanz = null;	
		if(object!=null){
			yanz = object.toString();
		}
		
		System.out.println("session手机短信~~~" + yanz);	
		/*--------ajax传输----结束----*/  // && (yan.equals(yanz))
		if (StringUtils.hasLength(user_name) && StringUtils.hasLength(mobile)
				&& StringUtils.hasLength(repassword)&& (yan.equals(yanz))) {
			System.out.println("系统检查注册信息----------");
			if(dao.checkPhone(mobile)){//验证手机号合法
				if(dao.checkName(user_name)){//验证用户名合法
					if(dao.add_User(user_name, mobile, repassword)){
						//条件成立【用户名唯一 ，手机号码唯一】，注册成功，页面跳转
						req.setAttribute("errorMsg", " ");
						JOptionPane.showMessageDialog(null, "注册成功！");
						req.getRequestDispatcher("/index.jsp").forward(req, resp);	
					}else{
						//---注册失败--跳转404---
					}
					//条件不成立，返回注册界面，提示错误信息
				}else{
				//	out.print("用户名已存在");
					req.setAttribute("errMsg_name", "用户名已存在");
					req.getRequestDispatcher("/register.jsp").forward(req, resp);
					return;
				}
			}else{
			//	out.print("手机号已被注册");
				req.setAttribute("errMsg_phone", "手机号已被注册");
				req.getRequestDispatcher("/register.jsp").forward(req, resp);
				return;
			}
		}else{
			req.setAttribute("errMsg_codenum", "验证码不对，请重新获取");
			req.getRequestDispatcher("/register.jsp").forward(req, resp);
		}
		
	}
}
