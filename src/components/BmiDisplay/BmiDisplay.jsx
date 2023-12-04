import './BmiDisplay.css';

function BmiDisplay({ bmiValue }) {
  return (
    <div className={'BmiDisplay'}>
      <p className='flex-col'>
        BMI: {bmiValue.bmi} {''}
        <span
          className={`${
            bmiValue.bmi >= 40
              ? 'black'
              : bmiValue.bmi >= 35
                ? 'dark_red'
                : bmiValue.bmi >= 30
                  ? 'red'
                  : bmiValue.bmi >= 25
                    ? 'orange'
                    : bmiValue.bmi >= 18.5
                      ? 'green'
                      : 'light_blue'
          }`}
        >
          {bmiValue.classification.toUpperCase()}
        </span>
      </p>
    </div>
  );
}

export default BmiDisplay;
