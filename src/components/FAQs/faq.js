import React from 'react';
import './faq.css'; 

const FQASection = () => {
  return (
    <div className="faq-container">
     <h3>Frequently asked questions</h3>

      <div className="column-one">
        <div className='faq-column'>
           <div>
              <p className='faq-column-p-open'>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
           </div>
           <div><span>-</span></div>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>  
        </div> 
 
        <div className="column-two">
         <div className='faq-column'>
            <div>
               <p className='faq-column-p'>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
            </div>
            <div><span>+</span></div>
         </div>
         </div> 
      
        <div className="column-two">
        <div className='faq-column'>
           <div>
              <p className='faq-column-p'>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
           </div>
           <div><span>+</span></div>
        </div>
        </div> 
      
    </div>
  );
}

export default FQASection;
