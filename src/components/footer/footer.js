import React from 'react';
import './footer.css';
import logoImage from '../../asserts/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className='footer-logo'>
          <img
            src={logoImage}
            alt="Footer image"
          />
          <div className='footer-goal'>
          <p>Your Goal is Our Target. Not Anything in Between. We use online marketing platforms and tools to achieve a single objective - your business results.</p>
          </div>
         
          </div>
         <div className='footer-right'>
            <div className="footer-links">
                <h3>Our Technologies</h3>
                <a href="#">ReactJS</a>
                <a href="#">Gatsby</a>
                <a href="#">NextJS</a>
                <a href="#">NodeJS</a>
            </div>
            <div className="footer-links">
                <h3>Our Services</h3>
                <a href="#">Social Media Marketing</a>
                <a href="#">Web & Mobile App Development</a>
                <a href="#">Data & Analytics</a>
            </div>
         </div>
         
        </div>
        <hr className='line'/>
        <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">|</a> 
            <a href="#">Terms & Conditions</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
