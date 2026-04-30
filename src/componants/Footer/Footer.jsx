import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer_container">

        {/* Brand */}
        <div className="footer_col brand">
          <h2>Marketta</h2>
          <p>
            Your one-stop shop for everything you need. Quality products, fast delivery, and best prices.
          </p>
        </div>

        {/* Links */}
        <div className="footer_col">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/accessorise">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Customer */}
        <div className="footer_col">
          <h3>Customer Service</h3>
          <Link to="#">FAQ</Link>
          <Link to="#">Shipping</Link>
          <Link to="#">Returns</Link>
          <Link to="#">Privacy Policy</Link>
        </div>

        {/* Contact */}
        <div className="footer_col">
          <h3>Get in Touch</h3>
          <p>Email: support@marketta.com</p>
          <p>Phone: +20 100 000 0000</p>
        </div>

      </div>

      <div className="footer_bottom">
        © 2026 Marketta. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;