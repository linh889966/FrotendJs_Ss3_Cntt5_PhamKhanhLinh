import React from "react";

interface State {
  company: string;
}

export default class CompanyStateDemo extends React.Component<{}, State> {
  state: State = { company: "Rikkei Academy" };

  handleChange = () => {
    this.setState((s) => ({
      company: s.company === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy",
    }));
  };

  render() {
    return (
      <div style={{ fontFamily: "system-ui", padding: 24 }}>
        <h1 style={{ fontWeight: 600, color: "#374151" }}>
          Company: {this.state.company}
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
