import { useReducer } from "react";

type Action = { type: "inc" } | { type: "dec" };
function reducer(state: number, action: Action) {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="counter">
      <h1 className="count">Số đếm: {count}</h1>
      <div className="actions">
        <button className="btn" onClick={() => dispatch({ type: "inc" })}>
          Tăng
        </button>
        <button className="btn" onClick={() => dispatch({ type: "dec" })}>
          Giảm
        </button>
      </div>
    </div>
  );
}
