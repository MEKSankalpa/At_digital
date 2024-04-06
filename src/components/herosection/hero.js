import React from 'react';
import './hero.css'; // You can create a CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <div className="text-button-container">
          <h1 className="text">We crush your competitors, goals, and sales records - without the B.S</h1>
          <button className="buttonHero">Get free consultation</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
