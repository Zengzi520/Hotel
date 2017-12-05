package com.system.dao;

import java.util.ArrayList;
import java.util.List;

import com.system.entity.NewReserve;
import com.system.entity.SuperQuery;
import com.system.utils.JDBCUORtils;



public class Reserve_dao {
	private JDBCUORtils util = new JDBCUORtils();
	public Reserve_dao(){
		util.getConnection();
	}
	
	public List<NewReserve> getNewReserve(){
		List<NewReserve> set = new ArrayList<NewReserve>();
		String sql = "select * from RESERVE_INFO where RE_ROOMNO is null";
		try {
			set = util.findMoreRefResult(sql, null, NewReserve.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		util.releaseConn();
		return set;
	}
	
	public List<NewReserve> getallreserve(SuperQuery sQuery){
		List<NewReserve> res = new ArrayList<NewReserve>();
		String sql = "select * from RESERVE_INFO ";
		sql = sql +sQuery.getSQL();
		List<Object> params = new ArrayList<Object>();
		params.addAll(sQuery.getPrames());
		
		try {
			res = util.findMoreRefResult(sql, params, NewReserve.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		util.releaseConn();
		return res;
	}

}
