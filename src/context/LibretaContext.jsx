import React, { useReducer } from "react";
import { TOOGLE_MODAL, ACTIVATE_EDIT } from "./actions";

const LibretaContext = React.createContext();

const initialState = {
    "modalAdd": false,
    "modalEdit": false,
    "modalDelete": false,
    "editActivate": false,
    "data": {
        curso: "",
        nota: "",
        credito: ""
    }
};

const libretaReducer = (state, {type, modal, data}) =>{
    if(type === TOOGLE_MODAL){
        return {
            ...state, [modal] : !state[modal],
        }
    }

    if(type == ACTIVATE_EDIT){
        return {
            ...state, editActivate : !state.editActivate
        }
    }
    return state;
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



