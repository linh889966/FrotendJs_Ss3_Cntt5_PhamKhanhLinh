import { useState } from "react";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";
import ResultBox from "./ResultBox";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(email);
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <EmailInput value={email} onChange={setEmail} />
        <SubmitButton />
      </form>
      <ResultBox email={submitted} />
    </div>
  );
}
