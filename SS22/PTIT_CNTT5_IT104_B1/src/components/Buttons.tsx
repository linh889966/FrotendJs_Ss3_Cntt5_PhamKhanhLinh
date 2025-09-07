import React from "react";
import { Button } from "antd";
import "./Buttons.css";

const Buttons: React.FC = () => {
  return (
    <div className="button-group">
      <Button type="primary">Lưu</Button>
      <Button>Hủy</Button>
      <Button type="primary" style={{ backgroundColor: "green", borderColor: "green" }}>
        Thành công
      </Button>
      <Button type="primary" style={{ backgroundColor: "orange", borderColor: "orange" }}>
        Cảnh báo
      </Button>
      <Button type="primary" danger>
        Báo lỗi
      </Button>
      <Button type="primary" style={{ backgroundColor: "teal", borderColor: "teal" }}>
        Thông tin
      </Button>
      <Button type="link">Đường dẫn</Button>
    </div>
  );
};

export default Buttons;
