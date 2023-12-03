import "./UserInputForm.css";
import { useState } from "react";
import { Button } from "../../common/index.js";
import InputFormatter from "../../utils/InputFormatter.js";
import InputValidator from "../../utils/InputValidator.js";
import { classifyBMI } from "../../helpers/calcBmi.js";

function UserInputForm({ onFormSubmit, getClientInfo }) {
  const [inputFields, setInputFields] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
  });
  // const [bmi, setBmi] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    console.log(inputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatter = new InputFormatter(inputFields);
    const formattedData = formatter.getNewObj;
    const validator = new InputValidator(formattedData);
    if (validator.validator()) {
      const bmi = classifyBMI(formattedData);
      console.log(bmi);
      onFormSubmit(bmi);
      getClientInfo(formattedData);
    }
  };

  return (
    <form
      className="UserInputForm flex-col"
      onSubmit={(e) => {
        handleSubmit(e);
        setIsSubmitted(true);
      }}
    >
      <h2>Klantgegevens</h2>
      <label className="inputLabel">
        <input name="name" placeholder="Naam" onChange={handleInputChange} />
      </label>
      <label className="inputLabel">
        <input name="age" placeholder="Leeftijd" onChange={handleInputChange} />
      </label>
      <label className="inputLabel">
        <input
          name="weight"
          placeholder="Gewicht"
          onChange={handleInputChange}
        />
      </label>
      <label className="inputLabel">
        <input
          name="height"
          placeholder="Lengte"
          onChange={handleInputChange}
        />
      </label>
      <label className="inputLabel">
        <input name="gender" placeholder="M/V" onChange={handleInputChange} />
      </label>
      <Button
        content={"Bereken BMI"}
        className={"btn-bmi-light"}
        onSubmit={handleSubmit}
      />
    </form>
  );
}

export default UserInputForm;
