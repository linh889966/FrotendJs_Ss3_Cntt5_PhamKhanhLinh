import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { toggleMode } from "./features/view/viewSlice";

export default function App() {
  const dispatch = useDispatch();
  const { mode, data } = useSelector((s: RootState) => s.view);

  return (
    <div style={{ maxWidth: 720, margin: "32px auto", textAlign: "center" }}>
      <h2>[Bài tập] Thay đổi chế độ hiển thị dữ liệu</h2>

      <div style={{ margin: "24px 0" }}>
        <button
          onClick={() => dispatch(toggleMode() as any)}
          style={{
            padding: "6px 12px",
            border: "1px solid #ccc",
            borderRadius: 8,
            background: "#f6f6f6",
            cursor: "pointer",
          }}
        >
          {mode === "list" ? "List mode" : "Grid mode"}
        </button>
      </div>

      {mode === "list" ? (
        // Hiển thị dạng danh sách
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
          }}
        >
          {data.map((n) => (
            <div
              key={n}
              style={{
                width: 300,
                height: 48,
                background: "#e74c3c",
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      ) : (
        // Hiển thị dạng lưới
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 80px)",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {data.map((n) => (
            <div
              key={n}
              style={{
                width: 80,
                height: 80,
                background: "#e74c3c",
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
