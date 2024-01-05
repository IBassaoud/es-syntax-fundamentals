import { ProductCollection } from "./product-collection.class";
import { Product } from "./product.class";

export class ProductSet extends ProductCollection {

  constructor() {
    super();
    this.products = new Set();
  }

  /**
   * Add a product to the set
   * @param {Product} product
   * @returns this instance
   */
  addProduct(product) {
    this.checkProductParam(product);
    this.products.add(product);
    return this;
  }

  // getProduct(id) {
  //   this.checkStringParam(id);
  //   this.checkIfProductExists(id);

  //   return [...this.products.values()][id]
  // }

  /**
   * Remove product if it exists
   * @param {Product} product
   * @returns void
   */
  removeProduct(product) {
    if (this.products.has(product)) {
      this.products.delete(product);
    }
  }

  /**
   * Update an item according to its ID value
   * If ID is mutated
   * @param {Product} product
   * @returns void
   */
  updateProduct(product) {
    const existingProductIndex = [... this.products.values()].findIndex( (item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const existingProduct = [...this.products.values()][existingProductIndex];
      this.products.delete(existingProduct);
      this.products.add(product);
    } else {
      throw new Error("Product not found in the set", product);
    }
  }

  getSize() {
    return this.products.size;
  }
}
