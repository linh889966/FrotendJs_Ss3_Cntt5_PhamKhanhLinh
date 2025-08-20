
import React from "react";

const labelStyle: React.CSSProperties = { fontWeight: 600, marginRight: 8 };
const lineStyle: React.CSSProperties = { margin: "8px 0", fontSize: 18 };

export default function Exercise02() {

  const [id] = React.useState<number>(1);
  const [name] = React.useState<string>("Nguyễn Văn Sơn");
  const [dob] = React.useState<string>("20/12/2023");
  const [address] = React.useState<string>("Thanh Xuân, Hà Nội");

  return (
    <section style={{ maxWidth: 720, margin: "32px auto", lineHeight: 1.6 }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Thông tin cá nhân
      </h2>

      <p style={lineStyle}>
        <span style={labelStyle}>id:</span> {id}
      </p>
      <p style={lineStyle}>
        <span style={labelStyle}>Tên:</span> {name}
      </p>
      <p style={lineStyle}>
        <span style={labelStyle}>Ngày sinh:</span> {dob}
      </p>
      <p style={lineStyle}>
        <span style={labelStyle}>Địa chỉ:</span> {address}
      </p>
    </section>
  );
}
