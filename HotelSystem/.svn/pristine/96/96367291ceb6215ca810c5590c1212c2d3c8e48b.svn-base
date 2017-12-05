package com.system.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import com.system.dao.ForgetDao;
import com.system.utils.StringUtils;

@WebServlet("/forget")
public class ForgetServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private ForgetDao dao = new ForgetDao();

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html;charset=UTF-8");
		
		String mobile = req.getParameter("mobile");/*手机号*/
		String password = req.getParameter("password");/*密码*/
		String repassword = req.getParameter("repassword");/*密码*/
		String yan = req.getParameter("yan");/*用户输入的验证码*/
		
		// ----判断手机号不为空
		if (!StringUtils.hasLength(mobile)) {
			req.setAttribute("errMsg_phone", "手机号不能为空");
			req.getRequestDispatcher("/forget.jsp").forward(req, resp);
			return;
		}
		req.setAttribute("mobile", mobile);
		// ----判断密码不为空
		if (!StringUtils.hasLength(password)) {
			req.setAttribute("errMsg_pass", "密码不能为空");
			req.getRequestDispatcher("/forget.jsp").forward(req, resp);
			return;
		}
		// ----判断密码不为空
		if (!StringUtils.hasLength(repassword)) {
			req.setAttribute("errMsg_repass", "密码不能为空");
			req.getRequestDispatcher("/forget.jsp").forward(req, resp);
			return;
		}
		// ----判断验证码不为空
		if (!StringUtils.hasLength(yan)) {
			req.setAttribute("errMsg_codenum", "请输入验证码");
			req.getRequestDispatcher("/forget.jsp").forward(req, resp);
			return;
		}
				
		String yanz = null;/* 系统生成验证码 */
		Object object = req.getSession().getAttribute("YAN_IN_SESSION");
		if(object!=null){
			yanz = object.toString();
		}			
		if (StringUtils.hasLength(mobile)&& StringUtils.hasLength(repassword)&& (yan.equals(yanz))) {
			System.out.println("系统检查修改信息----------");
			if(dao.checkPhone(mobile)){//验证手机号合法
				//执行修改----
				System.out.println("准备修改---");
				if(dao.changeUser(mobile, password)){
					//----修改成功跳转
					System.out.println("修改成功！");
					JOptionPane.showMessageDialog(null, "修改密码成功，请重新登录！");
					req.setAttribute("errorMsg", " ");
					req.getRequestDispatcher("/index.jsp").forward(req, resp); 
				}else{
					//---修改失败--跳转404---
					System.out.println("修改失败！");
				}			
			}					
		} else {
			req.setAttribute("errMsg_codenum", "验证码不对，请重新获取");
			req.getRequestDispatcher("/forget.jsp").forward(req, resp);
		}
	}
}
