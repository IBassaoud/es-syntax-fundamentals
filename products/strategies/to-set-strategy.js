import { CollectionStrategy } from "./collection.strategy";
import { ProductSet } from "../product-set.class";

export class ToSetStrategy extends CollectionStrategy {
  map(items) {
    this.concreteCollection = new ProductSet();
    return super.map(items);
  }
}
