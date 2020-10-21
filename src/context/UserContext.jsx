import React from "react";
import { useReducer } from "react";
import {SET_USER} from "./actions";


const initialState = {
    user: "Hubert Alexander",
    photo: "img/user.jpg"
};

const UserContext = React.createContext();

const userReducer = (state, {type, user}) => {
    if(type === SET_USER){
        return {
            user: user
        }
    }
    return state;
}

const UserProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(userReducer,initialState);

    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};



