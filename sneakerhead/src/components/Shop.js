import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import HeroSection from '../components/HeroSection';
import ShoeInfoSection from '../components/ShoeInfoSection';
import '../styles/Shop.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons
import { addToCart, addToWishlist } from '../api';

const shoes = [
  {
    id: 1,
    name: "Batman: The Dark Knight 2.0",
    price: 3299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1708668453_6608407.gif?format=webp&w=480&dpr=1.3",
  },
  {
    id: 2,
    name: "Urban Blaze: Denim",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1722523822_2707220.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 3,
    name: "Urban Blaze: Lavender",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1702568686_7854449.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 4,
    name: "All Day Classics: Dune",
    price: 2299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1716621220_6811161.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 5,
    name: "Urban Blaze: Mafia",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1719591512_6350004.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 6,
    name: "Naruto: Split Sneakers",
    price: 2699,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1718090174_1791817.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 7,
    name: "TSS Originals: Meadows",
    price: 2569,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710489207_5387436.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 10,
    name: "Stitched Together: Vol 1",
    price: 3999,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1713851299_3614820.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 11,
    name: "Urban Blaze: Underwater",
    price: 2499,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1717244847_8302434.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 12,
    name: "Superman: Man Of Steel",
    price: 2699,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1694689639_5944281.jpg?format=webp&w=300&dpr=1.3",
  },
  {
    id: 13,
    name: "TSS Originals: Ignite",
    price: 2299,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709705663_3622765.jpg?format=webp&w=480&dpr=1.3",
  },
  {
    id: 14,
    name: "Urban Blaze: Mafia",
    price: 2699,
    img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712145476_1098316.jpg?format=webp&w=480&dpr=1.3",
  }
];
const Shop = ({ addToCart, addToWishlist, user, wishlist }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = async (product) => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }
    try {
      await addToCart(product);
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart. Please try again.');
    }
  };

  const handleAddToWishlist = async (product) => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }
    try {
      await addToWishlist(product);
      alert('Product added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('Error adding to wishlist. Please try again.');
    }
  };

  return (
    <>
      <HeroSection />
      <div className="shop-container">
        {shoes.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <div className="product-actions">
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <div className="wishlist-icon" onClick={() => handleAddToWishlist(product)}>
                {wishlist.some(item => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShoeInfoSection />
    </>
  );
};

export default Shop;