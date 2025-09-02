import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer đã được dọn dẹp khi component unmount");
    };
  }, []);

  return (
    <div className="card">
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị: {count}</p>
    </div>
  );
}
