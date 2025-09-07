import React from "react";
import { Row, Col } from "antd";
import ProductCard, { Product } from "./ProductCard";
import "./product-card.css";

const data: Product[] = [
  {
    id: "1",
    name: "MacBook Air 2018",
    description:
      "The reason I am selling the machine is because it is too much power for what I need",
    price: 30000000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "MacBook Pro 2019",
    description:
      "The reason I am selling the machine is because it is too much power for what I need.",
    price: 30000000,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
];

const ProductList: React.FC = () => {
  const handleDetail = (id: string) => {
    console.log("detail:", id);
  };

  return (
    <Row gutter={[16, 16]} justify="start">
      {data.map((p) => (
        <Col key={p.id} xs={24} sm={12} md={12} lg={8} xl={6}>
          <ProductCard item={p} onDetail={handleDetail} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
