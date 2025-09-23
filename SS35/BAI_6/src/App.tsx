import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { setLanguage } from "./features/language/languageSlice";

const translations = {
  en: {
    title: "Rikkei Academy",
    select: "English",
    other: "Vietnamese",
  },
  vi: {
    title: "Học viện Rikkei",
    select: "Tiếng Việt",
    other: "English",
  },
};

export default function App() {
  const dispatch = useDispatch();
  const current = useSelector((s: RootState) => s.language.current);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>[Bài tập] Thay đổi chế độ ngôn ngữ</h2>

      <select
        value={current}
        onChange={(e) => dispatch(setLanguage(e.target.value as "en" | "vi"))}
        style={{
          padding: "8px 12px",
          fontSize: 16,
          marginTop: 24,
          marginBottom: 24,
        }}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h3 style={{ marginTop: 40 }}>
        {translations[current].title}
      </h3>
    </div>
  );
}
