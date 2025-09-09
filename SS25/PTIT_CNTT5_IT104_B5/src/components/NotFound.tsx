import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ fontSize: 120, fontWeight: 700, color: "#374151", lineHeight: 1 }}>404</div>
      <div style={{ fontSize: 18, color: "#6b7280", marginBottom: 18 }}>Not Found</div>
      <Link to="/" style={{
        padding: "10px 16px",
        borderRadius: 6,
        border: "1px solid #e5e7eb",
        textDecoration: "none"
      }}>
        Về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
