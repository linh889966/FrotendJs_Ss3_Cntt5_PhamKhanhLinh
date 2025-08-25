import React, { Component } from "react";

interface State {
  count: number;
}

export default class ClickCounter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Số lần click: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
