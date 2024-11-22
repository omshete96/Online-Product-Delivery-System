const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Routes
router.get('/', getProducts); // GET all products
router.get('/:id', getProductById); // GET a product by ID

module.exports = router;
