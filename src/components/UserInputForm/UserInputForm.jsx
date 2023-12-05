import "./UserInputForm.css";

import { Button } from "../../common/index.js";

function UserInputForm({ userInputFields, handleSubmit }) {
  return (
    <form
      className="UserInputForm flex-col"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Klantgegevens</h2>
      <label className="inputLabel">
        <input name="name" placeholder="Naam" onChange={userInputFields} />
      </label>
      <label className="inputLabel">
        <input name="age" placeholder="Leeftijd" onChange={userInputFields} />
      </label>
      <label className="inputLabel">
        <input name="weight" placeholder="Gewicht" onChange={userInputFields} />
      </label>
      <label className="inputLabel">
        <input name="height" placeholder="Lengte" onChange={userInputFields} />
      </label>
      <label className="inputLabel">
        <input name="gender" placeholder="M/V" onChange={userInputFields} />
      </label>
      <Button content={"Bereken BMI"} className={"btn-bmi-light"} />
    </form>
  );
}

export default UserInputForm;
