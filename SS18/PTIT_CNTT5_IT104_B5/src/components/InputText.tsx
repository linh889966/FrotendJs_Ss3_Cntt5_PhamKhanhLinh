import React, { useReducer } from "react";

type State = {
  text: string;
};

type Action = {
  type: "CHANGE";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE":
      return { text: action.payload };
    default:
      return state;
  }
};

const InputText: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Input change</h2>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "CHANGE", payload: e.target.value })
        }
        style={{ padding: "5px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "15px", fontSize: "18px" }}>{state.text}</p>
    </div>
  );
};

export default InputText;
