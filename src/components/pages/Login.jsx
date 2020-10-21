import React, {useState, useContext} from "react"
import { Redirect } from "react-router-dom"
import {UserContext} from "../../context/UserContext";

const Login = () => {

    const {user, login} = useContext(UserContext);

    return (  
        <div>
            {user  && <Redirect to="/" />}
            <form >
                <input type="text" placeholder="user" />
                <input type="submit" value="Entrar" />
            </form>
            <button onClick={login}>Iniciar sesion</button>
        </div>
    )
}
export default Login