import "./Navigation.css";
import { logo } from "../../assets/index.js";

function Navigation({ handleSignOut }) {
  return (
    <nav className="navbar">
      <img className="logo__img" alt="logo_next_level_clinic" src={logo} />
      <button className="sign-out" onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
}

export default Navigation;
