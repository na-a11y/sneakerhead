// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';

import ImageGrid from '../components/ImageGrid'; // Import the ImageGrid component
import CarouselCard from '../components/CarouselCard';
import ShoeInfoSection from '../components/ShoeInfoSection';
import ProductGallery from './PromoAndProducts';

const Home = () => {
  return (
    <>
    <CarouselCard/>
    <ShoeInfoSection />
    <ProductGallery/>
    <ImageGrid /> {/* Include the ImageGrid component */}
   
    </>
  );
};

export default Home;