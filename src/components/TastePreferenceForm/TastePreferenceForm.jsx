import "./TastePreferenceForm.css";

function TastePreferenceForm() {
  return (
    <div className="TastePreferenceForm flex-col">
      <h2>VoedingVoorkeuren</h2>
      <label>
        <input
          type="text"
          name="voorkeurVoedingSmaak"
          placeholder={"Voorkeur Voeding Smaak"}
        />
      </label>
      <label>
        <input
          type="text"
          name="voorkeurDrankSmaak"
          placeholder={"Voorkeur Drank Smaak"}
        />
      </label>
      <label>
        <input
          type="text"
          name="voorkeurSmaak"
          placeholder={"Lievelingsgerecht"}
        />
      </label>
    </div>
  );
}

export default TastePreferenceForm;
