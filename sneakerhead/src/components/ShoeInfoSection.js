import React from "react";
import "../styles/ShoeInfoSection.css";

const ShoeInfoSection = () => {
  const shoeInfo = [
    {
      imgSrc:
        "https://sneakerank-store-newdemo.myshopify.com/cdn/shop/collections/image_299.jpg?v=1715068566&width=635",
      altText: "Sneakers Image",
      title: "Sneakers",
      description:
        "Explore our wide range of stylish and comfortable sneakers.",
    },
    {
      imgSrc:
        "https://sneakerank-store-newdemo.myshopify.com/cdn/shop/collections/image_298.jpg?v=1715068565&width=642",
      altText: "Formal Shoes Image",
      title: "Formal Shoes",
      description:
        "Elegant and sophisticated shoes perfect for any formal occasion.",
    },
    {
      imgSrc:
        "https://sneakerank-store-newdemo.myshopify.com/cdn/shop/collections/image_301.jpg?v=1715068567&width=635",
      altText: "Sandals Image",
      title: "Sandals",
      description:
        "Lightweight and breathable sandals for casual wear.",
    },
  ];

  return (
    <section className="shoe-info-section">
      {shoeInfo.map((info, index) => (
        <div className="shoe-info-box" key={index}>
          <img src={info.imgSrc} alt={info.altText} />
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ShoeInfoSection;
