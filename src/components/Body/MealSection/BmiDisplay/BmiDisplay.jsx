// import "./BmiDisplay.css";
//
// function BmiDisplay({ bmiValues, onGptValueInput }) {
//   return (
//     <div>
//       <div
//         className={`bmi flex ${
//           bmiValues.bmi >= 40
//             ? "black"
//             : bmiValues.bmi >= 35
//               ? "dark_red"
//               : bmiValues.bmi >= 30
//                 ? "red"
//                 : bmiValues.bmi >= 25
//                   ? "orange"
//                   : bmiValues.bmi >= 18.5
//                     ? "green"
//                     : "light_blue"
//         }`}
//       >
//         <span>BMI {bmiValues.bmi.toFixed(2)}</span>{" "}
//         <span className="bmi_class">{bmiValues.bmiClassification}</span>
//       </div>
//       <div className="taste_field">
//         <input
//           type="text"
//           placeholder="smaakvoorkeur"
//           onKeyDown={onGptValueInput}
//         />
//       </div>
//     </div>
//   );
// }
//
// export default BmiDisplay;
