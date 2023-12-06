import "./GptOutPutContainer.css";
import { destructureJSONGpt } from "../../utils/helpers.js";
import { useState } from "react";

function GptOutPutContainer({ gptOutput }) {
  const output = destructureJSONGpt(gptOutput);
  console.log(gptOutput);

  return (
    <div className="GptOutPutContainer">
      <div className="flex-col gptOutputFlex">
        <div className="mealTime flex-col ">
          <h3>Ontbijt</h3>
          <span>{output.ontbijtCal}</span>
          <ul>
            {output.ontbijtOpties.map((optie) => (
              <li key={optie}>{optie}</li>
            ))}
          </ul>
        </div>
        <div className="mealTime flex-col">
          <h3>Lunch</h3>
          <span>{output.lunchCal}</span>
        </div>
        <div className="mealTime flex-col">
          <h3>Diner</h3>
          <span>{output.dinerCal}</span>
        </div>
      </div>
    </div>
  );
}

export default GptOutPutContainer;
