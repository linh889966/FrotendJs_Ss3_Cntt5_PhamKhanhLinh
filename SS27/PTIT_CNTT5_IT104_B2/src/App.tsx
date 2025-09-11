import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px", background: "#1976d2", padding: "10px" }}>
        <Link to="/products" style={{ color: "white", marginRight: "15px" }}>Danh sách sản phẩm</Link>
      </nav>

      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
