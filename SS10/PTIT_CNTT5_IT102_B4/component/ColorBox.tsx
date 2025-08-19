import React from "react";

interface ColorBoxProps {
  color: string; // màu được truyền từ ngoài vào
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "200px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    margin: "10px"
  };

  return (
    <div style={boxStyle}>
      Box
    </div>
  );
};

export default ColorBox;
