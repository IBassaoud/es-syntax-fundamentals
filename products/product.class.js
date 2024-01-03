import { StockNotValidError } from "./exceptions/StockNotValidError";
import { StockNegativeError } from "./exceptions/StockNegativeError";
import { ProductErrors } from "./exceptions/product-errors";
import { IdIsEmptyError } from "./exceptions/IdIsEmptyError";

export class Product {
  /**
   * ID of the product
   * @var string
   */
  #id = "";

  /**
     *Name of the product
     @var string 
     */
  #name = "";

  /**
   * Stock of the product
   * @var number
   */
  #stock = 0;

  constructor(doIt = null) {
    if (!doIt) throw new Error(`Cannot instanciate directly a new Product`);
  }

  get id() {
    return this.#id;
  }

  /**
   * @param {string} id
   */
  set id(id) {
    if (id.trim() === "") throw new IdIsEmptyError({
      message: "ID cannot be empty",
      status: ProductErrors.ID_IS_EMPTY
    })

    this.#id = id;
  }

  get name() {
    return this.#name;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this.#name = name;
  }

  get stock() {
    return this.#stock;
  }

  /**
   * @param {number} stock
   */
  set stock(stock) {
    if (isNaN(stock)) {
      throw new StockNotValidError({
        message:"Invalid argument type. The function 'stock' expects a parameter of type 'number', but received a value of type '" + typeof stock + "'.",
        status: ProductErrors.STOCK_NOT_VALID
      });
    }

    if (stock < 0) throw new StockNegativeError({
      message: 'Stock cannot be a negative number',
      status: ProductErrors.STOCK_NEGATIVE
    });

    this.#stock = stock;
  }

  static getInstance() {
    return new Product(true);
  }
}
