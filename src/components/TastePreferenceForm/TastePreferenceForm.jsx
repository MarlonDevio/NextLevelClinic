import "./TastePreferenceForm.css";
import { Button } from "../../common/index.js";
import { useState } from "react";

function TastePreferenceForm({
  setTasteUserPreference,
  handlePreferenceSubmit,
}) {
  return (
    <form
      onSubmit={(e) => {
        handlePreferenceSubmit(e);
      }}
      className="TastePreferenceForm flex-col"
      // onSubmit={handlePreferenceSubmit}
    >
      <h2>VoedingVoorkeuren</h2>
      <label className="inputLabel">
        <input
          type="text"
          name="voorkeurVoedingSmaak"
          placeholder={"Voorkeur Voeding Smaak"}
          onChange={setTasteUserPreference}
        />
      </label>
      <label className="inputLabel">
        <input
          onChange={setTasteUserPreference}
          type="text"
          name="voorkeurDrankSmaak"
          placeholder={"Voorkeur Drank Smaak"}
        />
      </label>
      <label className="inputLabel">
        <input
          onChange={setTasteUserPreference}
          type="text"
          name="voorkeurGerecht"
          placeholder={"Lievelingsgerecht"}
        />
      </label>
      <Button content={"Volgende"} className={"btn-bmi-light"} />
    </form>
  );
}

export default TastePreferenceForm;
