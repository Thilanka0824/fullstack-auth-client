import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        {" "}
        <Link to="/">Home</Link> <Link to="/registration">Register</Link>{" "}
        <Link to="/login">Login</Link> copyright © {currentYear}{" "}
      </p>
    </footer>
  );
};

export default Footer;
