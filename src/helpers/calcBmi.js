const calcBmi = (weight, heightInMeters) =>
  weight / (heightInMeters * heightInMeters);

export const classifyBMI = (clientObj) => {
  const { weight, height } = clientObj;
  const bmi = calcBmi(weight, height);
  const roundedBmi = bmi.toFixed(2); // Round BMI to 2 decimal places
  const categories = [
    { min: null, max: 18.5, classification: 'Underweight' },
    { min: 18.5, max: 24.9, classification: 'Normal' },
    { min: 25.0, max: 29.9, classification: 'Overweight' },
    { min: 30.0, max: 34.9, classification: 'Obesity Class I' },
    { min: 35.0, max: 39.9, classification: 'Obesity Class II' },
    { min: 40, max: null, classification: 'Obesity Class III' }
  ];

  const category = categories.find(
    ({ min, max }) =>
      (min === null || bmi >= min) && (max === null || bmi <= max)
  );
  return {
    bmi: roundedBmi,
    classification: category ? category.classification : 'Unknown'
  };
};
