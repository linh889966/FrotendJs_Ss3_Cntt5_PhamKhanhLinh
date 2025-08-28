import { useEffect, useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Trường này là bắt buộc";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "Trường này là bắt buộc";
    else if (!emailRegex.test(email)) newErrors.email = "Email không hợp lệ";
    setErrors(newErrors);
  }, [name, email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h3>Đăng ký thông tin</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Họ tên</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập họ tên..."
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{errors.name}</p>
          )}
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: 12, marginTop: 4 }}>{errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          style={{
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: 6,
            background: Object.keys(errors).length > 0 ? "#aaa" : "#007bff",
            color: "#fff",
            cursor: Object.keys(errors).length > 0 ? "not-allowed" : "pointer",
          }}
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
