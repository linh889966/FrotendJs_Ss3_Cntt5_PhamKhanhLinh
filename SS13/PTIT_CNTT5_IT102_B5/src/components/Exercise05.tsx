import React from "react";
import ProductDetail, { Product } from "./ProductDetail";

export default function Exercise04() {
  const [product] = React.useState<Product>({
    id: 1,
    name: "Bưởi ba roi",
    price: 12000,
    quantity: 6,
  });

  return <ProductDetail product={product} />;
}
