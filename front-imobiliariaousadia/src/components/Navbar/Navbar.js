import React, { useState } from 'react';
import './Navbar.css';
import companyLogo from '../../images/CompanyLogo.png';
import {NavLink} from "react-router-dom"
const Navbar = () => {

  return (
    <nav className="navbar">
      <img src={companyLogo} alt="Company Logo" className="logo" />
      <div className="title">Ousadia Imobiliária</div>

      <ul className={`nav-NavLinks ${showMenu ? 'show' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="/">Sell</a></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><a href="/">Buy</a></li>
        <li><a href="/">Agents</a></li>
        <li><a href="/">Sign In</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
