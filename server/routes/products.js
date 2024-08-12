const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  const newProduct = new Product({
    name,
    description,
    price,
    imageUrl
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;