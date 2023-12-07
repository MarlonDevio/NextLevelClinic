import "./GptOutPutContainer.css";
import { destructureJSONGpt } from "../../utils/helpers.js";

function GptOutPutContainer({ gptOutput }) {
  const output = destructureJSONGpt(gptOutput);
  console.log(gptOutput);

  return (
    <div className="GptOutPutContainer">
      <div className="flex-col gptOutputFlex">
        <div className="mealTime flex-col ">
          <h3>Ontbijt</h3>
          <span>{output.ontbijtCal} cal</span>
          <ul>
            {output.ontbijtOpties.map((optie) => (
              <li key={optie}>{optie}</li>
            ))}
          </ul>
        </div>
        <div className="mealTime flex-col">
          <h3>Lunch</h3>
          <span>{output.lunchCal} cal</span>
          <ul>
            {output.lunchOpties.map((optie) => (
              <li key={optie}>{optie}</li>
            ))}
          </ul>
        </div>
        <div className="mealTime flex-col">
          <h3>Diner</h3>
          <span>{output.dinerCal} cal</span>
          <ul>
            {output.dinerOpties.map((optie) => (
              <li key={optie}>{optie}</li>
            ))}
          </ul>
        </div>
        <div className="mealTime flex-col">
          <h3>Tussendoortjes</h3>
          <span>{output.tussendoortjesCal}</span>
          <span>{output.tussendoortjesFrequentie}</span>
          <span>{output.tussendoortjesTijdstip}</span>
          <ul>
            {output.tussendoortjesOpties.map((optie) => (
              <li key={optie}>{optie}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GptOutPutContainer;
