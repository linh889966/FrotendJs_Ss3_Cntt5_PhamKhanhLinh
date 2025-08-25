import React, { Component, MouseEvent } from "react";

interface State {
  isLoggedIn: boolean;
}

export default class LoginStatus extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false, // mặc định: chưa đăng nhập
    };
  }

  handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    this.setState((prev) => ({ isLoggedIn: !prev.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <h2>LoginStatus</h2>

        {/* Hiển thị theo điều kiện */}
        {isLoggedIn ? (
          <p>Xin chào, User!</p>
        ) : (
          <p>Vui lòng đăng nhập để tiếp tục.</p>
        )}

        {/* Nút toggle trạng thái */}
        <button onClick={this.handleToggle}>
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
