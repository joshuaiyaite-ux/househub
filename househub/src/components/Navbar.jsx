import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HouseHub</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Properties</li>
        <li>Contact</li>
      </ul>
      <button className="btn-primary">Sign In</button>
    </nav>
  );
}

export default Navbar;
