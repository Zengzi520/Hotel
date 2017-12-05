package com.system.entity;

import java.util.ArrayList;
import java.util.List;


public class SuperQuery {
	private List<Object> prames = new ArrayList<Object>();
	private List<Object> cond = new ArrayList<Object>();
	public List<Object> getPrames() {
		return prames;
	}
	public void setPrames(List<Object> prames) {
		this.prames = prames;
	}
	public List<Object> getCond() {
		return cond;
	}
	public void setCond(List<Object> cond) {
		this.cond = cond;
	}
	@Override
	public String toString() {
		return "SuperRoomQuery [prames=" + prames + ", cond=" + cond + "]";
	}
	public SuperQuery() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getSQL(){
		
		custQuery();
		StringBuilder sql = new StringBuilder();
		//存放sql语句的集合
		if (cond.size()>0) {
			sql.append(" WHERE ");
			sql.append(org.apache.commons.lang3.StringUtils.join(cond," AND "));
		}
		return sql.toString();
	}
	
	public void addQuery(String condition,Object paramer){
		prames.add(paramer);
		cond.add(condition);
	}
	
	protected void custQuery(){
		
	}

}
