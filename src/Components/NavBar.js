import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/auth";
// import { AuthProvider } from "../Hooks/auth";

const NavBar = ({ userEmail }) => {
  const auth = useAuth();
  return (
    <div>
      <h3>
        {auth.userEmail !== null
          ? `Current User: ${auth.userEmail}`
          : "user not found"}
      </h3>
      <Link to="/">Home Page </Link>
      <Link to="/registration">Registration Form </Link>
      <Link to="login">Login Form</Link>
    </div>
  );
};

export default NavBar;
