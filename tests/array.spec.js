const { usingArrays, objectArray } = require("./../index");

describe("Array multiplication", () => {
  let array;
  beforeEach(() => {
    array = usingArrays();
  });

  it("Should have '8' items", () => {
    expect(array.length).toBe(8);
  });

  it("Should have 3 even values items", () => {
    // Check if there is 3 even values
    // expect(array.filter((item) => item % 2 === 0).length).toBe(3);

    let evenValuesNumber = array.filter((value) => value % 2 === 0).length;

    // Using for... of syntax
    evenValuesNumber = 0;
    for (const value of array) {
      evenValuesNumber =
        value % 2 === 0 ? evenValuesNumber + 1 : evenValuesNumber;
    }

    // Using poor old for syntax
      evenValuesNumber = 0;
      for (let i = 0; i < array.length; i++) {
        const value = array[i];
        evenValuesNumber =
          value % 2 === 0 ? evenValuesNumber + 1 : evenValuesNumber;
      }
    expect(evenValuesNumber).toBe(3);
  });

  it("Should have a sum of '87'", () => {
    // Use a reducer (see array.reduce)
    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    expect(sum).toBe(87);
  });

  it("Should have an odd sum of '43'", () => {
    // Using filter and reducer (see array.filter and array.reduce)
    const oddSum = array
      .filter((value) => value % 2 !== 0)
      .reduce((accVal, currVal) => accVal + currVal, 0);
    expect(oddSum).toBe(43);
  });

  it("Should have a global stock of 21", () => {
    // Using reduce method (see array.reduce)
    // const globalStock = objectArray.reduce( (acc, current) => acc + current.stock, 0)
    // Using map method (see array.map) + reduce method (see array.reduce)
    const globalStock = objectArray
      .map((product) => product.stock)
      .reduce((acc, current) => acc + current, 0);
    expect(globalStock).toBe(21);
  });

  it("Should be sorted by id ascending", () => {
    // sort + localeCompare (see array.sort)
    const sortedArray = objectArray.sort((p1, p2) =>
      p1.id.localeCompare(p2.id)
    );
    expect(sortedArray[0].id).toBe("1fe34");
    // Strict equal with new product etc.
  });

  it("Should be sorted by name descending", () => {
    // sort + localeCompare (see array.sort)
    const sortedArray = objectArray.sort((p1, p2) =>
      p1.name.localeCompare(p2.name)
    );
    expect(sortedArray[0].name).toBe("Bananes");
  });

  it("Should give an array of product with a stock grater than 5", () => {
    // original array must be mutated
    const workArray = [...objectArray];
    const isGreaterThan5 = (product) => product.stock > 5;

    for (let i = 0; i < workArray.length; i++) {
      if (!isGreaterThan5(workArray[i])) {
        objectArray.splice(i, 1);
      }
    }
    // const areAllStocksGreaterThan5 = objectArray.every(isGreaterThan5);
    // expect(areAllStocksGreaterThan5).toBe(true);
    // OR
    expect(objectArray.length).toBe(2);
  });
});
