import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
    </nav>
  );
}
