import React from "react";
import logo from "../logo/logo-w.png";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/">
            <img src={logo} alt="logo" className="footer-logo" />
          </Link>
          <p>
            Discover the latest in men's and women's fashion, shoes, and accessories. Shop our wide range of high-quality products and stay stylish.
          </p>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fashion Frontier. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
