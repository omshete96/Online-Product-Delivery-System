// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Wireless Mouse', price: '$25.99' },
    { id: 2, name: 'Bluetooth Keyboard', price: '$49.99' },
  ];

  return (
    <div className="product-list-container">
      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
