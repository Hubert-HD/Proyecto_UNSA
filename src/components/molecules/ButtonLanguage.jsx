import React, { useEffect, useContext, useState } from 'react'
import { useTranslation } from "react-i18next"
import { LanguageContext } from '../../context/LanguageContext'
import "../../styles/buttonLanguage.scss"

const ButtonLanguage = () => {
  
  const {t, i18n} = useTranslation()
  const [languageStorage, dispatch] = useContext(LanguageContext)

  useEffect(() => {
    i18n.changeLanguage(languageStorage.language)
  }, [languageStorage])

  return (
    <div className="button-container">
      <span className="subtitle">{t("language.title")}</span>
      <button className={`buttonLanguage ${(languageStorage.language === "es_PE") ? "buttonLanguage-active" : ""} `} 
      onClick={() => dispatch({type: "SET_LANGUAGE", language: "es_PE"})} 
      >ES</button>
      <button className={`buttonLanguage ${(languageStorage.language === "en_US") ? "buttonLanguage-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "en_US"})}>EN</button>
      <button className={`buttonLanguage ${(languageStorage.language === "pt_BR") ? "buttonLanguage-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "pt_BR"})}>PT</button>
    </div>
  )
}

export default ButtonLanguage;