import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end className="link">Home</NavLink>
        <NavLink to="/product" className="link">Product</NavLink>
        <NavLink to="/detail" className="link">Detail</NavLink>
      </nav>
    </header>
  )
}
