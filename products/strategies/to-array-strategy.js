import { CollectionStrategy } from "./collection.strategy";
import { ProductArray } from "../product-array.class";

export class ToArrayStrategy extends CollectionStrategy {
  map(items) {
    this.concreteCollection = new ProductArray();
    return super.map(items);
  }
}
