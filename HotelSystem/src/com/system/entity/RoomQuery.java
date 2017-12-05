package com.system.entity;

import com.system.utils.StringUtils;


public class RoomQuery extends SuperQuery {
	private String roomclass;
	private String roomno;
	public String getRoomclass() {
		return roomclass;
	}
	public void setRoomclass(String roomclass) {
		this.roomclass = roomclass;
	}
	public String getRoomno() {
		return roomno;
	}
	public void setRoomno(String roomno) {
		this.roomno = roomno;
	}
	public RoomQuery(String roomclass, String roomno) {
		super();
		this.roomclass = roomclass;
		this.roomno = roomno;
	}
	public RoomQuery() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "RoomQuery [roomclass=" + roomclass + ", roomno=" + roomno + "]";
	}
     protected void custQuery(){
    	 if (StringUtils.hasLength(roomclass)) {
 			super.addQuery(" RO_CLASS = ?", roomclass);
 		}
         if (StringUtils.hasLength(roomno)) {
			super.addQuery(" RO_NO LIKE ?", "%"+roomno+"%");
		}
	}
	

}
