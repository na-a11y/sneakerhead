// src/components/HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import '../styles/HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>
        <div>
          <img 
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4851820240719121114.jpg?format=webp&w=1500&dpr=1.3" 
            alt="Slide 1" 
            className="carousel-image"
          />
        </div>
        <div>
          <img 
            src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_JL.jpg?format=webp&w=1500&dpr=1.3" 
            alt="Slide 2" 
            className="carousel-image"
          />
        </div>
        <div>
          <img 
            src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4851820240719121114.jpg?format=webp&w=1500&dpr=1.3" 
            alt="Slide 3" 
            className="carousel-image"
          />
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
