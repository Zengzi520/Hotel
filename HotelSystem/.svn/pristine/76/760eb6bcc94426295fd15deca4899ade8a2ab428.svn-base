package com.system.test;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.system.dao.LoginIndexDao;
import com.system.utils.IndexJDBCUtils;

public class IndexJDBCtest {
       public static void main(String[] args) throws Exception {
		   /*IndexJDBCUtils util = new IndexJDBCUtils();
		   Connection conn = util.getConnection();
		   String sql="call PACK_USER_DAO.func_get_USER_P(?,?,?)";
		   
		   List<Object> list_in = new ArrayList<Object>();
		   list_in.add("13821255061");
		   list_in.add("123456");
		   try {
			ResultSet set = util.findSimpleRefResult(sql, list_in);
			while (set.next()) {
				System.out.println("序列:" + set.getString(1) + "  编码："
						+ set.getString("U_ID") + "  姓名："
						+ set.getString("U_USERNAME"));
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		   util.releaseConn();*/
    	   
    	   LoginIndexDao dao = new LoginIndexDao();
    	   ResultSet set = dao.queryUser("13821255061", "123456");
    	   System.out.println(set+"-------");
    	   System.out.println(set.getString("U_USERNAME")+"---------");
    	   while (set.next()) {
    		    System.out.println(set);
    		    
    		    System.out.println(set.getString("U_USERNAME"));
				System.out.println("序列:" + set.getString(1) + "  编码："
						+ set.getString("U_ID") + "  姓名："
						+ set.getString("U_USERNAME"));
		}   
	}
}
