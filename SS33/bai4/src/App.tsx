import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { addProduct } from "./reducers/productReducer";
import { addToCart } from "./reducers/cartReducer";
import { addNotification } from "./reducers/notificationReducer";

export default function App() {
  const products = useSelector((s: RootState) => s.products.products);
  const cart = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h1>Bài 4 – Reducers</h1>
      <button onClick={() => {
        const p = { id: Date.now(), name: "SP A", price: 100 };
        dispatch(addProduct(p));
        dispatch(addNotification({ type: "success", message: "Đã thêm sản phẩm" }));
      }}>Thêm sản phẩm</button>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - {p.price}
            <button onClick={() => dispatch(addToCart({ ...p, quantity: 1 }))}>Thêm giỏ</button>
          </li>
        ))}
      </ul>

      <h3>Giỏ hàng</h3>
      <ul>{cart.map(i => (<li key={i.id}>{i.name} x {i.quantity}</li>))}</ul>
    </div>
  );
}
