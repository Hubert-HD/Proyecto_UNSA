import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './templates/Dashboard';
import LoginPage from './pages/LoginPage';
import PublicPage from './pages/PublicPage';
import NotFoundPage from './pages/NotFoundPage';

import { UserContext } from "../context/UserContext";
import { useEffect } from 'react';

const App = () => {  
  const [userStorage, dispatch] = useContext(UserContext);
  useEffect(() => {
    if(localStorage.getItem("user")){
      let user = localStorage.getItem("user")
      dispatch({
        type: "LOGIN_USER", 
        user: user
      })
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