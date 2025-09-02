import { useState } from "react";

export default function UserProfile() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card">
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nhập tên"
          className="input"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Nhập email"
          className="input"
        />
        <button type="submit" className="btn">Gửi</button>
      </form>

      {submitted && (
        <div className="alert-success">
          <p><b>Tên:</b> {form.name}</p>
          <p><b>Email:</b> {form.email}</p>
        </div>
      )}
    </div>
  );
}
