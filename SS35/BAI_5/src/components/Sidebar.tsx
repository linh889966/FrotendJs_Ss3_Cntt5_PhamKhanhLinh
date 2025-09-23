import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { toggleMenu } from "../features/menu/menuSlice";

const Icon = {
  dashboard: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
        stroke="currentColor" strokeWidth="1.6" fill="none"/>
    </svg>
  ),
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M4 21c1.5-3.5 5-5 8-5s6.5 1.5 8 5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  money: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V5m5 14V9m5 10V7m5 12V3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  file: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12V9l-4-6z"
        stroke="currentColor" strokeWidth="1.6" fill="none"/>
      <path d="M14 3v6h6" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  left: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  right: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
};

type Item = { key: string; icon: JSX.Element; label: string; };
const items: Item[] = [
  { key: "dashboard", icon: Icon.dashboard, label: "Bảng điều khiển" },
  { key: "account",   icon: Icon.user,      label: "Tài khoản" },
  { key: "asset",     icon: Icon.money,     label: "Tài sản" },
  { key: "stats",     icon: Icon.chart,     label: "Thống kê" },
  { key: "docs",      icon: Icon.file,      label: "Tài liệu" },
];

export default function Sidebar() {
  const collapsed = useSelector((s: RootState) => s.menu.collapsed);
  const dispatch = useDispatch();

  return (
    <aside
      style={{
        width: collapsed ? 64 : 240,
        background: "#061a3a",
        color: "#fff",
        minHeight: "100vh",
        padding: 12,
        transition: "width .2s ease",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {items.map((it) => (
        <button
          key={it.key}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            width: "100%",
            padding: "10px 12px",
            borderRadius: 8,
            background: "transparent",
            border: "1px solid rgba(255,255,255,.12)",
            color: "#e7efff",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <span style={{ display: "inline-flex" }}>{it.icon}</span>
          {!collapsed && <span>{it.label}</span>}
        </button>
      ))}

      <div style={{ flex: 1 }} />

      <button
        onClick={() => dispatch(toggleMenu() as any)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          background: "transparent",
          border: "1px dashed rgba(255,255,255,.25)",
          color: "#e7efff",
          cursor: "pointer",
          textAlign: "left",
        }}
        title={collapsed ? "Mở rộng" : "Thu gọn"}
      >
        <span style={{ display: "inline-flex" }}>{collapsed ? Icon.right : Icon.left}</span>
        {!collapsed && <span>{collapsed ? "Mở rộng" : "Thu gọn"}</span>}
      </button>
    </aside>
  );
}
