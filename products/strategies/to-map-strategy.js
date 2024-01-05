import { CollectionStrategy } from "./collection.strategy";
import { ProductMap } from "../product-map.class";

export class ToMapStrategy extends CollectionStrategy {
  map(items) {
    this.concreteCollection = new ProductMap();
    return super.map(items);
  }
}
