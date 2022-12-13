import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { useCart } from "../Hooks/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BsCart4} from "react-icons/bs"
import { SlLogin } from "react-icons/sl";
// import CartContext from "../Hooks/CartContext";
import { RiProfileLine } from "react-icons/ri";
import {FiUser} from "react-icons/fi"


const NavBar = () => {
  const auth = useAuth();
  // const Cart = useCart();
  // const { itemee } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(auth);

  const LoginCard = () => {
    return (
      <Link
        className="nav-bar-item-right"
        style={{"fontWeight": "200",}}
        to="/profile">
        {auth.userEmail !== null && auth.userEmail.length > 0
          ? `${auth.username}`
          : <FiUser size={28}/>}
      </Link>
    );
  };

  return (
    <div className="main-nav-div">
      <div className="nav-bar-left">
        <Link className="nav-bar-item-left" to="/">
          Home
        </Link>
        <Link className="nav-bar-item-left" to="/profile">
          Profile
        </Link>
        <Link className="nav-bar-item-left" to="/display">
          Display
        </Link>
        <Link className="nav-bar-item-left" to="/registration">
          Registration 
          {/* {console.log( "here",Cart.shoppingCartItems)} */}
        </Link>

        {/* {auth.userEmail === undefined ? (
        
        ) : ("")} */}

        {/* <br /> */}
      </div>

      <div className="nav-bar-right">
        {/* <h3>{console.log(auth.userEmail)}</h3> */}
        {/* <h5 className="nav-bar-user-display">
            {auth.userEmail !== null && auth.userEmail.length > 0
              ? `${auth.username}`
              : "please log in"}
          </h5> */}

        <LoginCard />
        <Link to="/cartpage">
          <BsCart4
            // className="nav-bar-item"
            size={28}
            color={"white"}
          />
        </Link>
        <p className="nav-bar-item-right" id="login-logout-button">
          {auth.userEmail !== null && auth.userEmail.length > 0 ? (
            <button
              onClick={(e) => {
                auth.logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              id="login-logout-button"
              className="nav-bar-item-right"
              to="login"
            >
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
