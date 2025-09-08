import { Product } from "../types/product";

interface Props {
  products: Product[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ProductTable({ products, onToggle, onDelete }: Props) {
  return (
    <div className="bg-white shadow p-4 rounded-lg mt-6">
      <h2 className="font-semibold mb-3"> Danh sách sản phẩm</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Tên sản phẩm</th>
            <th className="p-2">Giá</th>
            <th className="p-2">Trạng thái</th>
            <th className="p-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td className="p-2 text-green-600 font-semibold">
                {p.price.toLocaleString()} đ
              </td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    p.inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {p.inStock ? "Còn hàng" : "Hết hàng"}
                </span>
              </td>
              <td className="p-2 flex gap-2">
                <button
                  onClick={() => onToggle(p.id)}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded"
                >
                  Đánh dấu
                </button>
                <button
                  onClick={() => onDelete(p.id)}
                  className="bg-red-100 text-red-600 px-3 py-1 rounded"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
