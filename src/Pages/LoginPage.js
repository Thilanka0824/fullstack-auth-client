import React from 'react'
import { useState } from 'react';
import { useAuth } from "../Hooks/auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("")

    const auth = useAuth();
    const navigate = useNavigate()
  return (
    <div>LoginPage
    <h1>Fullstack Auth Login Page</h1>
    <form>
     <h3>{loginMessage}</h3>   
     <label>Email: </label>
     <input value={email}
     type="text"
     placeholder='enter email'
     autoComplete='email'
     onChange={(e)=>{
        setEmail(e.target.email)
     }}></input>
     <br/>
     <label>Password: </label>
     <input value={password}
     type="password"
     autoComplete='current-password'
     placeholder='password'
     onChange={(e)=>{
        setPassword(e.target.value)
     }}></input>
     <br/>
     <br/>
     <button onClick={async () => {
        const loginResult = await auth.login(email, password)

        loginResult.success ? navigate("/") : setLoginMessage(loginResult.message)
     }}>Login</button>
    </form>
    </div>
  )
}

export default LoginPage