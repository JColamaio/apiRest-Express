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
  res.status(201).json({message: 'created', data: body})
})
// products patch
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

// products delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  })
})

module.exports = router;
