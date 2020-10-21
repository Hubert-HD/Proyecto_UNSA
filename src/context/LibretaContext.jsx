import React, { useReducer } from "react";
import { ACTIVATE_MODAL, DESACTIVATE_MODAL } from "./actions";

const LibretaContext = React.createContext();

const initialState = {
    "modal": false
};

const libretaReducer = (state, {type, course}) =>{
    if(type === ACTIVATE_MODAL){
        return {
            modal: true
        }
    }

    if(type === DESACTIVATE_MODAL){
        return {
            modal: false
        }
    }
}

const LibretaProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(libretaReducer, initialState);

    return (
        <LibretaContext.Provider value={[state, dispatch]}>
            {children}
        </LibretaContext.Provider>
    );
}

export {LibretaContext, LibretaProvider};



