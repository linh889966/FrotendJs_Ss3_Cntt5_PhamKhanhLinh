import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

export default function App() {
  return (
    <div className="layout">
      <h2 className="title">Shopping Cart</h2>
      <div className="grid">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
