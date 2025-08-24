export default function ColorInput({ value, onChange }) {
  return (
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
