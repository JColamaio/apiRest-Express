const express = require('express');
const { faker } = require('@faker-js/faker');


const router = express.Router();

//  products endpoint
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < 100; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

// products filter endpoint
router.get('/filter', (req, res) => {
  res.send('im a filter')
})

// ProductsId endpoint
router.get('/:id', (req, res) => {
  const { id } = req.params.id;
  res.json({
    id,
    name: 'Product 2',
    price: 1500,
  });
});

module.exports = router;
