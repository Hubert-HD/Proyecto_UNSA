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
        user: null,
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
        if(userStorage.user)
            history.push("/");
    }

    const setUser = (user) => {
        setForm({
            user: user,
            password: null
        })
    }
    
    if(!userStorage.user){
        return (
        <div className="container">
            <div className="logo-container" onClick={() => history.push("/")}>
                <img className="logo-container__logo" src="img/logo.png" alt=""/>
                <h1 className="logo-container__title">ToolStudent</h1>
            </div>
            <div className="form-login">
                <h1 className="form-login__title">{t("login")}</h1>
                <div className="form-login__form">
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <input className="form-login__input" type="text" name="curso" placeholder={t("user")} autoComplete="off" onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-lock"></i>
                        </div>
                        <input className="form-login__input" type="password" name="curso" placeholder={t("password")} autoComplete="off" />
                    </div>
                    <div className="container-button">
                        <button className={"button"} onClick={signin}>
                            <i className="fas fa-sign-in-alt"></i>
                            <span className="button__text">{t("login.button")}</span>
                        </button>
                        <Link className="olvido" to="/recuperar">{t("login.recuperar")}</Link>
                        <Link className="cuenta" to="/registrar">{t("login.cuenta")}</Link>
                    </div>
                </div>
            </div>
            <div className="buttonLang-container">
                <span className="subtitle">{t("language.title")}</span>
                <button className={`buttonLang ${(languageStorage.language === "es_PE") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "es_PE"})}>ES</button>
                <button className={`buttonLang ${(languageStorage.language === "en_US") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "en_US"})}>EN</button>
                <button className={`buttonLang ${(languageStorage.language === "pt_BR") ? "buttonLang-active" : ""} `} onClick={() => dispatchLanguage({type: "SET_LANGUAGE", language: "pt_BR"})}>PT</button>
            </div>
        </div>
        )
    }
    else{
        return (<Redirect to="/"/>)
    }
}
export default LoginPage