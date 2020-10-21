import React from "react";
import { useState } from "react";


const userData = {user: "Hubert"};
const UserContext = React.createContext({user: "anonymous"});

const UserProvider = ( {children} ) => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser(userData)
    };
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};



