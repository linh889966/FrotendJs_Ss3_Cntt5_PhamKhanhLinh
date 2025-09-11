import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Sản phẩm không tồn tại.</h2>;
  }

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <h3>{product.name}</h3>
      <p><strong>Giá:</strong> {product.price}</p>
      <p><strong>Mô tả:</strong> {product.description}</p>
      <Link to="/products">Quay lại danh sách</Link>
    </div>
  );
}
