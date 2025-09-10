import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const isAuth = localStorage.getItem("auth") === "true";
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link to="/login">Login</Link>
        <Link to="/account?q=hello">Account (q=hello)</Link>
        {isAuth ? (
          <button
            onClick={() => {
              localStorage.setItem("auth", "false");
              location.href = "/login";
            }}
          >
            Đăng xuất
          </button>
        ) : null}
      </nav>
      <Outlet />
    </div>
  );
}
