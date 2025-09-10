import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams();
  const init = searchParams.get("studentName") ?? "";
  const [keyword, setKeyword] = useState<string>(init);

  useEffect(() => setKeyword(init), [init]);

  const onSearch = () => {
    if (keyword.trim()) setSearchParams({ studentName: keyword.trim() });
    else setSearchParams({});
  };

  return (
    <div style={{ padding: 24, maxWidth: 640, margin: "0 auto" }}>
      <h2>[Bài tập] Truyền từ khóa và lấy giá trị tìm kiếm lên url</h2>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          placeholder="Nhập từ khóa tìm kiếm"
          style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button
          onClick={onSearch}
          style={{
            padding: "10px 16px",
            borderRadius: 6,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Tìm kiếm
        </button>
      </div>
      <div style={{ marginTop: 20 }}>
        <strong>Giá trị trên URL (studentName):</strong>{" "}
        <code>{searchParams.get("studentName") ?? "(trống)"}</code>
      </div>
    </div>
  );
}
