import React from "react";
import './Nav.css'
const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
            SHOES.
          </p>
          <div className="hero-btn">
            <button id="st">SHop Now</button>
            <button>Cataegory</button>
          </div>
          <div className="shopping">
            <p>Also Available on</p>
            <div className="brand-icon" id="icon">
              <img src="/Amazon.png" alt="Amazon" />
               <img src="/Flipcart.png" alt="flipcart" />
            </div>
          </div>
        </div>
        <div className="hero-image">
         <img src="/Shoe.png" alt="shoe" />
         </div>
      </main>
    </div>
  );
};

export default Hero;
