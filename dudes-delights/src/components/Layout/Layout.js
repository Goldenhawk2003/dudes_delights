import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Dude's Delights</Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/custom">Custom Orders</Link>
      </nav>
    </header>
  );
}

export default Header;