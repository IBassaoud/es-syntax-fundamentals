// const {
//   primitiveAffectation,
//   birthDate,
//   myBirthDate,
//   objectClone,
//   usingPrototypePattern,
// } = require("./../index");

import {
  primitiveAffectation,
  birthDate,
  myBirthDate,
  objectClone,
  usingPrototypePattern,
} from "../index";

describe("index.js", () => {
  it('Should return the last name "BASSAOUD"', () => {
    expect(primitiveAffectation()).toBe("BASSAOUD");
  });

  // Testing references
  it("Should have the same reference", () => {
    expect(birthDate).toEqual(myBirthDate());
  });

  // Testing copy of objects
  it("Should have different references", () => {
    const theDate = new Date(1997, 2, 3);
    // const theDate = "Date";
    const otherDate = objectClone(theDate);
    // expect(otherDate).not.toBe(theDate);
    // expect(theDate === otherDate).toBe(false);
    expect(theDate === otherDate).toBeFalsy();
    
    const protoDate = usingPrototypePattern(theDate);
    
    expect(theDate === protoDate).toBeFalsy();
  });

  it("Should raise an exception if a Date is not passed", () => {
    expect(() => {
      usingPrototypePattern(123);
    }).toThrow(TypeError);
  })

});
