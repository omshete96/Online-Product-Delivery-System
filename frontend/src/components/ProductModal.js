// src/components/ProductModal.js
import React, { useState } from "react";
import Modal from "react-modal";

const ProductModal = ({ product, isOpen, closeModal }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>{product.details}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ProductModal;
