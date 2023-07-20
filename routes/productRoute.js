const express = require('express');
const Product = require('../models/productModels');
const { getProducts, getProductsById, updateProducts, deleteProducts, createProducts } = require('../controllers/productController');


const router = express.Router();

// Route handler for getting all products from database
router.get('/', getProducts);
  
// Route handler for getting a single product from database
router.get('/:id', getProductsById);
  
// Route handler to update a single product from database
router.put('/:id', updateProducts);
  
// Route handler to delete product from the database
router.delete('/:id', deleteProducts);
  
// Route handler for posting product to database
router.post('/', createProducts);

module.exports = router;