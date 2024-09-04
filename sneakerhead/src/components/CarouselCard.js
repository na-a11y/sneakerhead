import React, { useState } from 'react';
import '../styles/CarouselCard.css';  // Import the CSS file

const CarouselCard = () => {
  const [activeSet, setActiveSet] = useState(1);
  const [animating, setAnimating] = useState(false);

  const imageSets = {
    1: [
      'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_262.jpg?v=1715327085&width=1425',
      'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_263.jpg?v=1715327088&width=1425',
    ],
    2: [
      'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/1.png?v=1717490452&width=1425',
      'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/2.png?v=1717490452&width=1425',
    ],
  };

  // Handle dot click to trigger animations
  const handleDotClick = (setNumber) => {
    if (setNumber !== activeSet) {
      setAnimating(true); // Start animation
      setTimeout(() => {
        setActiveSet(setNumber);
        setAnimating(false); // Reset after animation
      }, 500); // Match duration with CSS transition
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="half">
          <img
            src={imageSets[activeSet][0]}
            alt="First Half"
            className={`image ${
              animating
                ? activeSet === 1
                  ? 'out-up'
                  : 'in-down'
                : activeSet === 1
                ? 'animate-up'
                : 'animate-down'
            }`}
          />
        </div>
        <div className="half">
          <img
            src={imageSets[activeSet][1]}
            alt="Second Half"
            className={`image ${
              animating
                ? activeSet === 1
                  ? 'in-up'
                  : 'out-down'
                : activeSet === 1
                ? 'animate-down'
                : 'animate-up'
            }`}
          />
        </div>
        {/* Centered text for the entire card */}
        <div className="centered-text">Sneakerhead</div>
      </div>
      <div className="dot-container">
        <span
          className={`dot ${activeSet === 1 ? 'active' : ''}`}
          onClick={() => handleDotClick(1)}
        />
        <span
          className={`dot ${activeSet === 2 ? 'active' : ''}`}
          onClick={() => handleDotClick(2)}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
