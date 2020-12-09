import React, {useState, useContext, useEffect} from "react"
import { Redirect, useHistory, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { UserContext } from "../../context/UserContext";
import { LanguageContext } from "../../context/LanguageContext";
import { useForm } from "react-hook-form"
import "../../styles/loginPage.scss";
import "../../styles/buttonLanguagePublic.scss"

const RegisterPage = () => {

    const {register, errors, handleSubmit} = useForm();
    const [userStorage, dispatch] = useContext(UserContext);
    const history = useHistory();
    const {t, i18n} = useTranslation()
    const [languageStorage, dispatchLanguage] = useContext(LanguageContext)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        i18n.changeLanguage(languageStorage.language)
    }, [languageStorage])

    const onSubmit = (data, e) => {
        const {user} = data
        e.target.reset()
        if(user){
            if(!userStorage.accounts.find((element) => element === user))
                history.push("/login")
            else
                setError(true)
            dispatch({
                type: "CREATE_USER", 
                user: user
            })
            
        } 
    }

    if(!userStorage.user){
        return (
        <div className="container">
            <div className="logo-container" onClick={() => history.push("/")}>
                <img className="logo-container__logo" src="img/logo.png" alt=""/>
                <h1 className="logo-container__title">ToolStudent</h1>
            </div>
            <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-register__title">{t("register.title")}</h1>
                <div className="form-register__form">
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <input className="form-register__input" type="text" name="user" placeholder={t("register.user")} autoComplete="off"
                        ref={
                            register({
                                required: {value: true, message: true}
                            })
                        }
                        onChange={() => setError(false)}/>
                        <span className="error">{errors?.user?.message && t("validate.user")}</span>
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <input className="form-register__input" type="mail" name="email" placeholder={t("register.mail")} autoComplete="off"
                        ref={
                            register({
                                required: {value: true, message: true}
                            })
                        }
                        onChange={() => setError(false)}/>
                        <span className="error">{errors?.email?.message && t("validate.email")}</span>
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-lock"></i>
                        </div>
                        <input className="form-register__input" type="password" name="password1" placeholder={t("register.password1")} autoComplete="off"
                        ref={
                            register({
                                required: {value: true, message: true}
                            })
                        }
                        onChange={() => setError(false)}/>
                        <span className="error">{errors?.password1?.message && t("validate.password")}</span>
                    </div>
                    <div className="input_log">
                        <div className="icon_log">
                            <i className="fas fa-lock"></i>
                        </div>
                        <input className="form-register__input" type="password" name="password2" placeholder={t("register.password2")} autoComplete="off"
                        ref={
                            register({
                                required: {value: true, message: true}
                            })
                        }
                        onChange={() => setError(false)}/>
                        <span className="error">{errors?.password2?.message && t("validate.password.confirm")}</span>
                    </div>
                    <span className="errorcreate">{error && t("validate.invalid.create")}</span>
                    <button className="button button-ajuste">
                        <span className="button__text">{t("register.button")}</span>
                    </button>
                </div>
            </form>
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
export default RegisterPage