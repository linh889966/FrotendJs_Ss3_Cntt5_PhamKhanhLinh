import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("studentName") ?? "";
  const [keyword, setKeyword] = useState<string>(initial);

  useEffect(() => setKeyword(initial), [initial]);

  const applySearch = () => {
    const v = keyword.trim();
    v ? setSearchParams({ studentName: v }) : setSearchParams({});
  };

  return (
    <div style={{ padding: 24, maxWidth: 640, margin: "0 auto" }}>
      <h2>Tìm sinh viên</h2>
      <div style={{ display: "flex", gap: 12 }}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applySearch()}
          placeholder="Nhập từ khóa tìm kiếm"
          style={{ flex: 1, padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button
          onClick={applySearch}
          style={{ padding: "10px 16px", borderRadius: 6, border: "none", background: "#2563eb", color: "#fff", fontWeight: 600 }}
        >
          Tìm kiếm
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Kết quả:</strong>{" "}
        <code>{searchParams.get("studentName") ?? "(trống)"}</code>
      </div>
    </div>
  );
}
