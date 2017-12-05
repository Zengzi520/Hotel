package com.system.entity;

import java.math.BigDecimal;

public class Room_Class {
	private String RC_ID;
	private String RC_CLASS;
	private BigDecimal RC_PRICE;
	private String BED_CLASS;
	private String RC_IMG;
	private String RC_BREAKFAST;
	private BigDecimal RC_OLDPRICE;
	public String getRC_ID() {
		return RC_ID;
	}
	public void setRC_ID(String rC_ID) {
		RC_ID = rC_ID;
	}
	public String getRC_CLASS() {
		return RC_CLASS;
	}
	public void setRC_CLASS(String rC_CLASS) {
		RC_CLASS = rC_CLASS;
	}
	public BigDecimal getRC_PRICE() {
		return RC_PRICE;
	}
	public void setRC_PRICE(BigDecimal rC_PRICE) {
		RC_PRICE = rC_PRICE;
	}
	public String getBED_CLASS() {
		return BED_CLASS;
	}
	public void setBED_CLASS(String bED_CLASS) {
		BED_CLASS = bED_CLASS;
	}
	public String getRC_IMG() {
		return RC_IMG;
	}
	public void setRC_IMG(String rC_IMG) {
		RC_IMG = rC_IMG;
	}
	public String getRC_BREAKFAST() {
		return RC_BREAKFAST;
	}
	public void setRC_BREAKFAST(String rC_BREAKFAST) {
		RC_BREAKFAST = rC_BREAKFAST;
	}
	public BigDecimal getRC_OLDPRICE() {
		return RC_OLDPRICE;
	}
	public void setRC_OLDPRICE(BigDecimal rC_OLDPRICE) {
		RC_OLDPRICE = rC_OLDPRICE;
	}
	public Room_Class(String rC_ID, String rC_CLASS, BigDecimal rC_PRICE,
			String bED_CLASS, String rC_IMG, String rC_BREAKFAST,
			BigDecimal rC_OLDPRICE) {
		super();
		RC_ID = rC_ID;
		RC_CLASS = rC_CLASS;
		RC_PRICE = rC_PRICE;
		BED_CLASS = bED_CLASS;
		RC_IMG = rC_IMG;
		RC_BREAKFAST = rC_BREAKFAST;
		RC_OLDPRICE = rC_OLDPRICE;
	}
	public Room_Class() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Room_Class [RC_ID=" + RC_ID + ", RC_CLASS=" + RC_CLASS
				+ ", RC_PRICE=" + RC_PRICE + ", BED_CLASS=" + BED_CLASS
				+ ", RC_IMG=" + RC_IMG + ", RC_BREAKFAST=" + RC_BREAKFAST
				+ ", RC_OLDPRICE=" + RC_OLDPRICE + "]";
	}
	

}
