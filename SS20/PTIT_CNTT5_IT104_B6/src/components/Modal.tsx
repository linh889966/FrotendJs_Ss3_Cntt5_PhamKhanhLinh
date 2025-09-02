import { useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Đăng nhập</h2>
        <input ref={inputRef} type="text" placeholder="Nhập tên người dùng" className="input" />
        <button onClick={onClose} className="btn danger">Đóng</button>
      </div>
    </div>
  );
}
