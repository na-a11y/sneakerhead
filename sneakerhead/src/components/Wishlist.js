// Wishlist.js
import React from 'react';
import '../styles/Wishlist.css';
import { toast } from 'react-toastify';

const Wishlist = ({ wishlist, addToCart, removeFromWishlist }) => {
  const handleAddToCart = (item) => {
    addToCart(item); // This will handle the login check
  };

  const handleRemoveFromWishlist = (item) => {
    removeFromWishlist(item);
    toast.info(`${item.name} has been removed from your wishlist!`);
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.img} alt={item.name} className="wishlist-item-img" />
              <div className="wishlist-item-details">
                <h2 className="wishlist-item-name">{item.name}</h2>
                <p className="wishlist-item-price">₹{item.price}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
                <button className="remove-from-wishlist" onClick={() => handleRemoveFromWishlist(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
