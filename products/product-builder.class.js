import { Builder } from "../_helpers/builder.class";
import { IdIsEmptyError } from "./exceptions/IdIsEmptyError";
import { NameIsEmptyError } from "./exceptions/NameIsEmptyError";
import { StockNegativeError } from "./exceptions/StockNegativeError";
import { StockNotValidError } from "./exceptions/StockNotValidError";
import { ProductErrors } from "./exceptions/product-errors";
import { Product } from "./product.class";

export class ProductBuilder extends Builder {
  /**
   * ID attribute for the new Product
   * @var string
   */
  id = "";

  /**
   * Name of the new Product
   * @var string
   */
  name = "";

  /**
   * Stock of the new Product
   * @var number
   */
  stock = 0;

  /**
   * Build a concrete Product
   * Throws exceptions
   * @returns Product
   * @see Builder
   * @override
   */
  build() {
    if (this.id === "")
      throw new IdIsEmptyError({
        message: "Cannot build Product without an ID",
        status: ProductErrors.ID_IS_EMPTY,
      });

    if (this.name === "")
      throw new NameIsEmptyError({
        message: "Cannot build Product without a name",
        status: ProductErrors.NAME_IS_EMPTY,
      });

    if (isNaN(this.stock))
      throw new StockNotValidError({
        message: "Cannot build Product without a numerically positive stock",
        status: ProductErrors.STOCK_NOT_VALID,
      });

    if (this.stock < 0)
      throw new StockNegativeError({
        message: "Cannot build Product with a negative number",
        status: ProductErrors.STOCK_NEGATIVE,
      });

    const product = Product.getInstance();
    product.id = this.id;
    product.name = this.name;
    product.stock = this.stock;

    return product;
  }
}
