package com.system.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.beanutils.BeanUtils;

/**
 * 数据库操作辅助类
 */
public class BaseDao {

	// 四个常量 driver url username password
	private static final String URL = "jdbc:oracle:thin:@192.168.11.210:1521:orcl";
	private static final String USER = "db_hotel";
	private static final String PASSWORD = "123456";
	private static final String DRIVER = "oracle.jdbc.driver.OracleDriver";

	/**
	 * 获取连接对象
	 * 
	 * @return 连接对象
	 */
	public static Connection getConn() {

		Connection conn = null;
		try {

			Class.forName(DRIVER);
			conn = DriverManager.getConnection(URL, USER, PASSWORD);

		} catch (Exception e) {
			throw new RuntimeException("数据库连接失败!", e);
		}
		return conn;
	}

	/**
	 * 释放资源
	 * 
	 * @param rs
	 *            结果集
	 * @param pstmt
	 *            命令处理对象
	 * @param conn
	 *            连接对象
	 */
	public static void close(ResultSet rs, PreparedStatement pstmt,
			Connection conn) {
		try {
			if (rs != null) {
				rs.close();
			}
			if (pstmt != null) {
				pstmt.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			throw new RuntimeException("释放资源失败!", e);
		}
	}

	/**
	 * 设置参数
	 * 
	 * @param sql
	 * @param conn
	 * @param pstmt
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	private static PreparedStatement setPstmt(String sql, Connection conn,
			PreparedStatement pstmt, Object... param) throws SQLException {
		pstmt = conn.prepareStatement(sql);
		if (param != null) {
			for (int i = 0; i < param.length; i++) {
				pstmt.setObject(i + 1, param[i]);
			}
		}
		return pstmt;
	}

	/**
	 * 通用的数据库（增，删，改）操作方法ͨ
	 * 
	 * @param sql
	 *            sql语句
	 * @param param
	 *            sql参数
	 * @return 受影响行数
	 */
	public static int execute(String sql, Object... param) {
		Connection conn = getConn();
		try {
			return execute(sql, conn, param);
		} finally {
			close(null, null, conn);
		}
	}

	/**
	 *通用的数据库增删改（事务访问）
	 * 
	 * @param sql
	 * @param conn
	 * @param param
	 * @return
	 */
	public static int execute(String sql, Connection conn, Object... param) {
		PreparedStatement pstmt = null;
		try {
			pstmt = setPstmt(sql, conn, pstmt, param);
			return pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new RuntimeException("数据库操作失败!", e);
		} finally {
			close(null, pstmt, null);
		}
	}

	/**
	 *通用的查询方法
	 * 
	 * @param sql
	 *           sql语句
	 * @param cla
	 *            类对象（Class类对象）如 Student.class
	 * @param param
	 *            可变参数
	 * @return
	 */
	public static Object select(String sql, Class cla, Object... param) {
		Connection conn = getConn();
		try {
			return select(sql, conn, cla, param);
		} finally {
			close(null, null, conn);
		}
	}

	/**
	 * 带事务的查询方法
	 * 
	 * @param sql
	 * @param conn
	 * @param cla
	 * @param param
	 * @return
	 */
	public static Object select(String sql, Connection conn, Class cla,
			Object... param) {
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		List<Object> list = new ArrayList<Object>();
		try {
			pstmt = setPstmt(sql, conn, pstmt, param);
			// executeQuery 
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// ?rs 结果集   cla Class对象
				Object object = convert(rs, cla);
				list.add(object);
			}
			return list;
		} catch (SQLException e) {
			throw new RuntimeException("数据库查询失败!", e);
		} finally {
			close(rs, pstmt, null);
		}
	}

	/**
	 * 获取单个记录值，是单个记录注意
	 * 
	 * @param sql
	 * @param param
	 * @return
	 */
	public static Object getFirst(String sql, Object... param) {
		Connection conn = getConn();
		try {
			return getFirst(sql, conn, param);
		} finally {
			close(null, null, conn);
		}
	}

	/**
	 * 获取单个记录值 事务
	 * 
	 * @param sql
	 * @param conn
	 * @param param
	 * @return
	 */
	public static Object getFirst(String sql, Connection conn, Object... param) {
		List list = (List) select(sql, conn, Object.class, param);
		if (list.isEmpty()) {
			return null;
		}
		return list.get(0);
	}

	/**
	 * 事务处理操作
	 * 
	 * @param tran
	 * @return
	 */
//	public static Object transaction(ITransaction tran) {
//		Connection conn = getConn();
//		try {
//			conn.setAutoCommit(false);
//			Object obj = tran.execute(conn);
//			conn.commit();
//			return obj;
//		} catch (SQLException e) {
//			try {
//				conn.rollback();
//			} catch (SQLException e1) {
//				throw new RuntimeException("�ع�ʧ��!", e);
//			}
//			throw new RuntimeException("����ִ��ʧ��", e);
//		} finally {
//			close(null, null, conn);
//		}
//	}

	/**
	 * ��ѯ����ת��
	 * 
	 * @param rs
	 *            ���resultSet
	 * @param cla
	 *            ĳ�������
	 * @return
	 */
	public static Object convert(ResultSet rs, Class cla) {
		try {
			if (cla.getName().equals("java.lang.Object")) {
				return rs.getObject(1);
			}
			Object object = cla.newInstance(); // ����ʵ�����ʵ��
			ResultSetMetaData metaData = rs.getMetaData();// ���ͷ��Ϣ����
			for (int i = 1; i <= metaData.getColumnCount(); i++) {// ѭ��Ϊʵ�����ʵ������Ը�ֵ
				String name = metaData.getColumnLabel(i);// ��ȡ����
				// object ��ʵ������� �е����� �ͱ����������һ����
				BeanUtils.setProperty(object, name, rs.getObject(i));// ע�����������������һ�¡�
			}
			return object;
		} catch (Exception e) {
			throw new RuntimeException("��������ʧ��!", e);
		}
	}

	/**
	 * ��ҳ���� mysql;
	 * 
	 * @param sql
	 *            ��ѯsql���
	 * @param page
	 *            ��ǰҳ��
	 * @param pageSize
	 *            ÿҳ��ʾ�ļ�¼��
	 * @param cla
	 *            Ҫ��ѯ�������
	 * @param param
	 *            �����б�
	 * @return PageData����
	 */
//	public static PageData getPage(String sql, Integer page, Integer pageSize,
//			Class cla, Object... param) {
//
//		// ���贫�ݹ�����sql���
//		// select * from tbl_emp
//		// ��ѯ���еļ�¼��
//		String selSql = "select count(*) from (" + sql + ") t";
//		if (page == null) {
//			page = 1;
//		}
//		if (pageSize == null) {
//			pageSize = 5;
//		}
//		Integer count = Integer.parseInt(getFirst(selSql, param).toString());
//		// �õ���ʼλ�ü��㷨
//		int start = (page - 1) * pageSize;
//		// selSql ���¸��ƵĽ����� ��ҳ��ѯ�����
//		selSql = sql + " limit " + start + "," + pageSize;
//		// �ΰ���select���� ��ѯ
//		List list = (List) select(selSql, cla, param);
//		// ?
//		PageData data = new PageData(list, count, pageSize, page);
//		return data;
//	}

	/**
	 * ��ҳ���� sqlserver
	 * 
	 * @param page
	 * @param pageSize
	 * @param cla
	 * @param identity
	 * @return
	 */
//	public static PageData getPage(Integer page, Integer pageSize, Class cla,
//			String identity) {
//		String name = cla.getName().substring(
//				cla.getName().lastIndexOf(".") + 1);// ����������������ȡ��ݿ����
//		String selSql = "select count(*) from " + name;// ��ȡ����
//		if (page == null) {
//			page = 1;
//		}
//		if (pageSize == null) {
//			pageSize = 20;
//		}
//		int start = (page - 1) * pageSize;
//		Integer count = Integer.parseInt(getFirst(selSql, null).toString());
//		selSql = "select top " + pageSize + " * from " + name + " where "
//				+ identity + " not in (select top " + start + " " + identity
//				+ " from " + name + " )"; // ƴ�Ӳ�ѯ���
//		List list = (List) select(selSql, cla, null);
//		PageData data = new PageData(list, count, pageSize, page);
//		return data;
//	}

}
