import React from 'react';
import '../styles/About.css'; // Make sure this points to your new CSS file
import ArticlesSection from './ArticlesSection';
import AboutSection from './AboutSection';

const AboutNew = () => {
  return (
    <div>
      <div className="about-page-new">
        <div className="about-content-new">
          <div className="about-text-new">
            <h1>About Us</h1>
            <p>
              Welcome to SNEAKERHEAD, the ultimate destination for sneaker enthusiasts! We're a team of passionate sneakerheads dedicated to bringing you the latest and greatest kicks straight to your doorstep. Our mission is simple: to provide a seamless and hassle-free online shopping experience, allowing you to focus on what matters most - adding to your sneaker collection. With a curated selection of the most sought-after sneakers from top brands, we're committed to delivering authenticity, quality, and style to every corner of the globe. Whether you're a seasoned collector or just starting your sneaker journey, we've got you covered. So why wait? Lace up and join the sneaker revolution with us!
            </p>
          </div>
          <div className="about-image-new">
            <img src="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/collections/image_299.jpg?v=1715068566&width=635" alt="Sneaker Collection" />
          </div>
        </div>
      </div>
      <ArticlesSection />
    </div>
  );
};

export default AboutNew;
