import ThemeSwitcher from "./components/ThemeSwitcher"

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>[Bài tập] Chế độ sáng/tối</h2>
      <ThemeSwitcher />
    </div>
  )
}
