import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
