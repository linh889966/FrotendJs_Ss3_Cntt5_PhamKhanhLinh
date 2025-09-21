import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./app/store";
import { increment, decrement, addByAmount } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 24 }}>
      <h1>Redux Store Demo</h1>
      <p>Giá trị: {count}</p>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())} style={{ margin: "0 8px" }}>
        +1
      </button>
      <button onClick={() => dispatch(addByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
