import React from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = { product: Product };

const label: React.CSSProperties = { fontWeight: 700, marginRight: 6 };
const line: React.CSSProperties = { margin: "6px 0", fontSize: 18 };
const vnd = (n: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(n);

export default function ProductDetail({ product }: Props) {
  return (
    <section style={{ maxWidth: 720, margin: "24px auto", lineHeight: 1.6 }}>
      <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
        Dữ liệu trong component con
      </h3>
      <p style={line}><span style={label}>Id:</span>{product.id}</p>
      <p style={line}><span style={label}>Product name:</span>{product.name}</p>
      <p style={line}><span style={label}>Price:</span>{vnd(product.price)}</p>
      <p style={line}><span style={label}>Quantity:</span>{product.quantity}</p>
    </section>
  );
}
