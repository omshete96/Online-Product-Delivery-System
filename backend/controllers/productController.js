// Sample Product Controller

// Get all products
const getProducts = (req, res) => {
    res.json([
      {
        id: 1,
        name: "Wireless Mouse",
        price: 25.99,
        description: "A high-quality wireless mouse",
        countInStock: 50,
      },
      {
        id: 2,
        name: "Bluetooth Keyboard",
        price: 49.99,
        description: "Ergonomic Bluetooth keyboard",
        countInStock: 30,
      },
    ]);
  };
  
  // Get a single product by ID
  const getProductById = (req, res) => {
    const productId = req.params.id;
    if (productId === "1") {
      res.json({
        id: 1,
        name: "Wireless Mouse",
        price: 25.99,
        description: "A high-quality wireless mouse",
        countInStock: 50,
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  };
  
  module.exports = { getProducts, getProductById };
  