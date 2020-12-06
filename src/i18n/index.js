import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import en_US_Translation from "./en_US.json"
import es_PE_Translation from "./es_PE.json"
import pt_BR_Translation from "./pt_BR.json"

const resources = {
  en_US:{
    translation: en_US_Translation
  },
  es_PE:{
    translation: es_PE_Translation
  },
  pt_BR:{
    translation: pt_BR_Translation
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es_PE",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n