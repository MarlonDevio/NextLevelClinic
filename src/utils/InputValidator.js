import inputFormatter from "./InputFormatter.js";

class InputValidator {
  constructor(formattedObject) {
    this.formattedObject = formattedObject;
  }

  validator() {
    for (const [key, value] of Object.entries(this.formattedObject)) {
      if (!this.#validateKeyValues(key, value)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if a given value is filled.
   *
   * @param {any} value - The value to check.
   * @returns {boolean} - True if the value is filled, false otherwise.
   */
  #fieldIsFilled(value) {
    if (value === null || value === undefined || value === "") {
      alert("Niet alle velden zijn ingevuld.");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Validates a number using the provided validation function.
   *
   * @param {function} validation - The validation function to be used. It should accept a number and return a boolean value indicating whether the number is valid or not.
   * @param {number} value - The number to be validated.
   * @returns {*} - The result of the validation function.
   */
  #validateNumber(validation, value) {
    return validation(value);
  }

  /**
   * Checks if the given value is a valid age.
   *
   * @param {number} value - The value to be checked as age.
   * @returns {boolean} - Returns the value as a number if it is a valid age, otherwise returns false.
   */
  #validAge(value) {
    if (value < 16) {
      alert("Je bent te jong.");
      return false;
    } else return true;
  }

  /**
   * Checks if the given weight is within the valid range.
   *
   * @param {number} value - The weight to be checked.
   * @returns {number|boolean} - Returns the value if it is within the valid range, otherwise returns false.
   */
  #validWeight(value) {
    const weightClass = (weightClass) => {
      return `Dit is een zeer ${weightClass} gewicht en vereist gespecialiseerde hulp.`;
    };
    if (value < 40) {
      alert(weightClass("laag"));
      return false;
    }
    if (value > 200) {
      alert(weightClass("hoog"));
      return false;
    }
    return true;
  }

  #validHeight(value) {
    if (value < 1.4 || value > 2.3) {
      alert("Lengte is niet geldig");
      return false;
    }
    return true;
  }

  /**
   * Validates the key-value pair based on the object key.
   *
   * @param {string} objectKey - The key of the object.
   * @param {*} value - The value to be validated.
   * @returns {boolean} - True if the key-value pair is valid, otherwise false.
   */
  #validateKeyValues(objectKey, value) {
    if (objectKey === "age") {
      return this.#validateNumber(this.#validAge, value);
    }
    if (objectKey === "weight") {
      return this.#validateNumber(this.#validWeight, value);
    }
    if (objectKey === "height") {
      return this.#validateNumber(this.#validHeight, value);
    } else {
      return this.#validateNumber(this.#fieldIsFilled, value);
    }
  }
}

export default InputValidator;
// const dummyData2 = {
//   name: "  Maria Vos  ",
//   age: " 15 ",
//   weight: " 109 ", // Punt als decimaalscheiding met spaties
//   height: " 1,69 ",
//   gender: "V",
// };
//
// const formatter = new inputFormatter(dummyData2);
// const newObj = formatter.getNewObj;
// console.log(newObj);
// const validator = new InputValidator(newObj);
// console.log(validator.validator());
