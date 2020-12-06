import React from "react";
import { useReducer } from "react";

const initialState = {
    accounts: ["Alexander"],
    user: null
};

if(localStorage.getItem("accounts")){
    initialState.accounts = JSON.parse(localStorage.getItem("accounts"))
}
if(localStorage.getItem("user")){
    if(localStorage.getItem("user") === "null")
        initialState.user = null
    else
        initialState.user = localStorage.getItem("user")
}

const UserContext = React.createContext();

const userReducer = (state, {type, user}) => {
    if(type === "CREATE_USER"){
        return createAccount(state, user)
    }
    if(type === "LOGIN_USER"){
        if(state.accounts.find((element) => element === user)){
            localStorage.setItem("user", "" + user)
            return {
                ...state,
                user: user
            }
        }
    }
    if(type === "LOGOUT_USER"){
        localStorage.setItem("user", null)
        return {
            ...state,
            user: null
        }
    }
    return state;
}

const createAccount = (state, user) => {
    let newState = {...state}
    if(user != "" && !state.accounts.find((element) => element === user)){
        newState.accounts.push(user)
        localStorage.setItem("accounts", JSON.stringify(newState.accounts))
    }
    return newState
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



