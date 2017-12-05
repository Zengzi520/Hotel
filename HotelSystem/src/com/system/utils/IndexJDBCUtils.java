package com.system.utils;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import oracle.jdbc.OracleTypes;

public class IndexJDBCUtils {
	//数据库用户名  
    private static final String USERNAME = "db_hotel";  
    //数据库密码  
    private static final String PASSWORD = "123456";  
    //驱动信息   
    private static final String DRIVER = "oracle.jdbc.driver.OracleDriver";  
    //数据库地址  
    private static final String URL = "jdbc:oracle:thin:@192.168.11.210:1521:orcl";  
    //连接对象
    private Connection connection;  
    //预编译对象
    private PreparedStatement pstmt;  
    //存储过程对象
    private CallableStatement cstmt;
    //结果集
    private ResultSet resultSet;
    
    /**
     * 构造器
     * 加载注册驱动
     */
    public IndexJDBCUtils() {  
        // TODO Auto-generated constructor stub  
        try{  
            Class.forName(DRIVER);//--加载注册驱动
            System.out.println("数据库连接成功！");             
        }catch(Exception e){  
  
        }  
    }
    
    /**
     * 获取连接对象
     * @return
     */
    public Connection getConnection(){  
        try {  
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);  
        } catch (SQLException e) {  
            // TODO Auto-generated catch block  
            e.printStackTrace();  
        }  
        return connection;
    }  
    
    /**
     * 释放数据库连接 
     */
    public void releaseConn(){  
        if(resultSet != null){  
            try{  
                resultSet.close();  
            }catch(SQLException e){  
                e.printStackTrace();  
            }  
        }  
    } 
    
    public ResultSet findSimpleRefResult(String sql, List<Object> params_in) throws Exception{
    	
    	int index = 1;
    	int flag = 1;
    	ResultSet set = null;
    	cstmt = connection.prepareCall(sql);
    	//输入参数设置
    	if(params_in != null && !params_in.isEmpty()){  
            for(int i = 0; i<params_in.size(); i++){  
            	cstmt.setObject(index++, params_in.get(i));  
            }          
        }
    	//输出参数设置
    	flag = index;
        cstmt.registerOutParameter(index++, OracleTypes.CURSOR);  
    	// 执行语句-----------
    	cstmt.execute();
    	//获取结果--------resultset--
    	/*for(;flag<index;flag++){
    		
    	}*/
    	set = (ResultSet) cstmt.getObject(flag);
    	return set;
    }
}
