import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-text">Since 2023</div>
      <div className="right-icons">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
