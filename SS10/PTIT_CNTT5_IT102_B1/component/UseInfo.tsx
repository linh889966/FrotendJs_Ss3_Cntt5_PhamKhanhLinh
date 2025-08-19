import React from "react";

type User = {
  name: string;
  gender: string;
  dob: string;
  email: string;
  address: string;
};

const UserInfo: React.FC = () => {
  const user: User = {
    name: "Nguyễn Văn A",
    gender: "Nam",
    dob: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          <b>Họ và tên:</b> {user.name}
        </li>
        <li>
          <b>Giới tính:</b> {user.gender}
        </li>
        <li>
          <b>Ngày sinh:</b> {user.dob}
        </li>
        <li>
          <b>Email:</b> {user.email}
        </li>
        <li>
          <b>Địa chỉ:</b> {user.address}
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
