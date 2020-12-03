import React from "react";
import { useReducer } from "react";
import coursesData from "./courses.json";
import tasksData from "./tasks.json";

const initialState = {
    courses: coursesData,
    tasks: tasksData
};

const AppContext = React.createContext();

const appReducer = (state, {type, data}) => {
    if(type === "ADD_COURSE")
        addCourse(state, data)
    if(type === "EDIT_COURSE")
        editCourse(state, data)
    if(type === "REMOVE_COURSE")
        removeCourse(state, data)
    if(type === "ADD_TASK")
        addTask(state, data)
    if(type === "REMOVE_TASK")
        removeTask(state, data)
    return {...state};
}

const addTask = ({tasks}, {description}) => {
    let id = (tasks.length > 0) ? tasks[tasks.length - 1].id + 1 : 1
    let newTask = {
        id:  id,
        description: description
    }
    tasks.push(newTask)
}

const removeTask = (state, {id}) => {
    state.tasks = state.tasks.filter(task => task.id !== id)
}

const addCourse = ({courses}, {name, note, credit, period}) => {
    let id = (courses.length > 0) ? courses[courses.length - 1].id + 1 : 1
    let newCourse = {
        id:  id,
        name: name,
        note: note,
        credit: credit,
        period: period
    }
    courses.push(newCourse)
}

const editCourse = ({courses}, {id, name, note, credit, period}) => {
    for (let i = 0; i < courses.length; i++) {
        if(courses[i].id === id){
            courses[i] = {
                ...courses[i],
                name: name,
                note: note,
                credit: credit,
                period: period
            }
            break
        }
    }
}

const removeCourse = (state, {id}) => {
    state.courses = state.courses.filter(course => course.id !== id)
}

const AppProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};



