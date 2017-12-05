package com.system.utils;


import java.util.List;

/**
 * 分页数据类
 * 包含了 显示的记录的信息
 * 总数
 * 每行显示的记录
 * 当前的第几页
 */
public class PageData {
	private List data; // 查找的数据

	private Integer total; // 总记录数

	private Integer pageSize;// 每页几行

	private Integer page;// 页数

	public PageData() {
		super();
	}

	public PageData(List data, Integer total, Integer pageSize, Integer page) {
		super();
		this.data = data;
		this.total = total;
		this.pageSize = pageSize;
		this.page = page;
	}

	public List getData() {
		return data;
	}

	public void setData(List data) {
		this.data = data;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	/**
	 * 得到总页数
	 * @return
	 */
	public int getTotalPage() {
		//总记录数 和每页显示的记录数 来到得到总页数
		//8   3
		int num = total / pageSize; //2
		if (total % pageSize != 0)
			num++; //3
		return num; //3
	}

	@Override
	public String toString() {
		return "{total:" + total + ",data:" + data + "}";
	}
}
