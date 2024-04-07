import React from 'react';
import './aboutUs.css'; 
import Computer from '../../asserts/computer.png';

const AboutUsSection1 = () => {
  return (
    <div className="two-column-section">
      <div className="right-column">
        <img src={Computer} alt="Image" />
      </div>
      <div className="left-column">
        <h3>Web & Mobile App Development</h3>
        <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
        <button>LEARN MORE</button>
      </div>
      
    </div>
  );
}

export default AboutUsSection1;
