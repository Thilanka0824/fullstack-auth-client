import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { AiOutlineShoppingCart } from "react-icons/ai";


const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  return (
    <nav>
      <div className="nav-bar">
        <Link className="nav-bar-item" to="/">
          Home
        </Link>
        <Link className="nav-bar-item" to="/profile">
          Profile
        </Link>
        <Link className="nav-bar-item" to="/display">
          Display
        </Link>
        <Link className="nav-bar-item" to="/registration">
          Registration
        </Link>

        {/* {auth.userEmail === undefined ? (
        
        ) : ("")} */}

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
            <Link className="nav-bar-item" to="login">
              Login
            </Link>
          )}
        </p>
        <div>
          <Link className="nav-bar-item-cart" to="/cartpage">
            <AiOutlineShoppingCart size={28} />
          </Link>

          
        </div>

        <br />
      </div>

      <div>
        <h3>{console.log(auth.userEmail)}</h3>
        <h3 className="nav-bar-user-display">
          {auth.userEmail !== null && auth.userEmail.length > 0
            ? `${auth.username} is logged in`
            : "please log in"}
        </h3>
      </div>
    </nav>
  );
};

export default NavBar;
