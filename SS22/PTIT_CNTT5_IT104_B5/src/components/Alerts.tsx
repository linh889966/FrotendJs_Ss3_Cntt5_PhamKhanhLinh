import React from "react";
import { Alert, Space } from "antd";
import "./alerts.css";

const Alerts: React.FC = () => {
  return (
    <Space direction="vertical" size="large" className="alerts-wrap">
      <Alert
        message="Thêm tài khoản thành công."
        type="success"
        showIcon
        closable
      />
      <Alert
        message="Thêm mới tài khoản thất bại."
        type="error"
        showIcon
        closable
      />
      <Alert
        message="Tên không được để trống."
        type="warning"
        showIcon
        closable
      />
    </Space>
  );
};

export default Alerts;
