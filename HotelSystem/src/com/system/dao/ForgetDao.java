package com.system.dao;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.system.utils.OwnJDBCUtils;

public class ForgetDao {
	
	// 调用工具类
	private OwnJDBCUtils util = new OwnJDBCUtils();
	// 设置标志位 -1，用于比较查询结果
	private BigDecimal flag = new BigDecimal(-1);

	/**
	 * 验证手机是否存在数据库 如果存在，返回false 不存在，通过验证
	 * 
	 * @param phone
	 * @return
	 */
	public boolean checkPhone(String phone) {
		boolean ret = false;
		// ----验证手机是否存在
		String sql = "{? = call PACK_USER_DAO.func_Query_ID_P(?)}";
		List<Object> params_in = new ArrayList<Object>();
		params_in.add(phone);
		try {
			BigDecimal num1 = (BigDecimal) util.findNum_Result(sql, params_in);
			System.out.println(num1);
			if (num1.compareTo(flag) == 0) {// 手机号不存在
				ret = false;
				System.out.println("修改验证:手机号不存在");
			}else{
				ret = true;
				System.out.println("修改验证:手机号存在,可以修改");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ret;
	}
	
	/**
	 * 通过手机号修改密码
	 * @param phone
	 * @param pass
	 * @return
	 */
	public boolean changeUser(String phone,String pass){
		boolean ret = false;
		String sql = "call PACK_USER_DAO.update_User(?,?)";
		
		List<Object> list_in = new ArrayList<Object>();
		list_in.add(phone);
		list_in.add(pass);		
		try {
			int flag = util.update(sql, list_in);
			if(flag==0){
				ret = true;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return ret;
	}

}
