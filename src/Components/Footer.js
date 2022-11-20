import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        {" "}
        <Link to="/">Home</Link> <Link to="/registration">Register</Link>{" "}
        <Link to="/login">Login</Link> copyright © {currentYear}{" "}
      </p>
    </footer>
  );
};

export default Footer;
