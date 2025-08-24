import { useState } from "react";

export default function RangeForm() {
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(progress);
  };

  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 640, margin: "40px auto" }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="progress">Tiến độ hoàn thành: {progress}%</label>
        <input
          id="progress"
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <pre style={{ background: "#f6f7f9", padding: 12, borderRadius: 8, marginTop: 16 }}>
        {submitted !== null
          ? `Sau khi submit: { progress: '${submitted}%' }`
          : "Trước khi submit: { progress: '' }"}
      </pre>
    </div>
  );
}
