import product from "./mock";
import { ProductBuilder } from "./product-builder.class";
import { ToArrayStrategy } from "./strategies/to-array-strategy";

export class ProductService {
  #strategy = new ToArrayStrategy();

  setStrategy(strategy) {
    this.#strategy = strategy;
  }

  findAll() {
    const productBuilder = new ProductBuilder();
    return this.#strategy.map(product);
  }
}
