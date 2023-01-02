const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  async generate() {
    const limit = 100;
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
// making the methods asyncronous and adding a settimeout
   find() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }

  async findOne() {
    return this.products.find(item => item.id === id);
  }

  async update(id,changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('product not found')
    } else {
      // by defining the product like this, we can change only the price and not all the array
      const product = this.products[index]
      this.products = {
        ...product,
        ...changes
      };
      return this.products[index];
    }
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('cant delete item');
    }
    this.products.splice(index,1);
    return { id };
  }
}

module.exports = ProductsService;
