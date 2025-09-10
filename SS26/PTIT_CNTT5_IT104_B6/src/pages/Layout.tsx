import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const isAuth = localStorage.getItem("auth") === "true";
  const role = localStorage.getItem("role");
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/login">Login</Link>
        <Link to="/account">Account</Link>
        <Link to="/admin">Admin</Link>
        {isAuth ? (
          <>
            <span>Role: {role}</span>
            <button
              onClick={() => {
                localStorage.setItem("auth", "false");
                localStorage.removeItem("role");
                location.href = "/login";
              }}
            >
              Đăng xuất
            </button>
          </>
        ) : null}
      </nav>
      <Outlet />
    </div>
  );
}
