const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req,res) => {
res.send("hello world")
})

app.get('/new-route', (req, res) => {
  res.send('im a new route')
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product1',
    price: 1000
  })
})

app.listen(port, () => {
  console.log("server running on " + port);
});
