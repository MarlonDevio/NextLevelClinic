import InputFormatter from "./InputFormatter.js";
import InputValidator from "./InputValidator.js";

export function formatAndValidate(toFormat) {
  const formatter = new InputFormatter(toFormat);
  const formattedData = formatter.getNewObj;
  const validator = new InputValidator(formattedData);
  return validator.validator() ? formattedData : false;
}
