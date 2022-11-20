import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth";

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
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      const result = await response.json();
      setMessage(result.message);
    };
    auth.userToken !== null ? fetchMessage() : setMessage("");
  }, [auth.userToken]);

  return (
    <div className="homepage-main">
      HomePage
      <h1>Fullstack Auth Page</h1>
      <h3>{message}</h3>
      
    </div>
  );
};

export default HomePage;
