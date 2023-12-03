import "./HeaderImage.css";
import { frontViewFit } from "../../assets/index.js";
import { BmiDisplay } from "../index.js";

function HeaderImage({ bmiValue, firstName }) {
  // const bmi = bmiValue.bmi;
  return (
    // <figure className="HeaderImageFigure">
    <div className="headerImgSection">
      {firstName && (
        <h2>
          Hey, {firstName.split("")[0].toUpperCase() + firstName.slice(1)}
        </h2>
      )}
      <img className="HeaderImage" src={frontViewFit} alt="fit-person" />
      {bmiValue && (
        <BmiDisplay className="HeaderImageBmiDisplay" bmiValue={bmiValue} />
      )}
    </div>
  );
}

export default HeaderImage;
