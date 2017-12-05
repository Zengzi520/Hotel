package com.system.dao;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.system.utils.IndexJDBCUtils;
public class LoginIndexDao {
        
	private IndexJDBCUtils util = new IndexJDBCUtils();

	public LoginIndexDao() {
		util.getConnection();
	}
	
	public ResultSet queryUser(String user_tel,String password){
		Connection conn = util.getConnection();
		String sql="call PACK_USER_DAO.func_get_USER_P(?,?,?)";
		ResultSet set = null;
		List<Object> list_in = new ArrayList<Object>();
		   list_in.add(user_tel);
		   list_in.add(password);		
		try {
			 set = (ResultSet)util.findSimpleRefResult(sql, list_in);
			 
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return set;
	}	
}
