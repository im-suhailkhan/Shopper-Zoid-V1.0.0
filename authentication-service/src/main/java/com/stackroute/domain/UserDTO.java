package com.stackroute.domain;

public class UserDTO {
	private String emailId;
	private String password;
	private String role;
	private String loginType;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getLoginType() {
		return loginType;
	}

	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}

	@Override
	public String toString() {
		return "UserDTO{" +
				"emailId='" + emailId + '\'' +
				", password='" + password + '\'' +
				", role='" + role + '\'' +
				", loginType='" + loginType + '\'' +
				'}';
	}
}