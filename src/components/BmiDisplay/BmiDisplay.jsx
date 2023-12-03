import "./BmiDisplay.css";

function BmiDisplay({ className, bmiValue }) {
  return (
    <div className={`BmiDisplay ${className}`}>
      <p className="flex-col">
        BMI: {bmiValue.bmi} {""}
        <span>{bmiValue.classification.toUpperCase()}</span>
      </p>
    </div>
  );
}

export default BmiDisplay;
