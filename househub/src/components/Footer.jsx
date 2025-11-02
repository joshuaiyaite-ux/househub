import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>HouseHub</h3>
          <p>Trusted real estate platform connecting buyers and agents across Kenya.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Joshua Gabriel</p>
          <p>Phone: 0759 221 634</p>
          <p>Email: joshuaiyaite@gmail.com</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Properties</p>
          <p>Contact</p>
        </div>
      </div>
      <p className="copy">© 2025 HouseHub. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
