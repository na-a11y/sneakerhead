import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Wishlist from './components/Wishlist';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/auth/check-login')
      .then(response => {
        if (response.data.loggedIn) {
          setUser(response.data.user);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data. Please try again later.');
      });
  }, []);

  const addToCart = (shoe) => {
    setCart(prevCart => [...prevCart, { ...shoe, quantity: 1 }]);
  };

  const addToWishlist = (shoe) => {
    if (!wishlist.find(wishlistItem => wishlistItem.id === shoe.id)) {
      setWishlist([...wishlist, shoe]);
    }
  };

  const removeFromWishlist = (shoe) => {
    setWishlist(wishlist.filter(wishlistItem => wishlistItem.id !== shoe.id));
  };

  const updateQuantity = (id, change) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      ).filter(item => item.quantity > 0) // Filter out items with 0 quantity
    );
  };

  return (
    <Router>
      <Header user={user} cartQuantity={cart.length} wishlist={wishlist} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} addToWishlist={addToWishlist} user={user} wishlist={wishlist} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} addToCart={addToCart} removeFromWishlist={removeFromWishlist} />} />
      </Routes>
      <Footer />
      {error && <div className="error-message">{error}</div>}
    </Router>
  );
};

export default App;
