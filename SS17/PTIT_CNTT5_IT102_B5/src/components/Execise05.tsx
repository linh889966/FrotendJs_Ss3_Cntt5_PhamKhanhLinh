import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input type="text" onChange={handleChange} placeholder="Nhập nội dung" style={{ width: "300px", padding: "8px", fontSize: "16px" }}/>
      {inputValue && <p> {inputValue}</p>}
    </div>
  );
}

export default Form;