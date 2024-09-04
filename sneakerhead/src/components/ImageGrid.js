// src/components/ImageGrid.js
import React from 'react';
import '../styles/ImageGrid.css';

const ImageGrid = () => {
  const items = [
    { imgSrc: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_297.jpg?v=1715163087&width=780', text: 'Foot Flex' },
    { imgSrc: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_303.jpg?v=1715163171&width=780', text: 'Foot Works' },
    { imgSrc: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_292.jpg?v=1715163240&width=780', text: 'Foot Zone' },
  ];

  return (
    <div className="image-grid">
      {items.map((item, index) => (
        <div key={index} className="image-item">
          <img src={item.imgSrc} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
