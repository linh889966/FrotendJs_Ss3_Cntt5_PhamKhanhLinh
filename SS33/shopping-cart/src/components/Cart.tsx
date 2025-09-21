import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectSubtotal, selectNotice, clearNotice } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { useEffect } from "react";

export default function Cart() {
  const items = useSelector(selectCart);
  const subtotal = useSelector(selectSubtotal);
  const notice = useSelector(selectNotice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => dispatch(clearNotice()), 1500);
    return () => clearTimeout(t);
  }, [notice, dispatch]);

  return (
    <div className="panel">
      <div className="panel-title">Your Cart</div>
      <table className="cart">
        <thead>
          <tr>
            <th>STT</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr><td colSpan={5} style={{ textAlign: "center" }}>There are 0 items in your shopping cart.</td></tr>
          ) : (
            items.map((it, i) => (
              <CartItem key={it.id} idx={i + 1} {...it} />
            ))
          )}
        </tbody>
      </table>

      <div className="total"> {subtotal} USD </div>

      {notice && <div className="alert success">Add to cart successfully</div>}
    </div>
  );
}
