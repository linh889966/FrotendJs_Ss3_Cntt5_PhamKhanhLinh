import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import type { PostStatus, Post } from "../types/post";

type Props = {
  initial?: Partial<Post>;
  onSubmit: (data: Omit<Post, "id">) => Promise<void> | void;
};

export default function PostForm({ initial, onSubmit }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [thumbnail, setThumbnail] = useState(initial?.thumbnail ?? "");
  const [status, setStatus] = useState<PostStatus>((initial?.status as PostStatus) ?? "draft");
  const [content, setContent] = useState<string>(initial?.content ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: Omit<Post, "id"> = {
      title,
      thumbnail,
      status,
      content,
      publishedAt: initial?.publishedAt ?? new Date().toISOString().slice(0, 10)
    };
    await onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tiêu đề" required />
      <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="URL hình ảnh" />
      <select value={status} onChange={(e) => setStatus(e.target.value as PostStatus)}>
        <option value="draft">Nháp</option>
        <option value="published">Đã xuất bản</option>
        <option value="blocked">Ngừng xuất bản</option>
      </select>

      <div data-color-mode="light">
        <MDEditor value={content} onChange={(v) => setContent(v ?? "")} />
      </div>

      <button type="submit">Lưu</button>
    </form>
  );
}
