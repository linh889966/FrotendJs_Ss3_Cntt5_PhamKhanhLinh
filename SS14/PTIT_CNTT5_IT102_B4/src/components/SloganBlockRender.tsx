import React from "react";

interface State {
  slogan: string;
}

export default class SloganBlockRender extends React.Component<{}, State> {
  state: State = { slogan: 'Học code để đi làm' };

  shouldComponentUpdate() {
    return false;
  }

  handleChange = () => {
    this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
  };

  render() {
    return (
      <div style={{ fontFamily: "system-ui", padding: 24 }}>
        <h1 style={{ fontWeight: 600, color: "#374151" }}>
          Slogan: "{this.state.slogan}"
        </h1>
        <button
          onClick={this.handleChange}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          Change state
        </button>
      </div>
    );
  }
}
