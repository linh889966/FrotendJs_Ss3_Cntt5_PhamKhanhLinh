import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { increase, decrease, reset } from "./counterSlice";

export default function Counter() {
  const count = useSelector((s: RootState) => s.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Count: {count}</h1>
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
