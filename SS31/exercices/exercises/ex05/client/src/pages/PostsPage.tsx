import { useEffect, useState } from "react";
import postsApi from "../api/postsApi";
import type { Post } from "../types/post";
import PostTable from "../components/PostTable";
import Modal from "../components/Modal";
import PostForm from "../components/PostForm";

export default function PostsPage() {
  const [rows, setRows] = useState<Post[]>([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selected, setSelected] = useState<Post | null>(null);
  const [creating, setCreating] = useState(false);

  const load = async () => {
    const res = await postsApi.getAll({ _sort: "id", _order: "desc" });
    setRows(res.data);
  };

  useEffect(() => { void load(); }, []);

  const askBlock = (p: Post) => { setSelected(p); setConfirmOpen(true); };
  const doBlock = async () => {
    if (!selected) return;
    await postsApi.toggleBlock(selected);
    setConfirmOpen(false); setSelected(null);
    await load();
  };

  const onCreate = async (data: Omit<Post, "id">) => {
    await postsApi.create(data);
    setCreating(false);
    await load();
  };

  const onEdit = (p: Post) => { setSelected(p); setCreating(true); };
  const onDelete = async (id: number) => {
    await postsApi.remove(id);
    await load();
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Quản lý bài viết</h2>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => { setSelected(null); setCreating(true); }}>Thêm mới bài viết</button>
      </div>

      {creating && (
        <div style={{ marginBottom: 16 }}>
          <PostForm initial={selected ?? undefined} onSubmit={onCreate} />
        </div>
      )}

      <PostTable rows={rows} onEdit={onEdit} onDelete={onDelete} onBlock={askBlock} />

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={doBlock}
        title="Xác nhận"
        confirmText="Xác nhận"
        cancelText="Hủy"
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ color: "#faad14" }}>⚠️</span>
          <span>
            Bạn có chắc muốn {selected?.status === "published" ? "ngừng xuất bản" : "xuất bản lại"} bài viết?
          </span>
        </div>
      </Modal>
    </div>
  );
}
