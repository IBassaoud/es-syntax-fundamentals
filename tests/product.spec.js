import { Product } from "./../products/product.class";
import { ProductBuilder } from "./../products/product-builder.class";

describe("Product Class", () => {
  it("Should make an instance of Product", () => {
    const product = Product.getInstance();
    expect(product).toBeInstanceOf(Product);
  });
  it("Should give back an id, a name and a stock", () => {
    const product = Product.getInstance();
    product.id = "1fe24";
    product.name = "Test";
    product.stock = 10;

    expect(product.id).toEqual("1fe24");
    expect(product.name).toEqual("Test");
    expect(product.stock).toEqual(10);
  });
});
