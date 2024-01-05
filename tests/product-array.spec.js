import { ProductArray } from "../products/product-array.class";
import { ProductBuilder } from '../products/product-builder.class';
import { Product } from "../products/product.class";

describe("Product Array", () => {
    let productArray;

    beforeEach( () => {
        productArray = new ProductArray();
    })

    it("Should have a zero size at initialization..", () => {
        expect(productArray.getSize()).toBe(0);
        // NOTE: Strictly equal is to compare the same memory usage
    })
})