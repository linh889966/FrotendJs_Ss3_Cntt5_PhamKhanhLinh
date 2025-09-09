import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/product" className={linkClass}>
          Product
        </NavLink>
        <NavLink to="/detail" className={linkClass}>
          Detail
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
