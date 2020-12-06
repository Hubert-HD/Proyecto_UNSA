import React, {useState, useContext, useEffect} from "react"
import { Redirect, useHistory, Link } from "react-router-dom"
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
            <div className="logo-container" onClick={() => history.push("/")}>
                <img className="logo-container__logo" src="img/logo.png" alt=""/>
                <h1 className="logo-container__title">ToolStudent</h1>
            </div>
            <div className="form-register">
                <h1 className="form-register__title">{t("register.title")}</h1>
                <form className="form-register__form" onSubmit={signin}>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <input className="form-register__input" type="text" name="curso" placeholder={t("register.user")} autoComplete="off" onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <input className="form-register__input" type="mail" name="curso" placeholder={t("register.mail")} autoComplete="off" onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-lock"></i>
                        </div>
                        <input className="form-register__input" type="password" name="curso" placeholder={t("register.password1")} autoComplete="off" />
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-lock"></i>
                        </div>
                        <input className="form-register__input" type="password" name="curso" placeholder={t("register.password2")} autoComplete="off" />
                    </div>
                    <button className="button button-ajuste" onClick={() => history.push("/login")}>
                        <span className="button__text">{t("register.button")}</span>
                    </button>
                </form>
            </div>
            <div className="buttonLang-container">
                <span className="subtitle">{t("language.title")}</span>
                <button className={`buttonLang ${(languageStorage.language === "es_PE") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "es_PE"})}>ES</button>
                <button className={`buttonLang ${(languageStorage.language === "en_US") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "en_US"})}>EN</button>
                <button className={`buttonLang ${(languageStorage.language === "pt_BR") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "pt_BR"})}>PT</button>
            </div>
        </div>
        : <Redirect to="/"/>
    )
}
export default LoginPage