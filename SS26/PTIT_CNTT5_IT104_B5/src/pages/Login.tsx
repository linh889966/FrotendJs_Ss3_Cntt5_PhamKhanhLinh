import { useNavigate, useLocation } from "react-router-dom";
import { useState, FormEvent } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/account";

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    localStorage.setItem("auth", "true");
    navigate(`${from}?q=${encodeURIComponent(username)}`, { replace: true });
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 360 }}>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nhập tên và đăng nhập"
        style={{ width: "100%", padding: 8, margin: "8px 0" }}
      />
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
