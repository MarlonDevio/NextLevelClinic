import "./HomePage.css";
import {
  NutritionPlanDisplaySection,
  CustomerInfoSection,
} from "../../components/index.js";
import { useState } from "react";

function HomePage() {
  const [bmiValue, setBmiValue] = useState(null);
  const [clientInfo, setClientInfo] = useState({});

  const handleFormSubmit = (bmi) => {
    setBmiValue(bmi);
  };

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
      />
      <NutritionPlanDisplaySection
        clientInfo={clientInfo}
        bmiValue={bmiValue}
      />
    </main>
  );
}

export default HomePage;
