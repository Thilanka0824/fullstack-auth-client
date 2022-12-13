import { useState, useEffect, createContext, useContext, useMemo } from "react";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
const AuthContext = createContext();

/* 
@Source: https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/#basic-routing-with-routes
*/
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  useEffect(() => {
    const userData = getLSUserData();
    if (userData && userData.token) {
      setUserToken(userData.token);
    }
    if (userData && userData.email) {
      setUserEmail(userData.email);
      // setUsername(userData.username)
    }
    if (userData && userData.username) {
      setUsername(userData.username);
    }
  }, [isAuthLoading]);

  // call this function when you want to register the user
  const register = async (email, password, username) => {
    setIsAuthLoading(true);
    const registerResult = await registerUser(email, password, username);
    setIsAuthLoading(false);
    return registerResult;
  };

  // call this function when you want to authenticate the user
  const login = async (email, password) => {
    // console.log(email);
    // console.log(password);
    setIsAuthLoading(true);
    const loginResult = await loginUser(email, password);
    if (loginResult.success) {
      setLSUserData(loginResult.token, loginResult.email, loginResult.username);
    }
    setIsAuthLoading(false);
    return loginResult;
  };

  // call this function to sign out logged in user
  const logout = async () => {
    setIsAuthLoading(true);
    const removeData = await removeLSUserData(); // This has to be awaited for the useEffect to work
    setUserToken(null);
    setUserEmail("");
    setIsAuthLoading(false);
    return removeData;
  };

  /*  
    https://reactjs.org/docs/hooks-reference.html#usememo
    Memoization is essentially caching. The variable value will only be recalculated if the 
    variables in the watched array change.
  */
  const value = useMemo(
    () => ({
      userToken,
      userEmail,
      username,
      login,
      logout,
      register,
    }),
    [userToken, userEmail, username]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  
  return useContext(AuthContext);
};

const registerUser = async (email, password, username) => {
  const url = `${urlEndpoint}/users/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON;
};

const loginUser = async (email, password) => {
  const url = `${urlEndpoint}/users/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON;
};

const setLSUserData = (token, email, username) => {
  localStorage.setItem(
    process.env.REACT_APP_TOKEN_HEADER_KEY,
    JSON.stringify({ token, email, username })
  );
};

const removeLSUserData = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
  return true;
};

const getLSUserData = () => {
  return JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  );
};


/*
This code defines a React component called AuthProvider that provides context for authenticating users. It is a functional component that takes in a single prop, children, which represents the components that are nested inside of it.

The AuthProvider component manages the state of the authentication process using the useState hook. It has four state variables:

userToken: This variable represents the user's authentication token. It is set to null by default, but it will be updated with the user's token when they successfully log in.
userEmail: This variable represents the user's email address. It is an empty string by default, but it will be updated with the user's email when they successfully log in.
username: This variable represents the user's username. It is an empty string by default, but it will be updated with the user's username when they successfully log in.
isAuthLoading: This variable is a boolean that indicates whether the authentication process is currently loading. It is set to false by default, but it will be set to true when the user starts the process of logging in or registering, and it will be set to false again when the process is complete.
The AuthProvider component also uses the useEffect hook to initialize the state of the authentication process when the component is first rendered. This useEffect hook runs the getLSUserData function, which fetches user data from local storage, and it updates the state variables with the data if it exists.

The AuthProvider component exposes three functions for registering, logging in, and logging out users. These functions are memoized using the useMemo hook, which means that their return values will only be recalculated if the values of the state variables that they depend on change.

register: This function is called when the user wants to register a new account. It takes in the user's email, password, and username as arguments, and it returns a registerResult object. This function sets the isAuthLoading state variable to true while it is running, and it sets it back to false when it is finished.
login: This function is called when the user wants to log in to an existing account. It takes in the user's email and password as arguments, and it returns a loginResult object. This function sets the isAuthLoading state variable to true while it is running, and it sets it back to false when it is finished. If the login is successful, it also updates the user's authentication token, email, and username in local storage using the setLSUserData function.
logout: This function is called when the user wants to log out of their account. It returns a removeData object. This function sets the isAuthLoading state variable to true while it is running, and it sets it back to false when it is finished. It also sets the user's authentication token, email, and username to null, "", and "", respectively.
Finally, the AuthProvider component returns a AuthContext.Provider element, which provides the context for the authentication process. Other components that are nested inside of it can access this context by calling the useAuth hook, which returns the AuthContext object.


#############################################################
#############################################################

This code defines a set of functions and components for authenticating users in a React application. It uses the useState and useEffect hooks to manage the state of the authentication process, including whether a user is logged in, their email and username, and whether the authentication process is currently loading. It also uses the useMemo hook to memoize the functions and state variables that are provided to other components through context.

The AuthProvider component is a functional component that provides the context for the authentication process. It takes in a single prop, children, which represents the components that are nested inside of it. The AuthProvider component manages the state of the authentication process using the useState hook. It has four state variables:

userToken: This variable represents the user's authentication token. It is set to null by default, but it will be updated with the user's token when they successfully log in.
userEmail: This variable represents the user's email address. It is an empty string by default, but it will be updated with the user's email when they successfully log in.
username: This variable represents the user's username. It is an empty string by default, but it will be updated with the user's username when they successfully log in.
isAuthLoading: This variable is a boolean that indicates whether the authentication process is currently loading. It is set to false by default, but it will be set to true when the user starts the process of logging in or registering, and it will be set to false again when the process is complete.
The AuthProvider component also uses the useEffect hook to initialize the state of the authentication process when the component is first rendered. This useEffect hook runs the getLSUserData function, which fetches user data from local storage, and it updates the state variables with the data if it exists.

The AuthProvider component exposes three functions for registering, logging in, and logging out users. These functions are memoized using the useMemo hook, which means that their return values will only be recalculated if the values of the state variables that they depend on change.

register: This function is called when the user wants to register a new account. It takes in the user's email, password, and username as arguments, and it returns a registerResult object. This function sets the isAuthLoading state variable to true while it is running, and it sets it back to false when it is finished.
login: This function is called when the user wants to log in to an existing account. It takes in the user's email and password as arguments, and it returns a loginResult object. This function sets the isAuthLoading state variable to true while it is running, and it sets it back to false when it is finished. If the login is successful, it also updates the user's authentication token, email, and username in local storage using the setLSUserData function.
logout: This function is called when the user wants to log out of their account. It returns a removeData object. This function sets the isAuthLoading state variable to true while it is running, and it sets it back to false when it is finished. It also sets the user's authentication token, email, and username to null, "", and "", respectively.
*/