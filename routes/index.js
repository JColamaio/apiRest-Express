const express = require('express')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)

// by defining the routing this way, we can manage a new router to handle different endpoints versions
//   app.use('/api/v2', router)
}

module.exports = routerApi
