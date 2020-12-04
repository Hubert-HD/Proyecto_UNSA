import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './templates/Dashboard';
import LoginPage from './pages/LoginPage';
import PublicPage from './pages/PublicPage';
import NotFoundPage from './pages/NotFoundPage';

import { UserContext } from "../context/UserContext";
import { useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const App = () => {  
  const [userStorage, dispatch] = useContext(UserContext);
  const [languageStorage, dispatchLanguage] = useContext(LanguageContext);
  const {i18n} = useTranslation()
  
  useEffect(() => {
    if(localStorage.getItem("user")){
      let user = localStorage.getItem("user")
      dispatch({
        type: "LOGIN_USER", 
        user: user
      })
    }
    if(localStorage.getItem("language")){
      let language = localStorage.getItem("language")
      dispatchLanguage({
        type: "SET_LANGUAGE", 
        language: language
      })
      i18n.changeLanguage(languageStorage.language)
    }
  }, [])

  return (
    <Switch>
      <Route path="/login" component={ LoginPage } />
      <Route path="/" component={ (userStorage.user !== "Anonymous") ? Dashboard : PublicPage } />
      <Route component={ NotFoundPage } />
    </Switch>
    );
  }
  
export default App;