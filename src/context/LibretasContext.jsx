import React, { useReducer } from "react";
import { NORMAL, CHANGE_MODE, UPDATE_DATA, OPEN_MODAL, CLOSE_MODAL, ADD_COURSE, EDIT_COURSE, REMOVE_COURSE } from "./actions";

const LibretaContext = React.createContext();

const initialState = {
    mode: NORMAL,
    data: null,
    modal: false,
    title: "no-title",
    form: {
        id: 0,
        name: "",
        note: null,
        credit: null,
        period: "" 
    },
    error: null
};

const libretaReducer = (state, {type, data}) =>{

    if(type === CHANGE_MODE)
        return {...state, ...data}

    if(type === UPDATE_DATA)
        return {...state, ...data}

    if(type === OPEN_MODAL)
        return {...state, ...data}

    if(type === CLOSE_MODAL)
        return {...state, ...data}

    if(type === ADD_COURSE){
        let obj = {...state, ...data}
        if(obj.data.curses.find(course => course.name === obj.form.name))
            return {...state, ...{error: "repetido"}}
        obj.data.curses.push({
            id: obj.data.curses.length + 1,
            name: obj.form.name,
            note: parseInt(obj.form.note),
            credit: parseInt(obj.form.credit),
            period: obj.form.period
        })
        if(!obj.data.periods.includes(obj.form.period)){
            obj.data.periods.push(obj.form.period)
            obj.data.periods = obj.data.periods.sort()
        }
        return obj
    }
        
    if(type === EDIT_COURSE){
        let obj = {...state, ...data}

        obj.data.curses = obj.data.curses.map(course => {
            if(course.id === obj.form.id)
                return {
                    id: course.id,
                    name: obj.form.name,
                    note: parseInt(obj.form.note),
                    credit: parseInt(obj.form.credit),
                    period: obj.form.period
                }
            return course
        })
        let periods = [];
        obj.data.curses.forEach(curso => {
            if(!periods.includes(curso.period))
                periods.push(curso.period)
        });
        obj.data.periods = periods.sort()
        return obj
    }

    if(type === REMOVE_COURSE){
        let obj = {...state, ...data}
        obj.data.curses = obj.data.curses.filter(course => course.name !== obj.form.name)
        if(!obj.data.curses.find(course => course.period === obj.form.period))   
            obj.data.periods = obj.data.periods.filter(period => period !== obj.form.period)       
        return obj
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



