import "./HomePage.css";
import {
  NutritionPlanDisplaySection,
  CustomerInfoSection,
} from "../../components/index.js";
import { useState } from "react";
import useFormFields from "../../hooks/useFormFields.js";
import { formatAndValidate } from "../../utils/helpers.js";
import { classifyBMI } from "../../helpers/calcBmi.js";

function HomePage() {
  /******* userInputFields for ClientInfo *********/
  // 1) gets and sets the userInputfields from the UserInputForm on change
  const [userInputFields, setUserInputFields] = useFormFields({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
  });
  const [correctedUserInputFields, setCorrectedUserInputFields] = useState({});

  /*** Taste Preference fields ***/
  const [userTastePreferenceFields, setUserTastePreferenceFields] =
    useFormFields({
      voorkeurVoedingSmaak: "",
      voorkeurDrankSmaak: "",
      voorkeurGerecht: "",
    });
  const [
    validatedUserTastePreferenceFields,
    setValidatedUserTastePreferenceFields,
  ] = useState({});

  const [bmiValue, setBmiValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctData = formatAndValidate(userInputFields);
    if (correctData) {
      const bmi = classifyBMI(correctData);
      setBmiValue(bmi);
      setCorrectedUserInputFields(correctData);
    }
  };

  const handlePreferenceSubmit = (e) => {
    e.preventDefault();
    const correctData = formatAndValidate(userTastePreferenceFields);
    if (correctData) {
      setValidatedUserTastePreferenceFields(correctData);
    }
  };

  return (
    <main className="HomePage flex-col">
      <CustomerInfoSection
        handleSubmit={handleSubmit}
        userInputFields={setUserInputFields}
        clientInfo={correctedUserInputFields}
        bmiValue={bmiValue}
        setTasteUserPreference={setUserTastePreferenceFields}
        handlePreferenceSubmit={handlePreferenceSubmit}
      />
      <NutritionPlanDisplaySection
        preferenceInfo={validatedUserTastePreferenceFields}
        clientInfo={correctedUserInputFields}
        bmiValue={bmiValue}
      />
    </main>
  );
}

export default HomePage;
