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
      <button className={`buttonLanguage ${(languageStorage.language === "es") ? "buttonLanguage-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "es"})}>ES</button>
      <button className={`buttonLanguage ${(languageStorage.language === "en") ? "buttonLanguage-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "en"})}>EN</button>
      <button className={`buttonLanguage ${(languageStorage.language === "jp") ? "buttonLanguage-active" : ""} `} onClick={() => dispatch({type: "SET_LANGUAGE", language: "jp"})}>JP</button>
    </div>
  )
}

export default ButtonLanguage;