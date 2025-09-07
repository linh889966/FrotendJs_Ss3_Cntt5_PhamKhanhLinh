import React from "react";
import { Dropdown, Button, type MenuProps } from "antd";

type Props = {
  fullName?: string;
  onAction?: (key: "settings" | "change-password" | "logout") => void;
};

const UserDropdown: React.FC<Props> = ({ fullName = "Nguyễn Văn Nam", onAction }) => {
  const items: MenuProps["items"] = [
    { key: "settings", label: "Cài đặt" },
    { key: "change-password", label: "Đổi mật khẩu" },
    { key: "logout", label: "Đăng xuất" },
  ];

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    onAction?.(key as Props extends { onAction: infer _ } ? any : never);
  };

  return (
    <Dropdown menu={{ items, onClick: handleClick }} placement="bottomLeft" trigger={["click"]}>
      <Button>
        {fullName}
      </Button>
    </Dropdown>
  );
};

export default UserDropdown;
