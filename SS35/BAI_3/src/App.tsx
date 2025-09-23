import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { toggleTheme } from "./features/theme/themeSlice";

export default function App() {
  const mode = useSelector((s: RootState) => s.theme.mode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: mode === "light" ? "#fff" : "#333",
        color: mode === "light" ? "#000" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: "10px 20px",
          border: "1px solid #888",
          borderRadius: "8px",
          background: mode === "light" ? "#f2f2f2" : "#555",
          color: mode === "light" ? "#000" : "#fff",
          cursor: "pointer",
        }}
      >
        {mode === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
