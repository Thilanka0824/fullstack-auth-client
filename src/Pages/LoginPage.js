import React from "react";
import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className="login-main">
      {/* LoginPage */}
      <h1>Login</h1>
      <div>
        <h3>{loginMessage}</h3>
        {/* <label>Email: </label> */}
        <br/>
        <br/>
        <br/>
        <input
          value={email}
          type="text"
          placeholder="email"
          autoComplete="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        {/* <br /> */}
        {/* <label>Password: </label> */}
        <br/>
        <input
          value={password}
          type="password"
          autoComplete="current-password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button className="sign-up-button"
          onClick={async () => {
            const loginResult = await auth.login(email, password);

            loginResult.success
              ? navigate("/")
              : setLoginMessage(loginResult.message);
          }}
        >
          Login
        </button>
       
      </div>
    </div>
  );
};

export default LoginPage;
