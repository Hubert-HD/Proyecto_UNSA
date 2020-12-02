import React, {useState, useContext} from "react"
import { Redirect, useHistory } from "react-router-dom"
import { UserContext } from "../../context/UserContext";
import "../../styles/loginPage.scss";

const LoginPage = () => {

    const [userStorage, dispatch] = useContext(UserContext);
    const history = useHistory();
    const [form, setForm] = useState({
        user: "Anonymous",
        password: null
    });

    const signin = (e) => {
        e.preventDefault();
        dispatch({
            type: "LOGIN_USER", 
            user: form.user
        })
        history.push("/");
        localStorage.setItem("user", form.user)
    }

    const setUser = (user) => {
        setForm({
            user: user,
            password: null
        })
    }

    return (
        (userStorage.user === "Anonymous")
        ?
        <div className="container">
            <div className="form-login">
                <h1 class="form-login__title">Iniciar Sesion</h1>
                <form class="form-login__form" onSubmit={signin}>
                    <input class="form-login__input" type="text" name="curso" placeholder="Usuario" autocomplete="off" onChange={(e) => setUser(e.target.value)}/>
                    <input class="form-login__input" type="password" name="curso" placeholder="Contraseña" autocomplete="off" />
                    <input className="button" type="submit" value="Ingresar"/>
                </form>
            </div>
        </div> 
        : <Redirect to="/"/>
    )
}
export default LoginPage