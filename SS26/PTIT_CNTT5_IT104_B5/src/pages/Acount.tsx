import { useSearchParams } from "react-router-dom";

export default function Account() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "(không có)";
  return (
    <div>
      <h2>Trang Account</h2>
      <p>Giá trị q trên URL: {q}</p>
    </div>
  );
}
