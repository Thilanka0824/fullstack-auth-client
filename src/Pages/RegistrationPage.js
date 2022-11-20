import React from "react";
import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className="registration-main">
      {/* Registration Page */}
      <h1>Register Here</h1>
      <div>
        <h3>{registerMessage}</h3>

        <label>Email: </label>
        <br />
        <input
          value={email}
          type="text"
          // placeholder="email@here.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <label>Password: </label>
        <br />
        <input
          value={password}
          type="password"
          // placeholder="set password"
          autoComplete="current password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <br />
        <br />
        <button
          className="login-button"
          onClick={async () => {
            const registerResult = await auth.register(email, password);
            registerResult.success
              ? navigate("/login")
              : setRegisterMessage(registerResult.message);
          }}
        >
          Sign Up
        </button>
        <br />
      </div>
    </div>
  );
};

export default RegistrationPage;
