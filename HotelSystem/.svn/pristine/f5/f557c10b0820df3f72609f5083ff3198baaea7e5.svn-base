package com.system.entity;

import java.math.BigDecimal;

import com.system.utils.StringUtils;



public class ReserveQuery extends SuperQuery {
	private String name;
	private BigDecimal tel;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigDecimal getTel() {
		return tel;
	}
	public void setTel(BigDecimal tel) {
		this.tel = tel;
	}
	@Override
	public String toString() {
		return "ReserveQuery [name=" + name + ", tel=" + tel + "]";
	}
	public ReserveQuery(String name, BigDecimal tel) {
		super();
		this.name = name;
		this.tel = tel;
	}
	public ReserveQuery() {
		super();
		// TODO Auto-generated constructor stub
	}
	
    protected void custQuery(){
		if (StringUtils.hasLength(name)) {
			super.addQuery(" RE_USER LIKE ?", "%"+name+"%");
		}
		/*if (StringUtils.hashnull(tel.toString())) {
			super.addQuery(" RE_USERTEL LIKE ?", "%"+tel+"%");
		}*/
	}

}
