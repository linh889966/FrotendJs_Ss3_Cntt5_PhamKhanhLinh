import React from "react";

type Props = {
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
};

export default function Modal({
  open, title = "Xác nhận", children,
  onClose, onConfirm, cancelText = "Hủy", confirmText = "Xác nhận"
}: Props) {
  if (!open) return null;

  const backdrop: React.CSSProperties = {
    position: "fixed", inset: 0, background: "rgba(0,0,0,.35)",
    display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50
  };
  const box: React.CSSProperties = {
    width: 420, background: "#fff", borderRadius: 8, padding: 16,
    boxShadow: "0 10px 25px rgba(0,0,0,.15)"
  };

  return (
    <div style={backdrop} onClick={onClose}>
      <div style={box} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ margin: 0, marginBottom: 8 }}>{title}</h3>
        <div style={{ marginBottom: 16 }}>{children}</div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button onClick={onClose}>{cancelText}</button>
          <button
            onClick={onConfirm}
            style={{ background: "#1677ff", color: "#fff", border: "none", padding: "6px 12px", borderRadius: 6 }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
