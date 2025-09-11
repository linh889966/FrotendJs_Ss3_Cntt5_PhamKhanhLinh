import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import BlogLayout from "./layouts/BlogLayout"
import PostList from "./pages/PostList"
import PostDetail from "./pages/PostDetail"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/blog/posts" replace />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Navigate to="posts" replace />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/blog/posts" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
