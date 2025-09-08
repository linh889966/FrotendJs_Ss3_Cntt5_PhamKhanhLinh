import { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import Pagination from "./components/Pagination";
import { Product } from "./types/product"

export default function App() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop Dell XPS 13", price: 29990000, inStock: true },
    { id: 2, name: "Chuột Logitech MX Master 3S", price: 2490000, inStock: false },
    { id: 3, name: "Bàn phím Keychron K6", price: 2190000, inStock: true },
  ]);
  const [page, setPage] = useState(1);
  const perPage = 3;

  const handleAdd = (p: Product) => setProducts([...products, p]);
  const handleToggle = (id: number) =>
    setProducts(products.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p)));
  const handleDelete = (id: number) =>
    setProducts(products.filter((p) => p.id !== id));

  const paginated = products.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <ProductForm onAdd={handleAdd} />
        <ProductTable
          products={paginated}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <Pagination
          total={products.length}
          perPage={perPage}
          current={page}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
