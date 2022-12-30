const express = require('express');
const ProductsService = require('../services/products.service')


const router = express.Router();
const service = new ProductsService();
//  products endpoint
router.get('/', (req, res) => {
const products = service.find()
  res.json(products);
});

// products filter endpoint
router.get('/filter', (req, res) => {
  res.send('im a filter')
})

// ProductsId endpoint
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id)
  res.json(product)
});
// products post
router.post('/', (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})
// products patch
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})

// products delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const res = service.delete(id)
  res.json(res)
})

module.exports = router;
