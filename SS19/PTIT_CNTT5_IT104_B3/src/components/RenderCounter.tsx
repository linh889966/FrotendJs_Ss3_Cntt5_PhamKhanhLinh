import { useEffect, useRef, useState } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Component Render Counter</h2>
      <label style={{ display: "block", marginBottom: 8 }}>Input:</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <p style={{ marginTop: 16 }}>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}
