package com.system.dao;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.system.utils.OwnJDBCUtils;

public class OrderDao {
	// 调用工具类
	private OwnJDBCUtils util = new OwnJDBCUtils();
	
	/**
	 * 生成订单
	 * @param phone
	 * @param pass
	 * @return
	 */
	public boolean addOrder(Date d,BigDecimal d1,String name,String sex,BigDecimal Id,BigDecimal tel,BigDecimal sprice,BigDecimal aprice){
		boolean res = false;
		String sql = "call PACK_ORDER_DAO.insert_Order(?,?,?,?,?,?,?,?,?)";
		List<Object> list_in = new ArrayList<Object>();
		list_in.add(d);
		list_in.add(d1);
		list_in.add(name);
		list_in.add(sex);
		list_in.add(Id);
		list_in.add(tel);
		list_in.add(sprice);
		list_in.add(aprice);
		list_in.add("大床房");
		try {
			int flag = util.update(sql, list_in);
			if(flag==0){
				res = true;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return res;
	}	
}
