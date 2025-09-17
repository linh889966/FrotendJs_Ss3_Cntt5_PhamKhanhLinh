import type { Post } from "../types/post";

type Props = {
  rows: Post[];
  onEdit: (p: Post) => void;
  onDelete: (id: number) => void;
  onBlock: (p: Post) => void;
};

const label = (s: Post["status"]) =>
  s === "published" ? "Đã xuất bản" : s === "blocked" ? "Ngừng xuất bản" : "Nháp";

export default function PostTable({ rows, onEdit, onDelete, onBlock }: Props) {
  return (
    <table border={1} cellPadding={8} cellSpacing={0} width="100%">
      <thead>
        <tr>
          <th>STT</th><th>Tiêu đề</th><th>Ngày viết</th><th>Trạng thái</th><th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((p, i) => (
          <tr key={p.id}>
            <td>{i + 1}</td>
            <td>{p.title}</td>
            <td>{p.publishedAt}</td>
            <td>{label(p.status)}</td>
            <td style={{ display: "flex", gap: 8 }}>
              <button onClick={() => onBlock(p)}>{p.status === "published" ? "Chặn" : "Bỏ chặn"}</button>
              <button onClick={() => onEdit(p)}>Sửa</button>
              <button onClick={() => onDelete(p.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
