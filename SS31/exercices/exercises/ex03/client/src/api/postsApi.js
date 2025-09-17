import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import postsApi from "../api/postsApi";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => setPost(await postsApi.getById(id)))();
  }, [id]);

  if (!post) return <div style={{ padding:16 }}>Đang tải…</div>;

  return (
    <div style={{ padding: 16 }}>
      <p><Link to="/list-post">← Quay lại</Link></p>
      <h2>{post.title}</h2>
      <p><i>{post.publishedAt} • {post.status}</i></p>
      <img src={post.thumbnail} alt="" style={{ maxWidth: 240 }} />
      <div style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>{post.content}</div>
    </div>
  );
}
