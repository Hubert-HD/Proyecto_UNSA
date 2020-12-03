import React, {useState, useContext, useEffect} from "react"
import { Redirect, useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { UserContext } from "../../context/UserContext";
import { LanguageContext } from "../../context/LanguageContext";
import "../../styles/loginPage.scss";
import "../../styles/buttonLanguagePublic.scss"

const LoginPage = () => {

    const [userStorage, dispatch] = useContext(UserContext);
    const history = useHistory();
    const {t, i18n} = useTranslation()
    const [languageStorage, dispatchLanguage] = useContext(LanguageContext)
    const [form, setForm] = useState({
        user: "Anonymous",
        password: null
    });

    useEffect(() => {
        i18n.changeLanguage(languageStorage.language)
    }, [languageStorage])
    

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
                <h1 class="form-login__title">{t("login")}</h1>
                <form class="form-login__form" onSubmit={signin}>
                    <input class="form-login__input" type="text" name="curso" placeholder={t("user")} autocomplete="off" onChange={(e) => setUser(e.target.value)}/>
                    <input class="form-login__input" type="password" name="curso" placeholder={t("password")} autocomplete="off" />
                    <input className="button" type="submit" value={t("login.button")}/>
                </form>
            </div>
            <div className="buttonLang-container">
                <span className="subtitle">{t("language.title")}</span>
                <button className={`buttonLang ${(languageStorage.language === "es") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "es"})}>ES</button>
                <button className={`buttonLang ${(languageStorage.language === "en") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "en"})}>EN</button>
                <button className={`buttonLang ${(languageStorage.language === "jp") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "jp"})}>JP</button>
            </div>
        </div>
        : <Redirect to="/"/>
    )
}
export default LoginPage