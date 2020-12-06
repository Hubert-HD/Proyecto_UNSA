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
        mail: "",
    });

    useEffect(() => {
        i18n.changeLanguage(languageStorage.language)
    }, [languageStorage])
    
    const setMail = (mail) => {
        setForm({user: mail})
    }

    return (
        (userStorage.user === "Anonymous")
        ?
        <div className="container">
            <div className="logo-container" onClick={() => history.push("/")}>
                <img className="logo-container__logo" src="img/logo.png" alt=""/>
                <h1 className="logo-container__title">ToolStudent</h1>
            </div>
            <div className="form-login">
                <h1 className="form-login__title">{t("recovery.title")}</h1>
                <h3 className="form-login__text">{t("recovery.text")}</h3>
                <form className="form-login__form">
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <input className="form-login__input" type="mail" name="curso" placeholder={t("recovery.mail")} autoComplete="off" onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    
                    <button className="button button-ajuste" onClick={() => history.push("/login")}>
                        <span className="button__text">{t("recovery.button")}</span>
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