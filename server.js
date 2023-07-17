require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModels');
const app = express();

// Variables
const PORT = process.env.PORT || PORT;
const MONGO_URL = process.env.MONGO_URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const server = app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Route handler for getting all products from database
app.get('/products', async(req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

// Route handler for getting a single product from database
app.get('/products/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// Route handler to update a single product from database
app.put('/products/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({message: `Product not found with id ${id}`})
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// Route handler to delete product from the database
app.delete('/products/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({message: `Product not found with id ${id}`})
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// Route handler for posting product to database
app.post('/product', async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: error.message})
  }
})

// Connect to the database
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to database')
    server.listen(PORT, () => console.log(`The server is listening on ${PORT}`));
  }).catch((err) => {
    console.log('Error connecting to database')
  });