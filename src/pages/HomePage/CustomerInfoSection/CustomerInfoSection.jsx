import "./CustomerInfoSection.css";
import {
  HeaderImage,
  NutritionPlanDisplay,
  SloganTitle,
  TastePreferenceForm,
  UserInputForm,
} from "../../../components/index.js";
import { useState } from "react";

function CustomerInfoSection() {
  const [bmiValue, setBmiValue] = useState(null);
  const [clientInfo, setClientInfo] = useState({});

  const handleFormSubmit = (bmi) => {
    setBmiValue(bmi);
  };

  const handleClientInfo = (clientInfo) => {
    setClientInfo(clientInfo);
  };

  return (
    <section className="">
      <div className="container flex-row CustomerInfoSection">
        {/*<SloganTitle />*/}
        {/*<BmiDisplay />*/}
        <HeaderImage bmiValue={bmiValue} firstName={clientInfo.name} />
        <UserInputForm
          onFormSubmit={handleFormSubmit}
          getClientInfo={handleClientInfo}
        />
        <TastePreferenceForm />
      </div>
    </section>
  );
}

export default CustomerInfoSection;
