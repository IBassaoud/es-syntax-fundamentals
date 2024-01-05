import { ProductCollection } from "./product-collection.class";
import { Product } from "./product.class";

export class ProductMap extends ProductCollection {
  /**
   * Product Collection
   * @var Map<Key: string, Value: Product>
   */
  constructor() {
    super();
    this.products = new Map();
  }

  /**
   * Add a product to the set
   * @param {string} key
   * @param {Product} value
   * @returns this instance
   */
  addProduct(key, value) {
    this.checkStringParam(key);
    this.checkProductParam(value);

    this.products.set(key, value);

    return this;
  }

  getProduct(id) {
    this.checkStringParam(id);
    this.checkIfProductExists(id);

    return this.products.get(id);
  }

  /**
   * Remove a product from the set
   * @param {string} key
   * @returns void
   */
  removeProduct(key) {
    this.checkStringParam(key);
    this.checkIfProductExists(key);
    this.products.delete(key);
  }

  /**
   * Update an item according to its key
   * @param {string} key
   * @param {Product} value
   * @returns void
   */
  updateProduct(key, value) {
    this.checkStringParam(key);
    this.checkProductParam(value);
    this.checkIfProductExists(key);

    this.products.forEach((item) => {
      if (item.id === key) {
        this.removeProduct(item.id);
      }
    });
    this.addProduct(key, value);
  }

  getSize() {
    return this.products.size;
  }
}
