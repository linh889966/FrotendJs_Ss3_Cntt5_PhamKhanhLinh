import { useDispatch } from "react-redux";
import { removeItem, updateQty } from "../features/cart/cartSlice";

type Props = { idx: number; id: number; name: string; price: number; qty: number };

export default function CartItem({ idx, id, name, price, qty }: Props) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{idx}</td>
      <td>{name}</td>
      <td>{price} USD</td>
      <td>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => dispatch(updateQty({ id, qty: Number(e.target.value) }))}
          className="qty"
        />
      </td>
      <td className="action">
        <button onClick={() => dispatch(updateQty({ id, qty }))} className="btn sm">
          Update
        </button>
        <button onClick={() => dispatch(removeItem(id))} className="btn sm danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
