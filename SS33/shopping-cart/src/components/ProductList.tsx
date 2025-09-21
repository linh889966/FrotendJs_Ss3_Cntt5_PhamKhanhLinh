import { useSelector } from "react-redux";
import type { RootState } from "../store";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const products = useSelector((s: RootState) => s.products.items);
  return (
    <div className="panel">
      <div className="panel-title">List Products</div>
      <div className="list">
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
