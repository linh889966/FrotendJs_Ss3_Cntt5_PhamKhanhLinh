import { useState } from "react";
import Timer from "./components/Timer";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <main style={{ padding: 24 }}>
      <button onClick={() => setShow(!show)} className="btn">
        {show ? "Ẩn Timer" : "Hiện Timer"}
      </button>
      {show && <Timer />}
    </main>
  );
}
