import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import enTranslation from "./en.json"
import esTranslation from "./es.json"
import jpTranslation from "./jp.json"

const resources = {
  en:{
    translation: enTranslation
  },
  es:{
    translation: esTranslation
  },
  jp:{
    translation: jpTranslation
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n