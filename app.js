const express = require('express');
const routerApi = require('./routes')
const { logErrors, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world');
});
// new route
app.get('/new-route', (req, res) => {
  res.send('im a new route');
});

//using routerApi(app)
routerApi(app)

app.use(logErrors);
app.use(errorHandler);

// app listening on port
app.listen(port, () => {
  console.log('server running on ' + port);
});
