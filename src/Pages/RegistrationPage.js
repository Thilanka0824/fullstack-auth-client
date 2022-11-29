import React from "react";
import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [confirmPass, setConfirmPass] = useState("")
  const [registerMessage, setRegisterMessage] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className="registration-main">
      {/* Registration Page */}
      <h1>Register</h1>
      <div>
        <h3>{registerMessage}</h3>

        {/* <label>Email: </label> */}
        <br />
        <br />
        <br />
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <br/>
        <input
          value={email}
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        {/* <label>Password: </label> */}
        {/* <br /> */}
        <input
          value={password}
          type="password"
          placeholder="password"
          autoComplete="current password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        {/* <br/> */}
        {/* <input
        value={confirmPass}
        type="password"
        placeholder="confirm password"
        autoComplete=""
        onChange={(e) => {

          setConfirmPass(e.target.value)
        }}
        ></input> */}

        <br />
        <br />
        <button
          className="login-button"
          onClick={async () => {
            const registerResult = await auth.register(email, password, username);
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
