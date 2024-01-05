import { ProductSet } from "../products/product-set.class";
import { ProductBuilder } from '../products/product-builder.class';

describe("Product Set", () => {
    let productSet;
    beforeEach ( () => {
        productSet = new ProductSet(); 
    })
    
    it("Should have a zero size at initialization..", () => {
        expect(productSet.getSize()).toBe(0);
        // NOTE: Strictly equal is to compare the same memory usage
    })

    it("Should have a size of 1 after adding a product", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();

        productSet.addProduct(product);
        expect(productSet.getSize()).toBe(1);
    })

    it("Should have a size of 1 after adding the same product twice", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product1 = productBuilder.build();
        const product2 = product1;
        productSet.addProduct(product1);
        productSet.addProduct(product2);

        expect(productSet.getSize()).toBe(1);
    })

    it("Should raise an exception when trying to add a product that is not an instance of Product", () => {
        let product = {};
        product.id = "1ef256";
        product.name = "test";
        product.stock = 5;

        expect(() => productSet.addProduct(product)).toThrow(TypeError);
        expect(() => productSet.addProduct(product)).toThrow(`Invalid argument type: Expected an instance of Product as value, but received ${typeof product}`);
    })

    // it("Should find a product by its ID", () => {
    //     const productBuilder = new ProductBuilder();
    //     productBuilder.id = "1ef256";
    //     productBuilder.name = "test";
    //     productBuilder.stock = 5;

    //     const product = productBuilder.build();

    //     productSet.addProduct(product);
    //     expect(productSet.getSize()).toBe(1);

    //     expect(productSet.getProduct(product.id)).toBe(product);
    // })

    it("Should remove a product if it exists", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();

        productSet.addProduct(product);
        expect(productSet.getSize()).toBe(1);

        productSet.removeProduct(product);
        expect(productSet.getSize()).toBe(0);
    })

    it("Should update a Product according to its ID", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();
        productSet.addProduct(product);
        expect(productSet.getSize()).toBe(1);

        productBuilder.id = product.id;
        productBuilder.name = "Updated Test";
        productBuilder.stock = product.stock;
        
        const copy = productBuilder.build();

        productSet.updateProduct(copy);

        expect([ ... productSet.products.values()][0].name).toBe("Updated Test");
    })

    it("Should raise an exception if a product to update does not exists", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();
        productSet.addProduct(product);
        expect(productSet.getSize()).toBe(1);

        productBuilder.id = "Azer";
        productBuilder.name = product.name;
        productBuilder.stock = product.stock;
        
        const copy = productBuilder.build();

        expect(() => productSet.updateProduct(copy)).toThrow(Error);
        expect(() => productSet.updateProduct(copy)).toThrow("Product not found in the set", copy);
    })
})