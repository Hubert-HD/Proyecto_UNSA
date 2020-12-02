import React from "react";
import { useReducer } from "react";

const initialState = {
    user: "Anonymous"
};

const UserContext = React.createContext();

const userReducer = (state, {type, user}) => {
    if(type === "LOGIN_USER"){
        return {
            user: user
        }
    }
    if(type === "LOGOUT_USER"){
        return {
            user: "Anonymous"
        }
    }
    return state;
}

const UserProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};



