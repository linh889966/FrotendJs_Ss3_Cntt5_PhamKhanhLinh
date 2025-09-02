import { useState, useEffect } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name ? `Xin chào, ${name}` : "Chào mừng bạn đến với ứng dụng";
  }, [name]);

  return (
    <div className="card">
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <p>Tiêu đề trang sẽ thay đổi dựa trên tên bạn nhập.</p>
    </div>
  );
}
