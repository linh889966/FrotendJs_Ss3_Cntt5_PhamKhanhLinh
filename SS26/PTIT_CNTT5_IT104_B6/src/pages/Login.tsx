import { useState, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Role, User } from "../types/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/account";

  const validUser: User = { email: "demo@site.com", password: "123456", role: "admin" };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password || !role) {
      setError("Vui lòng nhập đủ thông tin");
      return;
    }
    const ok = email === validUser.email && password === validUser.password && role === validUser.role;
    if (!ok) {
      setError("Thông tin đăng nhập không đúng");
      return;
    }
    localStorage.setItem("auth", "true");
    localStorage.setItem("role", role);
    navigate(from, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 380 }}>
      <h2>Đăng nhập</h2>
      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: 8, margin: "8px 0" }}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 8, margin: "8px 0" }}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as Role)}
        style={{ width: "100%", padding: 8, margin: "8px 0" }}
      >
        <option value="">-- Chọn quyền --</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button type="submit" style={{ width: "100%", padding: 10 }}>Đăng nhập</button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <div style={{ marginTop: 12, fontSize: 12, opacity: 0.8 }}>
        Test: email demo@site.com — mật khẩu 123456 — quyền Admin
      </div>
    </form>
  );
}
