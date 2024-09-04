import React from 'react';
import '../styles/ShoeCarousel.css'; // Import any CSS you need

const ShoeCard = ({ title, itemsCount, image, alt }) => (
  <div className="shoe-card">
    <img src={image} alt={alt} className="shoe-image" />
    <div className="card-text">
      <h3>{title}</h3>
      <p>{itemsCount} Items</p>
    </div>
  </div>
);

const ShoeCarousel = () => (
  <div className="shoe-carousel">
    <ShoeCard
      title="Shoe Chic"
      itemsCount={19}
      image="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/s2_86e544d2-b37f-4ad3-a3fa-1a4146f6abf5.jpg?v=1715921254&width=608"
      alt="Shoe Chic Image"
    />
    <ShoeCard
      title="Sneak Peak"
      itemsCount={19}
      image="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_422.jpg?v=1717466502&width=632"
      alt="Sneak Peak Image"
    />
    <ShoeCard
      title="Kicks Hub"
      itemsCount={19}
      image="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/s2_e581920f-2547-4270-89aa-426dcc57cda3.jpg?v=1715921549&width=609"
      alt="Kicks Hub Image"
    />
    <ShoeCard
      title="Trend Foot"
      itemsCount={19}
      image="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_422_a194806b-366f-4e04-918f-5540d390acb4.jpg?v=1717466778&width=632"
      alt="Trend Foot Image"
    />
  </div>
);

export default ShoeCarousel;