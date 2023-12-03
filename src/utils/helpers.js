export const userInputValidation = (userInputObj) => {
  const { name, age, weight, height, gender } = userInputObj;
  // Vervang komma's door punten
  const weightFormatted = weight.replace(",", ".");
  const heightFormatted = height.replace(",", ".");
  const weightAsInt = parseFloat(weightFormatted);
  const heightAsInt = parseFloat(heightFormatted);
  const ageAsInt = parseInt(age);

  if (isNaN(ageAsInt) || isNaN(weightAsInt) || isNaN(heightAsInt)) {
    alert(
      "Controleer de ingevoerde gegevens. Sommige waarden zijn geen geldige getallen.",
    );
    return false;
  }

  if (ageAsInt < 16) {
    alert("Je moet minimaal 16 jaar zijn.");
    return false;
  } else {
    return true;
  }
};
