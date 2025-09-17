import { Routes, Route, Navigate, Link } from "react-router-dom";
import ListPost from "./pages/ListPost";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <header style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <Link to="/list-post">Danh sách bài viết</Link>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/list-post" replace />} />
        <Route path="/list-post" element={<ListPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
