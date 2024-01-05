import { UnimplementedError } from "../exceptions/UnimplementedError";
import { ProductBuilder } from "../product-builder.class";

export class CollectionStrategy {
  /**
   * @var {ProductArray | ProductSet | ProductMap}
   */
  #concreteCollection = null;

  get concreteCollection() {
    return this.#concreteCollection;
  }

  set concreteCollection(collection) {
    this.#concreteCollection = collection;
  }

  /**
   * Map a JSON to a Collection
   * @param {json} items
   * @returns ProductArray | ProductSet | ProductMap
   */
  map(items) {
    const productBuilder = new ProductBuilder();

    for (const item of items) {
      productBuilder.id = item.id;
      productBuilder.name = item.name;
      productBuilder.stock = item.stock;
      this.#concreteCollection.addProduct(productBuilder.build());
    }
    return this.#concreteCollection;
  }
}
