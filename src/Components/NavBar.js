import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  return (
    <div>
      <div className="nav-bar">
        <Link className="nav-bar-item" to="/">
          Home
        </Link>
        <Link className="nav-bar-item" to="/registration">
          Registration
        </Link>
        <Link className="nav-bar-item" to="login">
          Login
        </Link>
        <p className="nav-bar-logout-button">
          {auth.userEmail !== null && auth.userEmail.length > 0 ? (
            <button
              id=""
              onClick={(e) => {
                auth.logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </p>

        <br />
      </div>

      <div>
        <h3>{console.log(auth.userEmail)}</h3>
        <h3 className="nav-bar-user-display">
          {auth.userEmail !== null && auth.userEmail.length > 0
            ? `${auth.userEmail} is logged in`
            : "please log in"}
        </h3>
      </div>
    </div>
  );
};

export default NavBar;
