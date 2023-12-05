import { ThreeDFlipCard } from "../../common";
import "./NutritionPlanDisplay.css";
import Loader from "../../common/Loader/Loader.jsx";
import OpenAiGpt from "../../api/OpenAiGpt.js";
import { Button } from "../../common/index.js";
import { useState } from "react";
import openAiGpt from "../../api/OpenAiGpt.js";

function NutritionPlanDisplaySection({ bmiValue, clientInfo }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gptAnswer, setGptAnswer] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (bmiValue) {
      setIsLoading(true);
      const gptInstance = new OpenAiGpt(JSON.stringify(bmiValue));
      await gptInstance.generateAnswer();
      setGptAnswer(gptInstance.getAnswer);
      setIsLoading(false);
    }
  };
  return (
    <section className="NutritionPlanDisplaySection">
      <div className="container">
        {clientInfo && <p>{clientInfo.name}</p>}
        <h2>Next Level Nutrition Plan</h2>
        <Button
          onClick={handleClick}
          content={"Genereer Next Level Nutrition Plan"}
          className={"btn-generate-dark"}
        />
        {isLoading ? (
          <Loader />
        ) : (
          gptAnswer && <p style={{ color: "black" }}>{gptAnswer}</p>
        )}
      </div>
    </section>
  );
}

export default NutritionPlanDisplaySection;
