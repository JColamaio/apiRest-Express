const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req,res) => {
res.send("hello world")
})
// new route
app.get('/new-route', (req, res) => {
  res.send('im a new route')
})
//  products route
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 1500
    }
  ])
})
// ProductsId route
app.get('/products/:id',(req, res) => {
  const { id } = req.params.id
  res.json( {
    id,
    name: 'Product 2',
    price: 1500
  })
})
// categories and products route
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
} )
// app listening on port
app.listen(port, () => {
  console.log("server running on " + port);
});
