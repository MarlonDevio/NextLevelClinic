import "./HomePage.css";
import {
  // BmiDisplay,
  HeaderImage,
  Navigation,
  NutritionPlanDisplay,
  SloganTitle,
  TastePreferenceForm,
  UserInputForm,
} from "../../components/index.js";
import CustomerInfoSection from "./CustomerInfoSection/CustomerInfoSection.jsx";

function HomePage() {
  return (
    <main className="HomePage flex-col">
      <CustomerInfoSection />
      <NutritionPlanDisplay />
    </main>
  );
}

export default HomePage;
