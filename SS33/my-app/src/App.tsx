import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./app/store";
import { addProduct } from "./reducers/productReducer";
import { addToCart } from "./reducers/cartReducer";

function App() {
  const products = useSelector((state: RootState) => state.products.products);
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 Demo Redux Toolkit</h1>

      <h2>Sản phẩm</h2>
      <button
        onClick={() =>
          dispatch(addProduct({ id: Date.now(), name: "Sản phẩm A", price: 100 }))
        }
      >
        ➕ Thêm sản phẩm
      </button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}₫
            <button onClick={() => dispatch(addToCart({ ...p, quantity: 1 }))}>
              🛒 Thêm vào giỏ
            </button>
          </li>
        ))}
      </ul>

      <h2>Giỏ hàng</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
