import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <div className="logo-circle">s</div>
          <span className="logo-text">Mohamed safvan vp</span>
        </div>

        {/* Center Section - Navigation */}
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#portfolio">Portfolio</a>
          {/* <a href="#blog">Blog</a> */}
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Section - Copyright */}
        <div className="footer-copyright">
          © 2025 Mohamed safvan vp.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
