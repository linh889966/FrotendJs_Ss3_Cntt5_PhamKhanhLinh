import { useState } from "react";

export default function DateForm() {
  const [dob, setDob] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(dob);
  };

  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 640, margin: "40px auto" }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dob">Ngày sinh:</label>
        <input
          id="dob"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: 8 }}>Submit</button>
      </form>

      <pre style={{ background: "#f6f7f9", padding: 12, borderRadius: 8, marginTop: 16 }}>
        {submitted
          ? `Sau khi submit: { dob: '${submitted}' }`
          : "Trước khi submit: { dob: '' }"}
      </pre>
    </div>
  );
}
