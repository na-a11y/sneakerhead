import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutSection.css";

    const AboutSection = () => {
        const navigate = useNavigate();
      
        const handleShopClick = () => {
          navigate("/Shop");
        };
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>PICK THE PERFECT PAIR!!</h2>
        <p>
          Welcome to our shoe store! We pride ourselves on offering the best
          selection of footwear, combining quality craftsmanship with modern
          design. Our commitment is to provide you with shoes that not only look
          great but also feel comfortable, no matter the occasion.
        </p>
        <button onClick={handleShopClick}>Shop Now</button>
      </div>
    </section>
  );
};

export default AboutSection;
