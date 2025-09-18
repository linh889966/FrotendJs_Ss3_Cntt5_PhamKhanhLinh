import ListUser from './components/ListUser';

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>[Bài tập] Tạo state toàn cục</h1>
      <ul>
        <li>Sử dụng Redux lưu mảng user (id, userName, gender, dateBirth, address)</li>
        <li>Render danh sách tại component <b>ListUser</b> với Sửa/Xóa</li>
      </ul>
      <ListUser />
    </div>
  );
}
