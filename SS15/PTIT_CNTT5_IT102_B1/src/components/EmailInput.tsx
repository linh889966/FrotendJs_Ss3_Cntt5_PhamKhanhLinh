export default function EmailInput({ value, onChange }) {
  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        value={value}
        placeholder="nva@gmail.com"
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
