import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component đã render lần đầu.");
  }, []);

  return (
    <div className="card">
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
    </div>
  );
}
