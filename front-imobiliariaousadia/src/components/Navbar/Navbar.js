import React, { useState } from 'react';
import './Navbar.css';
import companyLogo from '../../images/CompanyLogo.png';
import {NavLink} from "react-router-dom"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <img src={companyLogo} alt="Company Logo" className="logo" />
      <div className="title">Ousadia Imobiliária</div>
      <button className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <ul className={`nav-NavLinks ${showMenu ? 'show' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="/">Sell</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Buy</a></li>
        <li><a href="/">Agents</a></li>
        <li><a href="/">Sign In</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
