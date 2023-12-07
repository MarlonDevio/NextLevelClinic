import "./styles/layouts.css";
import {
  Footer,
  // Body,
  Navigation,
  SignIn,
  ParticlesComponent,
} from "./components/index.js";
import { useState, useEffect } from "react";
import OpenAiGpt from "./api/OpenAiGpt.js";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { Form } from "./common/index.js";
import CustomerDataInputFields from "./constants/customerDataInputFields.js";

function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentificatiestatus\

  const handleSignOut = () => {
    setIsLoggedIn(false); // Update de inlogstatus
    // eventueel andere acties bij uitloggen
  };
  useEffect(() => {
    const handlePopstate = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const handleSignIn = () => {
    // Implementeer hier logica voor het inloggen
    setIsLoggedIn(true); // Gebruiker is ingelogd
    navigate("/home"); // Navigeer naar de homepagina
  };
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };
  return (
    <>
      {!isLoggedIn && <SignIn handleSignIn={handleSignIn} />}
      {isLoggedIn && (
        <>
          <ParticlesComponent />
          <Navigation handleSignOut={handleSignOut} />
          <HomePage />
        </>
      )}
    </>
  );
}

export default App;
