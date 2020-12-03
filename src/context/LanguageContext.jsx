import React from "react";
import { useReducer } from "react";

const initialState = {
    language: "es"
};

const LanguageContext = React.createContext();

const languageReducer = (state, {type, language}) => {
    if(type === "SET_LANGUAGE"){
        return {
            language: language
        }
    }
    return state;
}

const LanguageProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(languageReducer, initialState);
    return (
        <LanguageContext.Provider value={[state, dispatch]}>
            {children}
        </LanguageContext.Provider>
    );
}

export {LanguageContext, LanguageProvider};


