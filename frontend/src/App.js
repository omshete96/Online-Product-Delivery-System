import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "A high-quality wireless mouse",
    price: "$25.99",
  },
  {
    id: 2,
    name: "Bluetooth Keyboard",
    description: "Ergonomic Bluetooth keyboard",
    price: "$49.99",
  },
];

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShopNow = () => {
    setShowWelcomePage(false);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      {showWelcomePage ? (
        <div className="welcome-page">
          <h1>Welcome to Our Online Store!</h1>
          <p>Discover a variety of high-quality products just for you.</p>
          <button className="shop-now-button" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      ) : selectedProduct ? (
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>Price: {selectedProduct.price}</p>
          <button className="go-back-button" onClick={handleCloseDetails}>
            Go Back
          </button>
        </div>
      ) : (
        <div className="product-list">
          <h1>Available Products</h1>
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <button
                className="view-details-button"
                onClick={() => handleViewDetails(product)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
