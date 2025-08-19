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
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "350px" }}>
      <h3>Thông tin cá nhân</h3>
      <ul>
        <li>
          Họ và tên: <strong>{user.name}</strong>
        </li>
        <li>
          Giới tính: <strong>{user.gender}</strong>
        </li>
        <li>
          Ngày sinh: {user.dob}
        </li>
        <li>
          Email: {user.email}
        </li>
        <li>
          Địa chỉ: <strong>{user.address}</strong>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
