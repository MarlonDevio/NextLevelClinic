import "./HomePage.css";
import {
  NutritionPlanDisplaySection,
  CustomerInfoSection,
} from "../../components/index.js";
import { useState } from "react";

function HomePage() {
  const [bmiValue, setBmiValue] = useState(null);
  const [clientInfo, setClientInfo] = useState({});
  const [preferences, setPreferences] = useState({});

  // Function to handle the preference submit
  /* Belongs to tastePreferenceForm */
  const handlePreferenceSubmit = (preferences) => {
    setPreferences(preferences);
  };

  // Function to handle the form submit and set the bmi value
  /* Belongs to UserInputForm */
  const handleFormSubmit = (bmi) => {
    setBmiValue(bmi);
  };

  // Function to handle the client info
  /* Belongs to UserInputForm */
  const handleClientInfo = (clientInfo) => {
    setClientInfo(clientInfo);
  };

  return (
    <main className="HomePage flex-col">
      <CustomerInfoSection
        onFormSubmit={handleFormSubmit}
        clientInfo={clientInfo}
        bmiValue={bmiValue}
        handleClientInfo={handleClientInfo}
        handlePreferenceSubmit={handlePreferenceSubmit}
      />
      <NutritionPlanDisplaySection
        clientInfo={clientInfo}
        bmiValue={bmiValue}
      />
    </main>
  );
}

export default HomePage;
