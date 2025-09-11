import { Link } from "react-router-dom"
import { posts } from "../data/posts"

export default function PostList() {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <div className="post-list">
        {posts.map(p => (
          <Link key={p.id} to={`/blog/posts/${p.id}`} className="post-item">
            <div className="post-title">{p.title}</div>
            <div className="post-excerpt">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
