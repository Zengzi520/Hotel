package com.system.dao;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.system.entity.Room_Class;
import com.system.entity.Rooms;
import com.system.entity.SuperQuery;
import com.system.utils.JDBCUORtils;



public class Rooms_dao {
	private static JDBCUORtils utils = new JDBCUORtils();
	
	public Rooms_dao(){
		utils.getConnection();
	}
	
	public Room_Class getroomid(String classname){
		Room_Class bg = null;
		String sql = "select * from ROOM_CLASS WHERE RC_CLASS = ?";
		List<Object> params = new ArrayList<Object>();
		params.add(classname);
		try {
			bg = utils.findSimpleRefResult(sql, params, Room_Class.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return bg;
	}
	public List<Rooms> getempryroom(String croom){
		List<Rooms> set = null;
		String sql = "select RO_NO from ROOM_INFO where RO_CLASS = ? AND RO_EMPRY = '无'";
		List<Object> params = new ArrayList<Object>();
		params.add(croom);
 		try {
			set = utils.findMoreRefResult(sql, params, Rooms.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return set;
	}
	public List<Rooms> getAllrooms(SuperQuery srq){
		List<Rooms> set = null;
		String sql = "select * from ROOM_INFO ";
		sql = sql + srq.getSQL();
		List<Object> params = new ArrayList<Object>();
		if (srq.getPrames() != null) {
			params.addAll(srq.getPrames());
		}
		System.out.println(params);
		try {
		     set = utils.findMoreRefResult(sql, params, Rooms.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		utils.releaseConn();
		return set;
	}

}
