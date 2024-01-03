import { Builder } from '../_helpers/builder.class';
import { Product } from '../products/product.class';
import { ProductBuilder } from '../products/product-builder.class';
import { IdIsEmptyError } from '../products/exceptions/IdIsEmptyError';
import { ProductErrors } from '../products/exceptions/product-errors';
import { NameIsEmptyError } from '../products/exceptions/NameIsEmptyError';
import { StockNotValidError } from '../products/exceptions/StockNotValidError';
import { StockNegativeError } from '../products/exceptions/StockNegativeError';

describe ('ProduictBuilder Class', () => {
    it('Should be instaciated and must also be an instance of Builder', () => {
        const productBuilder = new ProductBuilder();
        expect(productBuilder).toBeInstanceOf(ProductBuilder);
        expect(productBuilder).toBeInstanceOf(Builder);
    })

    it('Should raise an IdIsEmptyError if no ID is provided', () => {
        const productBuilder = new ProductBuilder();
        productBuilder.name = "Test";
        productBuilder.stock = 10;

        expect( () => productBuilder.build() ).toThrow(TypeError);
        expect( () => productBuilder.build() ).toThrow(IdIsEmptyError);

        try {
            productBuilder.build();
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.ID_IS_EMPTY);
        }
    })

    it('Should raise a NameIsEmptyError exception if no name is provided', () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "Test";
        productBuilder.stock = 10;

        expect( () => productBuilder.build() ).toThrow(TypeError);
        expect( () => productBuilder.build() ).toThrow(NameIsEmptyError);

        try {
            productBuilder.build();
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.NAME_IS_EMPTY);
        }
    })

    it('Should raise a StockNotValidError exception if stock is not valid', () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "Test";
        productBuilder.name = "Test";
        productBuilder.stock = "Test";

        expect( () => productBuilder.build() ).toThrow(TypeError);
        expect( () => productBuilder.build() ).toThrow(StockNotValidError);

        try {
            productBuilder.build();
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.STOCK_NOT_VALID);
        }
    })

    it('Should raise an exception if stock is not numerically positive', () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "Test";
        productBuilder.name = "Test";
        productBuilder.stock = -10;

        expect( () => productBuilder.build() ).toThrow(RangeError);
        expect( () => productBuilder.build() ).toThrow(StockNegativeError);

        try {
            productBuilder.build();
        } catch (error) {
            expect(error.status).toEqual(ProductErrors.STOCK_NEGATIVE);
        }
    })

    it("Should give back a Product instance with correct values", () => {
        const productBuilder = new ProductBuilder();
        productBuilder.id = "Test";
        productBuilder.name = "Test";
        productBuilder.stock = 10;

        const product = productBuilder.build();

        expect(product).toBeInstanceOf(Product);
        expect(product.id).toEqual(productBuilder.id);
        expect(product.name).toEqual(productBuilder.name);
        expect(product.stock).toEqual(productBuilder.stock);
    })
})