import React from "react";

export default class Notification extends React.Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div style={{ fontFamily: "system-ui", padding: 24 }}>
        <h2>Notification</h2>
        <p>Mở console để xem thông báo.</p>
      </div>
    );
  }
}
