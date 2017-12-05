package com.system.dao;

import java.util.ArrayList;
import java.util.List;

import com.system.entity.Order;
import com.system.entity.SuperQuery;
import com.system.utils.JDBCUORtils;


public class Order_dao {
	public static JDBCUORtils utils = new JDBCUORtils();
	
	public Order_dao(){
		utils.getConnection();
	}
	
	public List<Order> querytodayorder(SuperQuery sq){
		List<Order> list = new ArrayList<Order>();
		String sql = "select * from ORDER_INFO ";
		sql = sql + sq.getSQL();
		List<Object> params = new ArrayList<Object>();
		params.addAll(sq.getPrames());
		try {
			list = utils.findMoreRefResult(sql, params, Order.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		utils.releaseConn();
		return list;
	} 

}
