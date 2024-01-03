export class ProductErrors {
  static #ID_IS_EMPTY = -1000;
  static #NAME_IS_EMPTY = -1001;
  static #STOCK_NEGATIVE = -1002;
  static #STOCK_NOT_VALID = -1003;

  static get ID_IS_EMPTY() {
    return ProductErrors.#ID_IS_EMPTY;
  }

  static get NAME_IS_EMPTY() {
    return ProductErrors.#NAME_IS_EMPTY;
  }

  static get STOCK_NEGATIVE() {
    return ProductErrors.#STOCK_NEGATIVE;
  }

  static get STOCK_NOT_VALID() {
    return ProductErrors.#STOCK_NOT_VALID;
  }
}
