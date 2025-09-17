import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postsApi from "../api/postsApi";

export default function ListPost() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await postsApi.getAll({ _sort: "id", _order: "desc" });
      setRows(data);
    })();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Danh sách bài viết</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>{p.publishedAt}</td>
              <td>{p.status}</td>
              <td><Link to={`/post/${p.id}`}>Xem</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
