import React, {useState, useContext} from "react"
import { Redirect } from "react-router-dom"
import {UserContext} from "../../context/UserContext";
import { SET_USER } from "../../context/actions";

const Login = () => {

    const [state, dispatch] = useContext(UserContext);

    const [inputUser, setInputUser] = useState(null);

    const entrar = (e) => {
        e.preventDefault();
        
        dispatch({
            type: SET_USER, 
            user: inputUser
        })
    }

    return (  
        <div>
            {state.user  && <Redirect to="/" />}
            <form onSubmit={entrar}>
                <input type="text" placeholder="user" onChange={(e) => setInputUser(e.target.value)}/>
                <input type="password" placeholder="password" />
                <input type="submit" value="Entrar"/>
            </form>
        </div>
    )
}
export default Login