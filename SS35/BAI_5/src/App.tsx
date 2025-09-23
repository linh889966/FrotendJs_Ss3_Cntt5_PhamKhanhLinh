import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: 24, flex: 1 }}>
        <h2>[Bài tập] Thay đổi chế độ hiển thị thanh Menu</h2>
        <p>Nhấn nút ở cuối thanh menu để thu gọn / mở rộng.</p>
      </main>
    </div>
  );
}
