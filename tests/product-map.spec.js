import { ProductBuilder } from "../products/product-builder.class";
import { ProductMap } from "../products/product-map.class";

describe("Product Map", () => {
    let productMap;

    beforeEach( () => {
        productMap = new ProductMap();
    })

    it("Should have a zero size at initialization", () => {
        expect(productMap.getSize()).toBe(0);
    })

    it("Should have a size of 1 after adding a product", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();

        productMap.addProduct(product.id, product);

        expect(productMap.getSize()).toBe(1);
    })

    it("Should have a size of 1 after adding the exact same product twice", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product1 = productBuilder.build();
        const product2 = product1;

        productMap.addProduct(product1.id, product1);
        productMap.addProduct(product2.id, product2);

        expect(productMap.getSize()).toBe(1);
    })

    it("Should raise an exception when trying to add a product with a key that is not a string", () => {
        let product = {};
        product.id = 12;
        product.name = "test";
        product.stock = 5;

        expect(() => productMap.addProduct(product.id, product)).toThrow(TypeError);
        expect(() => productMap.addProduct(product.id, product)).toThrow(`Invalid argument type: Expected a string as key, but received ${typeof product.id}`);
    })

    it("Should raise an exception when trying to add a product that is not an instance of Product", () => {
        let product = {};
        product.id = "1ef256";
        product.name = "test";
        product.stock = 5;

        expect(() => productMap.addProduct(product.id, product)).toThrow(TypeError);
        expect(() => productMap.addProduct(product.id, product)).toThrow(`Invalid argument type: Expected an instance of Product as value, but received ${typeof product}`);
    })

    it("Should remove a product if it exists", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();

        productMap.addProduct(product.id, product);
        expect(productMap.getSize()).toBe(1);

        productMap.removeProduct(product.id);
        expect(productMap.getSize()).toBe(0);
    })

    it("Should update a Product according to its ID", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();
        productMap.addProduct(product.id, product);

        productBuilder.id = product.id;
        productBuilder.name = "Updated Test";
        productBuilder.stock = product.stock;
        
        const copy = productBuilder.build();

        productMap.updateProduct(copy.id, copy);

        expect([ ... productMap.products.values()][0].name).toBe("Updated Test");
    })

    it("Should raise an exception if a product to remove or update does not exists", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "1ef256";
        productBuilder.name = "test";
        productBuilder.stock = 5;

        const product = productBuilder.build();
        productMap.addProduct(product.id, product);

        productBuilder.id = "Azer";
        productBuilder.name = product.name;
        productBuilder.stock = product.stock;
        
        const copy = productBuilder.build();

        expect(() => productMap.updateProduct(copy.id, copy)).toThrow(TypeError);
        expect(() => productMap.updateProduct(copy.id, copy)).toThrow(`Product with key ${copy.id} does not exist`);

        expect(() => productMap.removeProduct(copy.id, copy)).toThrow(TypeError);
        expect(() => productMap.removeProduct(copy.id, copy)).toThrow(`Product with key ${copy.id} does not exist`);
    })
})