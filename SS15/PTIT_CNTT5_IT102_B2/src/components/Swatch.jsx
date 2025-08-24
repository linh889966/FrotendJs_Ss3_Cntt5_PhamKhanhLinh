export default function Swatch({ color }) {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        border: "1px solid #ccc",
        background: color,
      }}
    />
  );
}
