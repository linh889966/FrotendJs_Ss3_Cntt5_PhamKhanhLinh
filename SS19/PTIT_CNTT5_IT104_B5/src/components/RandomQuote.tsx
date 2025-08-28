import { useState } from "react";

const quotes = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
];

export default function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h4>💬 Câu nói truyền cảm hứng hôm nay:</h4>
      <blockquote style={{ fontStyle: "italic", margin: "20px 0", color: "#444" }}>
        "{quote}"
      </blockquote>
      <button
        onClick={handleNewQuote}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: 6,
          background: "#007bff",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}
