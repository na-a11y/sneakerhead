import React from 'react';
import '../styles/PromoAndProducts.css'; // External CSS file

const PromoAndProducts = () => {
  const products = [
    {
      id: 1,
      imageUrl: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_262.jpg?v=1715327085&width=1425',
      name: 'Air Jordan 1 Mid',
      price: '$60.00',
      originalPrice: '$70.00',
      shopLink: '/shop/product1',
    },
    {
      id: 2,
      imageUrl: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_263.jpg?v=1715327088&width=1425',
      name: 'Cheery Navy Sneaker',
      price: '$60.00',
      originalPrice: '$70.00',
      shopLink: '/shop/product2',
    },
    {
      id: 3,
      imageUrl: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/1.png?v=1717490452&width=1425',
      name: 'Cheery Retro Pink Floral',
      price: '$60.00',
      originalPrice: '$70.00',
      shopLink: '/shop/product3',
    },
    {
      id: 4,
      imageUrl: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_262.jpg?v=1715327085&width=1425',
      name: 'Air Jordan 1 Mid',
      price: '$60.00',
      originalPrice: '$70.00',
      shopLink: '/shop/product4',
    },
    {
      id: 5,
      imageUrl: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_263.jpg?v=1715327088&width=1425',
      name: 'Cheery Navy Sneaker',
      price: '$60.00',
      originalPrice: '$70.00',
      shopLink: '/shop/product5',
    },
    {
      id: 6,
      imageUrl: 'https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/1.png?v=1717490452&width=1425',
      name: 'Cheery Retro Pink Floral',
      price: '$60.00',
      originalPrice: '$70.00',
      shopLink: '/shop/product6',
    },
  ];

  const handleProductClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="promo-products-container">
      {/* Promo Section */}
      <div className="promo-section">
        <div className="promo-content">
          <h3 className="promo-title">Sneaker Culture</h3>
          <h1 className="promo-heading">Special Promo for Sports Shoes.</h1>
        </div>
        <img
          src="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/image_262.jpg?v=1715327085&width=1425"
          alt="Promo"
          className="promo-image"
        />
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2 className="recommended-title">Recommended For You</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product.shopLink)}>
              <div className="product-image-container">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoAndProducts;
