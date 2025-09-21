import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import type { Product } from "../types";

export default function ProductItem({ product }: { product: Product }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <div className="info">
        <h4>{product.name}</h4>
        <p className="price">{product.price} USD</p>
      </div>
      <button className="btn" onClick={() => dispatch(addToCart(product))}>
        Add
      </button>
    </div>
  );
}
