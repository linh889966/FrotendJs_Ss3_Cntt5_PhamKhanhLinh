export default function PostTable({ rows=[], onEdit, onDelete }) {
  return (
    <table>
      <thead><tr><th>STT</th><th>Tiêu đề</th><th>Ngày viết</th><th>Trạng thái</th><th>Chức năng</th></tr></thead>
      <tbody>
        {rows.map((p, i)=>(
          <tr key={p.id}>
            <td>{i+1}</td>
            <td>{p.title}</td>
            <td>{p.publishedAt}</td>
            <td>{p.status}</td>
            <td>
              <button onClick={()=>onEdit(p)}>Sửa</button>
              <button onClick={()=>onDelete(p.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
