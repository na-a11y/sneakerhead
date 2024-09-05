// Cart.js
import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, updateQuantity, user }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    if (user) {
      try {
        // Handle checkout process here
        alert("Your order is placed successfully!");
      } catch (error) {
        alert('Checkout failed.');
      }
    } else {
      alert('You need to log in to proceed with checkout.');
      // Redirect to login or show login modal
    }
  };

  const handleQuantityChange = (id, change) => {
    updateQuantity(id, change);
    // Remove item if quantity is 0
    if (cart.find(item => item.id === id && item.quantity <= 0)) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    }
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-price">₹{item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item.id, -1)} className="quantity-btn">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)} className="quantity-btn">+</button>
                </div>
                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-total">
              <h2>Total Amount:₹{calculateTotal().toFixed(2)}</h2>
              <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
