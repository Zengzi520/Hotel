package com.system.utils;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import oracle.jdbc.OracleTypes;

/**
 * Oracle JDBC工具类
 * 适用于Oracle数据库  操作存储过程、函数
 * 
 * @author Administrator
 *
 */
public class OwnJDBCUtils {
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
  //  private PreparedStatement pstmt;  
    //存储过程对象
    private CallableStatement cstmt;
    //结果集
    private ResultSet resultSet;
    
    /**
     * 构造器
     * 加载注册驱动
     * 获取连接对象
     */
    public OwnJDBCUtils() {  
        // TODO Auto-generated constructor stub  
        try{  
            Class.forName(DRIVER);//--加载注册驱动
            getConnection(); //--获取连接对象
            System.out.println("数据库连接成功！");             
        }catch(Exception e){  
        	System.out.println("数据库连接异常！加载失败");
        }  
    }
    
    /**
     * 获取连接对象
     * @return
     */
    private Connection getConnection(){  
        try {  
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);  
        } catch (SQLException e) {  
            // TODO Auto-generated catch block  
            e.printStackTrace();  
        }  
        return connection;
    }  
    
    /**
     * 释放连接 
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
    
    
    /**
     * 调用存储过程 查询
     * @param sql 带返回参数
     * @param params_in
     * @return 一个结果集
     * @throws Exception
     */
    public ResultSet findResult(String sql, List<Object> params_in) throws Exception{    	
    	int index = 1;
    	ResultSet set = null;
    	cstmt = connection.prepareCall(sql);
    	//输入参数设置
    	if(params_in != null && !params_in.isEmpty()){  
            for(int i = 0; i<params_in.size(); i++){  
            	cstmt.setObject(index++, params_in.get(i));  
            }          
        }
    	//输出参数设置
    	cstmt.registerOutParameter(index, OracleTypes.CURSOR);  
    	// 执行语句-----------
    	cstmt.execute();
	    //获取结果--------resultset--
	    set = (ResultSet) cstmt.getObject(index);
    	return set;
    }
   
    /**
     * 调用存储过程 更新数据
     * 
     * @param sql
     * @param params_in
     * @return 更新状态
     * @throws Exception
     */
    public int update(String sql, List<Object> params_in) throws Exception{    	
    	int index = 1;
    	int flag = 0;
    	cstmt = connection.prepareCall(sql);
    	//输入参数设置
    	if(params_in != null && !params_in.isEmpty()){  
            for(int i = 0; i<params_in.size(); i++){  
            	cstmt.setObject(index++, params_in.get(i));  
            }          
        }    
    	// 执行语句-----------
    	System.out.println("执行操作----");
    	flag = cstmt.executeUpdate();
	    //获取结果--------resultset--	
    	System.out.println("返回行数--"+flag);
    	return flag;
    }
           
    /**
     * 调用函数调用
     * sql返回值为 NUMBER类型可用
     * @param sql
     * @param params_in
     * @return 
     * @throws Exception
     */
    public Object findNum_Result(String sql, List<Object> params_in) throws Exception{
    	Object res = null;
    	int index = 2;	
    	cstmt = connection.prepareCall(sql);
    	//参数设置
    	if(params_in != null && !params_in.isEmpty()){
    		//输出参数设置 NUMBER
    		cstmt.registerOutParameter(1, OracleTypes.NUMBER);
            for(int i = 0; i<params_in.size(); i++){
            	//输入参数设置
            	cstmt.setObject(index++, params_in.get(i));
            }
        }
    	// 执行语句-----------
    	cstmt.execute();
    	// 设置值
    	res =(Object) cstmt.getObject(1);
    	return res;
    }
}