import React from "react";
import UserDropdown from "./components/UserDropdown/UserDropdown";
import "antd/dist/reset.css";

const App: React.FC = () => {
  const handleAction = (key: "settings" | "change-password" | "logout") => {
    console.log("Action:", key);
  };

  return (
    <div style={{ padding: 24 }}>
      <UserDropdown onAction={handleAction} />
    </div>
  );
};

export default App;
