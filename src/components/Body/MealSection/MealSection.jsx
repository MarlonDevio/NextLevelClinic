import "./MealSection.css";
import { ClientInfo } from "../../index.js";
import { useEffect, useState } from "react";
import { classifyBMI } from "../../../helpers/calcBmi.js";
import OpenAiGpt from "../../../helpers/OpenAiGpt.js";
import BmiDisplay from "./BmiDisplay/BmiDisplay.jsx";

// function MealSection() {
// const [inputValues, setInputValues] = useState({});
// const [bmiValues, setBmiValues] = useState({
//   bmi: null,
//   bmiClassification: null,
// });
// const [isSubmitted, setIsSubmitted] = useState(false);
// const [aiAnswer, setAiAnswer] = useState(null);
// const [taste, setTaste] = useState(null);
//
//   useEffect(() => {
//     if (isValidInput(inputValues)) {
//       const bmiResult = classifyBMI(inputValues);
//       setBmiValues({
//         bmi: bmiResult.bmi,
//         bmiClassification: bmiResult.classification,
//       });
//     }
//   }, [inputValues]);
//
//   async function getAiResponse(question) {
//     const ai = new OpenAiGpt(question);
//     await ai.generateAnswer();
//     const answer = ai.getAnswer;
//     setAiAnswer(answer);
//     console.log(answer);
//   }
//
//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//
//     setInputValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//
//   const onButtonSubmit = (e) => {
//     if (e.key === "Enter") {
//       setIsSubmitted(true);
//
//       // getAiResponse(inputData + " " + bmiData);
//     }
//   };
//
//   const onGptValueInput = (e) => {
//     if (e.key === "Enter") {
//       setTaste(e.key.target);
//       const inputData = JSON.stringify(inputValues);
//       const bmiData = JSON.stringify(bmiValues);
//       const gptData = inputData + " " + bmiData + " " + e.key.target;
//       getAiResponse(gptData);
//     }
//   };
//
//   function isValidInput(values) {
//     const { naam, leeftijd, gewicht, lengte } = values;
//     const parsedLengte = parseFloat(lengte);
//     if (
//       naam &&
//       parseInt(leeftijd) >= 16 &&
//       parseFloat(gewicht) >= 40 &&
//       parsedLengte >= 1.5 &&
//       parsedLengte <= 2.2
//     ) {
//       return true;
//     }
//   }
//
//   return (
//     <section className="flex flex-col meals">
//       <ClientInfo
//         onInputChange={onInputChange}
//         onButtonSubmit={onButtonSubmit}
//       />
//       {isSubmitted && (
//         <BmiDisplay bmiValues={bmiValues} onGptValueInput={onGptValueInput} />
//       )}
//       <div className="ai_answer_section">{aiAnswer}</div>
//     </section>
//   );
// }
//
// export default MealSection;
