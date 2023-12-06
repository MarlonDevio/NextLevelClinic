import { ThreeDFlipCard } from "../../../common/index.js";
import "./NutritionPlanDisplay.css";
import Loader from "../../../common/Loader/Loader.jsx";
import OpenAiGpt from "../../../api/OpenAiGpt.js";
import { Button, H2Header } from "../../../common/index.js";
import { useState } from "react";
import { GptOutPutContainer } from "../../../components/index.js";

function NutritionPlanDisplaySection({ bmiValue, clientInfo, preferenceInfo }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gptAnswer, setGptAnswer] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (!bmiValue && preferenceInfo && clientInfo) {
      alert("Je hebt niet alles ingevuld");
      return;
    }
    const userData = {
      name: clientInfo.name,
      age: clientInfo.age,
      weight: clientInfo.weight,
      height: clientInfo.height,
      gender: clientInfo.gender,
      bmi: bmiValue.bmi,
      bmiClassification: bmiValue.classification,
      voorkeurGerecht: preferenceInfo.voorkeurGerecht,
      voorkeurDrankSmaak: preferenceInfo.voorkeurDrankSmaak,
      voorkeurVoedingSmaak: preferenceInfo.voorkeurVoedingSmaak,
      doelen: "spiermassa aankomen",
    };
    console.log(userData);

    setIsLoading(true);
    const gptInstance = new OpenAiGpt(userData);
    await gptInstance.generateAnswer();
    setGptAnswer(gptInstance.getAnswer);
    setIsLoading(false);
    console.log(gptAnswer);
  };

  return (
    <section className="NutritionPlanDisplaySection">
      <div className="container flex-col">
        <H2Header
          content={"Next Level Nutrition Plan"}
          className={"dark-header"}
        />

        <Button
          onClick={handleClick}
          content={"Genereer Next Level Nutrition Plan"}
          className={"btn-generate-dark"}
        />
        {isLoading ? (
          <Loader />
        ) : (
          gptAnswer && <GptOutPutContainer gptOutput={gptAnswer} />
        )}
      </div>
    </section>
  );
}

export default NutritionPlanDisplaySection;
