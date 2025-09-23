import { useDispatch, useSelector } from "react-redux";
import { generateList, clearList } from "./features/numbers/numbersSlice";
import type { RootState } from "./app/store";

export default function App() {
  const dispatch = useDispatch();
  const list = useSelector((s: RootState) => s.numbers.list);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", lineHeight: 1.6 }}>
      <h2 style={{ textAlign: "center" }}>[Bài tập] Tạo danh sách số ngẫu nhiên</h2>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h3 style={{ fontWeight: 700 }}>
          List number: [{list.join(",")}]
        </h3>

        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={() => dispatch(generateList() as any)}>
            Random number
          </button>
          <button onClick={() => dispatch(clearList() as any)}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
