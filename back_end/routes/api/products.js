const express = require('express');
const router = express.Router();

// Load Stock model
const Product = require('../../models/Product');

// @route   GET api/products/test
// @desc    Tests stock route
// @access  Public
router.get('/test', (req, res) => res.send('product route testing!'));

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
});

// @route   GET api/products/:id
// @desc    Get single product by id
// @access  Public
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.status(404).json({ noproductfound: 'No Product found' }));
});

// @route   POST api/products
// @desc    Add/save product
// @access  Public
router.post('/', (req, res) => {
  Product.create(req.body)
    .then(product => res.json({ msg: 'Product added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this product' }));
});

// @route   PUT api/products/:id
// @desc    Update product by id
// @access  Public
router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(product => res.json({ msg: 'Product updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Product' })
    );
});

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => res.json({ mgs: 'Product deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such product' }));
});

module.exports = router;
