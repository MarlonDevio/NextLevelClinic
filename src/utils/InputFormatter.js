class InputFormatter {
  #formattedObj;

  // Constructor: Initializes a new instance of the InputFormatter class.
  constructor(dataObj) {
    this.dataObj = dataObj; // Stores the provided object in the class.
    this.#destructure(); // Initializes #newObj to null.
  }

  // Setter for #newObj.
  set setNewObj(newObj) {
    this.#formattedObj = newObj; // Assigns the provided value to #newObj.
  }

  // Getter for #newObj.
  get getNewObj() {
    return this.#formattedObj; // Returns the value of #newObj.
  }

  // Private method to destructure and process the data object.
  #destructure() {
    const newObject = {};
    for (const key in this.dataObj) {
      if (this.dataObj.hasOwnProperty(key)) {
        // Trims whitespace and checks if the value is numeric,
        // then either converts it to a float or keeps it as is.
        const trimmedKey = this.#trimWhiteSpace(this.dataObj[key]);
        newObject[key] = this.#isNumeric(trimmedKey)
          ? this.#convertStrNumberToFloat(trimmedKey)
          : trimmedKey;
      }
    }
    this.setNewObj = newObject; // Sets the processed object to #newObj using the setter.
  }

  // Private method to check if a value is numeric.
  #isNumeric(value) {
    const normalizedStr = value.replace(",", ".");
    return !isNaN(parseFloat(normalizedStr)) && isFinite(normalizedStr);
  }

  // Private method to trim whitespace from a string.
  #trimWhiteSpace(value) {
    return value.trim();
  }

  // Private method to convert a string representation of a number to a float.
  #convertStrNumberToFloat(value) {
    const strNumber = value.replace(",", ".");
    return parseFloat(strNumber);
  }
}

export default InputFormatter;
