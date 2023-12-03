import "./SignIn.css";
import { useState } from "react";
import { logo } from "../../assets/index.js";

function SignIn({ handleSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Controleer de inloggegevens
    if (username === "pad" && password === "0000") {
      handleSignIn(); // Succesvolle inloggegevens
    } else {
      alert("Onjuiste e-mail of wachtwoord"); // Toon een foutmelding
    }
  };
  return (
    <div className="sign_in_body">
      <img src={logo} className="fade-in-img" alt="fade-in-logo" />
      <div
        className="sign_in_form"
        style={{ position: "relative", zIndex: 1000 }}
      >
        <form onSubmit={handleSubmit}>
          <fieldset id="sign_up">
            <legend>Sign In</legend>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="signin_btn" type="submit">
              Sign In
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
