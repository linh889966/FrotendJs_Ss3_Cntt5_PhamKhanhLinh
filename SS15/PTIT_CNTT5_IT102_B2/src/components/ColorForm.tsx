import { useState } from "react";
import ColorInput from "./ColorInput";
import SubmitButton from "./SubmitButton";
import Swatch from "./Swatch";
import ResultBox from "./ResultBox";

export default function ColorForm() {
  const [color, setColor] = useState("#e14141");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(color);
  };

  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 640, margin: "40px auto" }}>
      <h2>Color {submitted ? `: ${submitted}` : ":"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12 }}>
        <ColorInput value={color} onChange={setColor} />
        <SubmitButton />
      </form>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Swatch color={submitted ?? color} />
        <ResultBox color={submitted} />
      </div>
    </div>
  );
}
