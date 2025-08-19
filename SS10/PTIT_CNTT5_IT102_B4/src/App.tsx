import React from "react";
import ColorBox from "./components/ColorBox";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="green" />
    </div>
  );
};

export default App;
