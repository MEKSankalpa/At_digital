import React from 'react';
import logoImage from '../../asserts/logo.png';
import '../navbar/navbar.css'
import { toggleMenu } from './toggleMenu';

const Navbar = () => {
  return (
    <nav className="navbar" id="myNav">
      <div className="logo">
      <img src={logoImage} alt="Logo" />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="hamburger-menu">
    <div className="menu-icon" onClick={toggleMenu}>
    <i className="fas fa-bars"></i>
    </div>
  </div>
    </nav>
  );
}

export default Navbar;