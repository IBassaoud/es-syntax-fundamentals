import { UnimplementedError } from "./exceptions/UnimplementedError";
import { Product } from "./product.class";

export class ProductCollection {
  /**
   * @var { Map | Set | Array }
   */
  #products = null;

  get products() {
    return this.#products;
  }

  set products(collection) {
    this.#products = collection;
  }

  /**
   * Add a product to the collection
   * @param {Product} product
   * @returns void
   */
  addProduct(product) {
    throw new UnimplementedError("Method 'addProduct' not implemented");
  }

  getProduct(product) {
    throw new UnimplementedError("Method 'addProduct' not implemented");
  }

  /**
   * Remove a product from the collection
   * @param { Product | string } element
   * @returns void
   */
  removeProduct(element) {
    throw new UnimplementedError("Method 'addProduct' not implemented");
  }

  updateProduct(...args) {
    throw new UnimplementedError("Method 'addProduct' not implemented");
  }

  /**
   * Returns the number of elements in the collection
   * @returns {number}
   */
  getSize() {
    throw new UnimplementedError("Method 'addProduct' not implemented");
  }

  checkStringParam(param) {
    if (!(typeof param === "string")) {
      throw new TypeError(
        `Invalid argument type: Expected a string as key, but received ${typeof param}`
      );
    }
  }

  checkProductParam(param) {
    if (!(param instanceof Product)) {
      throw new TypeError(
        `Invalid argument type: Expected an instance of Product as value, but received ${typeof param}`
      );
    }
  }

  checkIfProductExists(param) {
    if (this.#products instanceof Set || Array.isArray(this.#products)) {
      if (!this.#products.has(param)) {
        throw new TypeError(`Product with key ${param} does not exist`);
      }
    } else if (this.#products instanceof Map) {
      if (!this.#products.has(param)) {
        throw new TypeError(`Product with key ${param} does not exist`);
      }
    } else {
      throw new TypeError("Unsupported product type");
    }

    return true;
  }
}
