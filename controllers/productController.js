const Product = require('../models/productModels');
const asyncHandler = require('express-async-handler');


// controller handler for getting all products from database
const getProducts = asyncHandler(async(req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products)
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
})

// controller handler for getting a single product from database
const getProductsById = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// Controller handler to update a single product from database
const updateProducts = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
        res.status(404).json({message: `Product not found with id ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// Controller handler to delete product from the database
const deleteProducts = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
        res.status(404).json({message: `Product not found with id ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// Controller handler for posting product to database
const createProducts = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts,
    getProductsById,
    updateProducts,
    deleteProducts,
    createProducts
}
