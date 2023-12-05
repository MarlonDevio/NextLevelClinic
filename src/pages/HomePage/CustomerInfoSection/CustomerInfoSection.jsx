import "./CustomerInfoSection.css";
import {
  HeaderImage,
  TastePreferenceForm,
  UserInputForm,
} from "../../../components/index.js";
import { useState } from "react";

function CustomerInfoSection({
  onFormSubmit,
  handleClientInfo,
  bmiValue,
  clientInfo,
  handlePreferenceSubmit,
}) {
  return (
    <section className="">
      <div className="container flex-row CustomerInfoSection">
        <HeaderImage bmiValue={bmiValue} firstName={clientInfo.name} />
        <UserInputForm
          onFormSubmit={onFormSubmit}
          handleClientInfo={handleClientInfo}
        />
        <TastePreferenceForm handlePreferenceSubmit={handlePreferenceSubmit} />
      </div>
    </section>
  );
}

export default CustomerInfoSection;
