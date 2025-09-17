import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  author: string;
};

export default function ListPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3007/posts")
      .then(res => setPosts(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <ul>
      {posts.map(p => (
        <li key={p.id}>
          <b>{p.title}</b> – <i>{p.author}</i>
        </li>
      ))}
    </ul>
  );
}
