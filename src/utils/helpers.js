import InputFormatter from "./InputFormatter.js";
import InputValidator from "./InputValidator.js";
import OpenAiGpt from "../api/OpenAiGpt.js";

export function formatAndValidate(toFormat) {
  const formatter = new InputFormatter(toFormat);
  const formattedData = formatter.getNewObj;
  const validator = new InputValidator(formattedData);
  return validator.validator() ? formattedData : false;
}

export function destructureJSONGpt(jsonbObj) {
  let jsonString = jsonbObj.replace(/```json\n|```/g, "");

  console.log(jsonString);

  const data = JSON.parse(jsonString);
  const { naam, BMI, smaakvoorkeuren, doelen, maaltijden } =
    data.voedingsschema;
  // const { ontbijt, lunch, diner, tussendoortjes } = maaltijden;

  let formatted = {};
  const structuur = maaltijden.map((tijdstip) => {
    if (tijdstip.ontbijt) {
      formatted.ontbijtCal = tijdstip.ontbijt.calorieen;
      formatted.ontbijtOpties = tijdstip.ontbijt.opties;
    }

    if (tijdstip.lunch) {
      formatted.lunchCal = tijdstip.lunch.calorieen;
      formatted.lunchOpties = tijdstip.lunch.opties;
    }

    if (tijdstip.diner) {
      formatted.dinerCal = tijdstip.diner.calorieen;
      formatted.dinerOpties = tijdstip.diner.opties;
    }

    if (tijdstip.tussendoortjes) {
      formatted.tussendoortjesFrequentie = tijdstip.tussendoortjes.frequentie;
      formatted.tussendoortjesTijdstip = tijdstip.tussendoortjes.tijdstip;
      formatted.tussendoortjesCal = tijdstip.tussendoortjes.calorieen;
      formatted.tussendoortjesOpties = tijdstip.tussendoortjes.opties;
    }
  });
  return formatted;
}

// const testObj = `{
//   "voedingsschema": {
//     "naam": "[Naam]",
//     "BMI": "[BMI]",
//     "smaakvoorkeuren": "[Smaakvoorkeuren]",
//     "doelen": "[Doelen]",
//     "maaltijden": [
//       {
//         "ontbijt": {
//           "calorieen": "[aantal calorieën]",
//           "opties": [
//             "[Ontbijt Optie 1]",
//             "[Ontbijt Optie 2]",
//             "[Ontbijt Optie 3]"
//           ]
//         }
//       },
//       {
//         "lunch": {
//           "calorieen": "[aantal calorieën]",
//           "opties": [
//             "[Lunch Optie 1]",
//             "[Lunch Optie 2]",
//             "[Lunch Optie 3]"
//           ]
//         }
//       },
//       {
//         "diner": {
//           "calorieen": "[aantal calorieën]",
//           "opties": [
//             "[Diner Optie 1]",
//             "[Diner Optie 2]",
//             "[Diner Optie 3]"
//           ]
//         }
//       },
//       {
//         "tussendoortjes": {
//           "frequentie": "[frequentie]",
//           "tijdstip": "[tijdstip]",
//           "calorieen": "[aantal calorieën]",
//           "opties": [
//             "[Snack Optie 1]",
//             "[Snack Optie 2]",
//             "[Snack Optie 3]"
//           ]
//         }
//       }
//     ]
//   }
// }`;
//
// destructureJSONGpt(testObj);
