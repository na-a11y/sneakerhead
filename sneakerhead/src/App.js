import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Wishlist from './components/Wishlist';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const addToWishlist = (item) => {
    if (!wishlist.find(wishlistItem => wishlistItem.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (item) => {
    setWishlist(wishlist.filter(wishlistItem => wishlistItem.id !== item.id));
  };

  const updateQuantity = (itemId, quantity) => {
    setCart(cart.map(cartItem =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    ).filter(cartItem => cartItem.quantity > 0));
  };

  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div>
        <Header cartQuantity={cartQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} addToWishlist={addToWishlist} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} addToCart={addToCart} removeFromWishlist={removeFromWishlist} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
