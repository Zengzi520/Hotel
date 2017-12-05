package com.system.dao;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.system.entity.Hotel;
import com.system.entity.Room_Class;
import com.system.utils.JDBCUORtils;



public class hotel_dao {
	private static JDBCUORtils utils = new JDBCUORtils();
	
	public hotel_dao(){
		utils.getConnection();
	}
	
	
	/**
	 * 获取酒店的信息方法
	 * @author 小龙
	 * @param id
	 * @return 返回一个酒店对象
	 */
	public Hotel getHotel(BigDecimal id){
		Hotel hotel = new Hotel();
		String sql = "select * from HOTEL_INFO where H_ID = ?";
		List<Object> params = new ArrayList<Object>();
		params.add(id);
		try {
			hotel = utils.findSimpleRefResult(sql, params, Hotel.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return hotel;
	}
	
	
	/**
	 * @author 小龙
	 * 获取房间类型方法
	 * @return 返回酒店所有房间类型对象
	 */
	public List<Room_Class> getroomclass(){
		List<Room_Class> list = new ArrayList<Room_Class>();
		String sql = "select * from ROOM_CLASS";
		try {
			list = utils.findMoreRefResult(sql, null, Room_Class.class);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return list;
	}
	

}
