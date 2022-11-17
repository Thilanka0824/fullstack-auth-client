import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../Hooks/auth";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const HomePage = () => {
  const [message, setMessage] = useState("");

  const auth = useAuth();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
        },
      });
    };
    auth.userToken !== null ? fetchMessage() : setMessage("")
    
  }, [auth.userToken]);

  return (
    <div>
      HomePage
      <h1>Fullstack Auth Page</h1>
      <h3>{message}</h3>
    </div>
  );
};

export default HomePage;
