package com.system.entity;

import java.sql.Date;

import com.system.utils.StringUtils;



public class OrderQuery extends SuperQuery {
	private String usernmae;
	private String roomno;
	private Date date;
	
	public String getUsernmae() {
		return usernmae;
	}

	public void setUsernmae(String usernmae) {
		this.usernmae = usernmae;
	}

	public String getRoomno() {
		return roomno;
	}

	public void setRoomno(String roomno) {
		this.roomno = roomno;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public OrderQuery() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "OrderQuery [usernmae=" + usernmae + ", roomno=" + roomno
				+ ", date=" + date + "]";
	}

	public OrderQuery(String usernmae, String roomno, Date date) {
		super();
		this.usernmae = usernmae;
		this.roomno = roomno;
		this.date = date;
	}

	protected void custQuery(){
   	 if (StringUtils.hasLength(usernmae)) {
			super.addQuery(" O_USERNAME LIKE ?", "%"+usernmae+"%");
		}
        if (StringUtils.hasLength(roomno)) {
			super.addQuery(" O_USERNAME LIKE ?", "%"+roomno+"%");
		}
        if (StringUtils.hasLength(date.toString())) {
			super.addQuery(" O_INDATE = ? ", date);
		}
	}

}
