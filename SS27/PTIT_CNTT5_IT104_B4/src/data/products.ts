export interface IProduct {
  id: number
  name: string
  price: number
  description: string
}

export const products: IProduct[] = [
  { id: 1, name: "iPhone 15 Pro", price: 29990000, description: "Điện thoại cao cấp chip A17 Pro, camera mạnh." },
  { id: 2, name: "Samsung Galaxy S23 Ultra", price: 25990000, description: "Smartphone flagship với camera 200MP." },
  { id: 3, name: "MacBook Air M2", price: 25990000, description: "Laptop mỏng nhẹ, chip Apple M2 hiệu năng tốt." },
  { id: 4, name: "Dell XPS 13", price: 28990000, description: "Ultrabook viền mỏng, màn InfinityEdge." },
  { id: 5, name: "iPad Pro 12.9", price: 30990000, description: "Máy tính bảng màn Liquid Retina XDR." }
]
