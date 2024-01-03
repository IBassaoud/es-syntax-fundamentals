const primitiveAffectation = () => {
  let lastName = "BASSAOUD";
  return lastName;
};

const birthDate = new Date(1997, 2, 3);
const myBirthDate = () => {
  let myBirthDate = birthDate; // Objects are not copied but creates a reference to the same object
  return myBirthDate;
};

// Cloner an object
const objectClone = (aDate) => {
  return { ...aDate };
};
// Autre façon de faire pour clone - Prototype pattern see more https://refactoring.guru/fr/design-patterns/prototype
const usingPrototypePattern = (aDate) => {
  if (!(aDate instanceof Date)) {
    // Throw a type error (Be also mindful of the type of error to be raised)
    throw new TypeError(
      "Invalid argument type. The function 'usingPrototypePattern' expects a parameter of type 'Date', but received a value of type '" +
        typeof aDate +
        "'."
    );
  }

  const anyDate = new Date();
  anyDate.setDate(aDate.getDate());
  anyDate.setMonth(aDate.getMonth());
  anyDate.setFullYear(aDate.getFullYear());

  return anyDate;
};

const usingArrays = () => {
    const myArray = [1, 2, 3, 5, 8, 13, 21, 34];
    myArray.push(55);
    myArray.pop();

    return myArray;
}

const objectArray = [
    {
        "id":"1fe34",
        "name":"Bananes",
        "stock":12,
    },
    {
        "id":"4ae36",
        "name":"Café en grain",
        "stock":6,
    },
    {
        "id":"3cc52",
        "name":"Raviolis",
        "stock":3,
    },
]

module.exports = {
  primitiveAffectation,
  birthDate,
  myBirthDate,
  objectClone,
  usingPrototypePattern,
  usingArrays,
  objectArray
};
