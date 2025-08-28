import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;
  return (
    <header style={{ marginBottom: 20 }}>
      <h1>My Themed App</h1>
      <button onClick={ctx.toggleTheme}>Toggle Theme</button>
    </header>
  );
}
