// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Add styling for Home

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products'); // Navigate to the product listing page
  };

  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Welcome to the Online Product Delivery System</h1>
        <p>Shop the best products at affordable prices.</p>
        <button onClick={handleShopNow} className="shop-now-btn">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;
