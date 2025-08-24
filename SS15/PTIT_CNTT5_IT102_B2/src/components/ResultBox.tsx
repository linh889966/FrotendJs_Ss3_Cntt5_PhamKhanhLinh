export default function ResultBox({ color }) {
  return (
    <pre style={{ background: "#f6f7f9", padding: 12, borderRadius: 8 }}>
      {color
        ? `Sau khi submit: { color: '${color}' }`
        : "Trước khi submit: { color: '' }"}
    </pre>
  );
}
