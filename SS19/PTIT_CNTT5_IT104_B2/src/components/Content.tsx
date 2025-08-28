import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Content() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  const style =
    ctx.theme === "light"
      ? { background: "#fff", color: "#000", padding: 20 }
      : { background: "#000", color: "#fff", padding: 20 };

  return (
    <main style={style}>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>Theme hiện tại: {ctx.theme.toUpperCase()}</p>
    </main>
  );
}
