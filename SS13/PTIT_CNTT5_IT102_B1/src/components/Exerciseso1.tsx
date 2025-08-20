import React, { Component } from "react";

type State = {
  name: string;
};

export default class Exercises01 extends Component<{}, State> {
  state: State = {
    name: "Nguyễn Minh Sơn",
  };

  render() {
    return (
      <section style={{ fontFamily: "system-ui", padding: 16 }}>
        <h2>Bài tập 01 – Tạo state và render dữ liệu</h2>
        <p>
          Họ và tên: <strong>{this.state.name}</strong>
        </p>
      </section>
    );
  }
}
