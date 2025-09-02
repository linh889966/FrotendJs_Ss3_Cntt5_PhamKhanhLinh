import { useReducer, ChangeEvent } from "react";

type State = { name: string; email: string };
type Action =
  | { type: "update"; field: keyof State; value: string }
  | { type: "reset" };

const initialState: State = { name: "", email: "" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "update", field: e.target.name as keyof State, value: e.target.value });
  };

  return (
    <div className="card">
      <h2>User Information Form</h2>

      <label className="label">Tên:</label>
      <input
        className="input"
        name="name"
        value={state.name}
        onChange={onChange}
        placeholder="Nhập tên"
      />

      <label className="label">Email:</label>
      <input
        className="input"
        type="email"
        name="email"
        value={state.email}
        onChange={onChange}
        placeholder="Nhập email"
      />

      <div className="preview">
        <strong>Thông tin người dùng:</strong>
        <p>Tên: {state.name || "(Chưa nhập)"}</p>
        <p>Email: {state.email || "(Chưa nhập)"}</p>
      </div>

      <div className="row">
        <button className="btn" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}
