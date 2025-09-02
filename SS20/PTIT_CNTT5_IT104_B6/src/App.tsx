import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ padding: 24, textAlign: "center" }}>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button onClick={() => setOpen(true)} className="btn success">Mở Modal</button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
