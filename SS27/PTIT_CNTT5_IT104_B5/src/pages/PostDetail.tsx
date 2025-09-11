import { useParams } from "react-router-dom"
import { posts } from "../data/posts"

export default function PostDetail() {
  const { id } = useParams()
  const post = posts.find(p => p.id === Number(id))
  if (!post) return <h3>Bài viết không tồn tại.</h3>
  return (
    <article className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}
