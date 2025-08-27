import React, { useState, useCallback } from "react";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState("#ffffff");

  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <label>Màu người dùng chọn: </label>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>
      <div style={{ marginTop: "15px" }}>
        <label>Màu hiển thị:</label>
        <div
          style={{
            width: "120px",
            height: "60px",
            border: "1px solid black",
            backgroundColor: color,
            marginTop: "5px"
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
