import React from 'react';
import logoImage from '../../asserts/logo.png';
import '../navbar/navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logoImage} alt="Logo" />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;