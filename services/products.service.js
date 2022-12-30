const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
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
  create() {}

  find() {
    return this.products;
  }

  findOne() {
    return this.products.find(item => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductsService;
