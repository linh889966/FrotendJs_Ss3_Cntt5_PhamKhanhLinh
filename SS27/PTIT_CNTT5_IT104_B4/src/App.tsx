import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProductList from "./pages/ProductList"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}
