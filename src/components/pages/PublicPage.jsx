import React, { useContext, useEffect } from "react"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"
import { LanguageContext } from '../../context/LanguageContext'
import "../../styles/inicio.scss"
import "../../styles/buttonLanguagePublic.scss"

const PublicPage = () => {
  const {t, i18n} = useTranslation()
  const [languageStorage, dispatch] = useContext(LanguageContext)

  useEffect(() => {
    i18n.changeLanguage(languageStorage.language)
  }, [languageStorage])
  
  return (
    <>
      <header className="headerPublic">
        <div className="app">
          <img className="appLogo" src="img/logo.png" alt=""/>
          <h1 className="appText">ToolStudent</h1>
        </div>
        <div className="paginas-container">
          <Link className="paginas">{t("home")}</Link>
          <Link className="paginas">{t("contact")}</Link>
          <Link className="paginas">{t("services")}</Link>
        </div>
        <Link to="./login" className="login">{t("login")}</Link>
      </header>
      <section className="banner">
        <img className="appLogo" src="img/logo.png" alt=""/>
        <h1 className="nombreApp">ToolStudent</h1>
        <img className="dashPhoto" src="img/dashboard.png" alt="dashboard.png"/>
        <div className="centrado">
          <p className="subtitulo">{t("tool.info")}</p>
          <Link className="button buttonPublic">{t("tool.button")}</Link>
        </div>
      </section>
      <footer className="footer">
        <div className="foot-item foot-item-libreta">
          <img className="imagen" src="img/libreta.png" alt=""/>
          <h3 className="subtitulo">{t("subtitle.note")}</h3>
        </div>
        <div className="foot-item foot-item-tareas">
          <img className="imagen" src="img/tareas.png" alt=""/>
          <h3 className="subtitulo">{t("subtitle.task")}</h3>
        </div>
        <div className="foot-item foot-item-calculadora">
          <img className="imagen" src="img/calculadora.png" alt=""/>
          <h3 className="subtitulo">{t("subtitle.calc")}</h3>
        </div>
      </footer>
      <div className="buttonLang-container">
        <span className="subtitle">{t("language.title")}</span>
        <button className={`buttonLang ${(languageStorage.language === "es_PE") ? "buttonLang-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "es_PE"})}>ES</button>
        <button className={`buttonLang ${(languageStorage.language === "en_US") ? "buttonLang-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "en_US"})}>EN</button>
        <button className={`buttonLang ${(languageStorage.language === "pt_BR") ? "buttonLang-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "pt_BR"})}>PT</button>
      </div>
    </>
    )
  }
  
  export default PublicPage