import { useState } from "react";
import { Product } from "../types/product";

interface Props {
  onAdd: (p: Product) => void;
}

export default function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [inStock, setInStock] = useState(true);

  const handleSubmit = () => {
    if (!name || price <= 0) return;
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      inStock,
    };
    onAdd(newProduct);
    setName("");
    setPrice(0);
    setInStock(true);
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg mt-6">
      <h2 className="font-semibold mb-3">Thêm sản phẩm mới</h2>
      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded w-48"
        />
        <input
          type="number"
          placeholder="Giá (đ)"
          value={price || ""}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border px-3 py-2 rounded w-32"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={inStock}
            onChange={() => setInStock(!inStock)}
          />
          Còn hàng
        </label>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Thêm
        </button>
      </div>
    </div>
  );
}
