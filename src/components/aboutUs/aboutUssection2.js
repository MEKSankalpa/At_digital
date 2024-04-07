import React from 'react';
import './aboutUs.css'; 
import Search from '../../asserts/search.png';

const AboutUsSection2 = () => {
  return (
    <div className="two-column-section">
      
      <div className="left-column">
        <h3>Digital Strategy Consulting</h3>
        <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>   
        <button>LEARN MORE</button>
      </div>

      <div className="right-column">
        <img src={Search } alt="Image" />
      </div>
      
    </div>
  );
}

export default AboutUsSection2;
