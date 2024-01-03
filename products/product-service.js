import product from "./mock";
import { ProductBuilder } from "./product-builder.class";

export class ProductService {
  findAll() {
    const productBuilder = new ProductBuilder();
    return product.map((item) => {
        productBuilder.id = item.id;
        productBuilder.name = item.name;
        productBuilder.stock = item.stock;
        return productBuilder.build();
    })
  }
}
