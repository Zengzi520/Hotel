package com.system.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class StringToDate {
	private StringToDate() {

	}

	public static java.sql.Timestamp toSqlTimestamp(String str) {
        SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd");
        Date utilDate=new Date();
        try {
		 utilDate = format.parse(str);
			
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        java.sql.Timestamp time=new java.sql.Timestamp(utilDate.getTime());
        return time;
	}
}
