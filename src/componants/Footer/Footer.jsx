// src/componants/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-container">
    
        <div className="footer-col">
          <h3 className="footer-title">Ecommerce</h3>
          <p className="footer-text">
            Your one-stop shop for everything you need. We provide the best
            quality products at the best prices.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>


        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/smartphones">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </div>

    
        <div className="footer-col">
          <h3 className="footer-title">Categories</h3>
          <ul className="footer-links">
            <li><Link to="/category/smartphones">Smartphones</Link></li>
            <li><Link to="/category/laptops">Laptops</Link></li>
            <li><Link to="/category/sunglasses">Sunglasses</Link></li>
            <li><Link to="/category/tablets">Tablets</Link></li>
          </ul>
        </div>

      
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> Cairo, Egypt</li>
            <li><FaPhone /> +20 123 456 7890</li>
            <li><FaEnvelope /> support@ecommerce.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Ecommerce. All rights reserved.
        </p>

        <button className="footer-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;