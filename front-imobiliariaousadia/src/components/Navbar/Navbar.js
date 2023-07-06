import React, { useState } from 'react';
import './Navbar.css';
import companyLogo from '../../images/CompanyLogo.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAdmin = localStorage.getItem('isAdmin');
  const isAuthenticated = localStorage.getItem('jwt');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');

    // Navigate to the login page
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <img src={companyLogo} alt="Company Logo" className="logo" />
      <div className="title">Ousadia Imobiliária</div>

      <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-NavLinks ${showMenu ? 'show' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><NavLink to="/buy">Buy</NavLink></li>
        <li><NavLink to="/agents">Agents</NavLink></li>

        {isAuthenticated ? (
          <>
            {isAdmin === true ? (
              <li><NavLink to="/adminpage">Profile</NavLink></li>
            ) : (
              <li><NavLink to={`/profile`}>Profile</NavLink></li>
            )}
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><NavLink to="/signin">Sign In</NavLink></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
