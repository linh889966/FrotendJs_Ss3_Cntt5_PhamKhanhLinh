import React, { useState } from "react";

type Product = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

export default function ProductForm() {
  const [form, setForm] = useState<Product>({
    productCode: "",
    productName: "",
    price: 0,
    quantity: 1,
  });
  const [submitted, setSubmitted] = useState<Product | null>(null);

  const update = (k: keyof Product, v: string) =>
    setForm((s) => ({
      ...s,
      [k]: k === "price" || k === "quantity" ? Number(v) : v,
    }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(form);
  };

  return (
    <div style={{ fontFamily: "system-ui", maxWidth: 520, margin: "32px auto" }}>
      <div style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 12 }}>
        <h3 style={{ marginTop: 0 }}>Thêm mới sản phẩm</h3>
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
          <label>
            Mã sản phẩm
            <input
              value={form.productCode}
              onChange={(e) => update("productCode", e.target.value)}
              placeholder="SP001"
            />
          </label>
          <label>
            Tên sản phẩm
            <input
              value={form.productName}
              onChange={(e) => update("productName", e.target.value)}
              placeholder="Cam da xanh"
            />
          </label>
          <label>
            Giá
            <input
              type="number"
              min={0}
              value={form.price}
              onChange={(e) => update("price", e.target.value)}
              placeholder="20000"
            />
          </label>
          <label>
            Số lượng
            <input
              type="number"
              min={1}
              value={form.quantity}
              onChange={(e) => update("quantity", e.target.value)}
              placeholder="10"
            />
          </label>
          <button
            type="submit"
            style={{
              padding: "10px 12px",
              background: "#1d4ed8",
              color: "#fff",
              border: 0,
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Đăng ký
          </button>
        </form>
      </div>

      <pre
        style={{
          marginTop: 16,
          background: "#f8fafc",
          padding: 12,
          borderRadius: 8,
          overflow: "auto",
        }}
      >
        {submitted ? JSON.stringify(submitted, null, 2) : "Chưa submit"}
      </pre>
    </div>
  );
}
