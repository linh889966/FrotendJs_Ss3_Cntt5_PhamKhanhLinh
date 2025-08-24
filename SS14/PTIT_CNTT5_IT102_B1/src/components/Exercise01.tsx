import React from "react";

interface Exercise01State {
  userName: string;
}

export default class Exercise01 extends React.Component<{}, Exercise01State> {
  state: Exercise01State = {
    userName: "Nguyễn Văn A"
  };

  render() {
    return (
      <div style={{ fontFamily: "system-ui", padding: 24 }}>
        <h2>Khởi tạo State (Class component)</h2>
        <p>Xin chào, <b>{this.state.userName}</b> 👋</p>
      </div>
    );
  }
}
