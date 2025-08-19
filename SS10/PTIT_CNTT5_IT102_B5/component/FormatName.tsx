import React from "react";

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

const FormatName: React.FC = () => {
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Họ và tên: <span style={{ fontWeight: "bold" }}>{formatName(user)}</span>
      </h2>
    </div>
  );
};

export default FormatName;
