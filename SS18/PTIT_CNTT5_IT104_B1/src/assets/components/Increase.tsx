import React, { useReducer } from "react";

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

const Increase: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase
      </button>
    </div>
  );
};

export default Increase;
