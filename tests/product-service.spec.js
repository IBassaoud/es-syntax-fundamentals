import { ProductService } from "../products/product-service";

describe("Product service", () => {
    let service;

    beforeEach( () => {
        service = new ProductService();
    })

    it("Should have 3 products", () => {
        expect(service.findAll().length).toEqual(3);
    })

    it("Shouldn't have a price attribute", () => {
        const products = service.findAll();
        expect(products[0].hasOwnProperty('price')).toBeFalsy();
    })
})