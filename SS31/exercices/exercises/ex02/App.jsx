import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
