import "./TastePreferenceForm.css";
import { Button } from "../../common/index.js";
import { useState } from "react";

function TastePreferenceForm({ handlePreferenceSubmit }) {
  const [preferenceFields, setPreferenceFields] = useState({
    voorkeurVoedingSmaak: "",
    voorkeurDrankSmaak: "",
    voorkeurSmaak: "",
  });

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    setPreferenceFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    console.log(JSON.stringify(preferenceFields));
  };

  return (
    <form
      className="TastePreferenceForm flex-col"
      onSubmit={handlePreferenceSubmit}
    >
      <h2>VoedingVoorkeuren</h2>
      <label className="inputLabel">
        <input
          type="text"
          name="voorkeurVoedingSmaak"
          placeholder={"Voorkeur Voeding Smaak"}
          onChange={handlePreferenceChange}
        />
      </label>
      <label className="inputLabel">
        <input
          onChange={handlePreferenceChange}
          type="text"
          name="voorkeurDrankSmaak"
          placeholder={"Voorkeur Drank Smaak"}
        />
      </label>
      <label className="inputLabel">
        <input
          onChange={handlePreferenceChange}
          type="text"
          name="voorkeurSmaak"
          placeholder={"Lievelingsgerecht"}
        />
      </label>
      <Button content={"Volgende"} className={"btn-bmi-light"} />
    </form>
  );
}

export default TastePreferenceForm;
