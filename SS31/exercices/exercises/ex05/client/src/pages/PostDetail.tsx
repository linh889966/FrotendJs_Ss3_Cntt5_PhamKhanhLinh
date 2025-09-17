import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import postsApi from "../api/postsApi";
import type { Post } from "../types/post";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    (async () => {
      if (!id) return;
      const res = await postsApi.getById(id);
      setPost(res.data);
    })();
  }, [id]);

  if (!post) return <div style={{ padding: 16 }}>Đang tải…</div>;

  return (
    <div style={{ padding: 16 }}>
      <p><Link to="/list-post">← Quay lại</Link></p>
      <h2>{post.title}</h2>
      <p><i>{post.publishedAt} • {post.status}</i></p>
      {post.thumbnail && <img src={post.thumbnail} alt="" style={{ maxWidth: 240 }} />}
      <div style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>{post.content}</div>
    </div>
  );
}
