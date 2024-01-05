import { ProductCollection } from "./product-collection.class";

export class ProductArray extends ProductCollection {
  constructor() {
    super();
    this.products = new Array();
  }

  addProduct(product) {
    this.checkProductParam(product);

    this.products.push(product);

    return this;
  }

  updateProduct(product) {
    this.checkProductParam(product);
    this.splice(this.products.findIndex(product), 1, product);
  }

  removeProduct(product) {
    this.checkProductParam(product);
    this.splice(this.products.findIndex(product), 1);
  }

  getSize() {
    return this.products.length;
  }

  getById(id) {
    return this.products.find((product) => product.id === id);
  }
}
