import React from "react";
import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState("")

  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className="login-main">
      {/* LoginPage */}
      <h1>Login</h1>
      <img
        className="homepage-image"
        src="https://cdn.pixabay.com/photo/2013/07/12/14/10/padlock-147913_960_720.png"
        alt=""
      />

      <div>
        <h3>{loginMessage}</h3>
        {/* <label>Email: </label> */}
        <br />
        <br />
        <br />
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
        <br />
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
        <button
          className="sign-up-button"
          // value={isLoggedIn}
          onClick={async () => {
            const loginResult = await auth.login(email, password);

            // if(loginResult.success){
            //   // setIsLoggedIn(true) //why isnt this setting the variable to true?
            //   // console.log(isLoggedIn)
            //   navigate("/")
            // } else {
            //   setLoginMessage(loginResult.message)
            // }

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
