// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ cartQuantity, wishlist }) => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/"><img src="https://sneakerank-store-newdemo.myshopify.com/cdn/shop/files/sneakerank_logo.png?v=1717655658&width=150" alt="Sneakerhead Logo" /></Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="header-icons">
        <button className="wishlist-icon" onClick={() => navigate('/wishlist')}>
          <FaHeart size={24} />
          {wishlist.length > 0 && <span className="wishlist-count">({wishlist.length})</span>}
        </button>
        <button className="login-icon" onClick={() => navigate('/login')}>
          <FaUser size={24} />
        </button>
        <button className="cart-icon" onClick={() => navigate('/cart')}>
          <FaShoppingCart size={24} />
          <span className="cart-quantity">({cartQuantity})</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
