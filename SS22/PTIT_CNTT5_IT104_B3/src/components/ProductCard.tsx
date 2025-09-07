import React from "react";
import { Card, Button } from "antd";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;           // đơn vị: VND
  image: string;
};

type Props = {
  item: Product;
  onDetail?: (id: string) => void;
};

const currencyVN = (v: number) =>
  v.toLocaleString("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });

const ProductCard: React.FC<Props> = ({ item, onDetail }) => {
  return (
    <Card
      hoverable
      cover={<img src={item.image} alt={item.name} style={{ height: 180, objectFit: "cover" }} />}
      style={{ width: 360 }}
      bodyStyle={{ padding: 16 }}
    >
      <h3 style={{ marginBottom: 8 }}>{item.name}</h3>
      <p style={{ color: "#666", minHeight: 64, marginBottom: 16 }}>{item.description}</p>

      <div className="pc-footer">
        <Button type="primary" size="middle" onClick={() => onDetail?.(item.id)}>
          Xem chi tiết
        </Button>
        <span className="pc-price">{currencyVN(item.price)}</span>
      </div>
    </Card>
  );
};

export default ProductCard;
