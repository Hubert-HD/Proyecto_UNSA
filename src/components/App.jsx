import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './templates/Dashboard';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Public from './pages/Public';
import NotFound from './pages/NotFound';

import {UserContext} from "../context/UserContext";

const App = () => {  

    const {user} = useContext(UserContext);

    return (
        <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/logout" component={ user ? Logout : NotFound} />
            <Route path="/" component={ user ? Dashboard : Public } />
            <Route component={ NotFound } />
        </Switch>
    );
}


export default App;