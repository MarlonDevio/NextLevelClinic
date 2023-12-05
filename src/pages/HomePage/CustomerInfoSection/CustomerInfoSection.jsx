import "./CustomerInfoSection.css";
import {
  HeaderImage,
  TastePreferenceForm,
  UserInputForm,
} from "../../../components/index.js";

function CustomerInfoSection({
  bmiValue,
  clientInfo,
  userInputFields,
  handleSubmit,
  setTasteUserPreference,
  handlePreferenceSubmit,
}) {
  return (
    <section className="">
      <div className="container flex-row CustomerInfoSection">
        <HeaderImage bmiValue={bmiValue} firstName={clientInfo.name} />
        <UserInputForm
          handleSubmit={handleSubmit}
          userInputFields={userInputFields}
        />
        <TastePreferenceForm
          handlePreferenceSubmit={handlePreferenceSubmit}
          setTasteUserPreference={setTasteUserPreference}
        />
      </div>
    </section>
  );
}

export default CustomerInfoSection;
