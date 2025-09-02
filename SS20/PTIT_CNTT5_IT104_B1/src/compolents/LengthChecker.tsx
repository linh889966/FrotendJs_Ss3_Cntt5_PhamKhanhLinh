import { useState } from "react";

export default function LengthChecker() {
  const [value, setValue] = useState("");
  const isTooLong = value.length > 5;

  return (
    <div className="card">
      <h2>Kiểm tra độ dài chuỗi nhập vào</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập vào đây"
        className={`input ${isTooLong ? "input-error" : ""}`}
        aria-describedby="length-msg"
      />

      {isTooLong && (
        <div id="length-msg" role="alert" className="alert">
          Chuỗi nhập vào dài hơn 5 ký tự!
        </div>
      )}
    </div>
  );
}
