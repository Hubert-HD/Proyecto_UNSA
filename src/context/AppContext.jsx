import React from "react";
import { useReducer } from "react";

import coursesDATA from "./courses.json"
import tasksDATA from "./tasks.json"

const initialState = {
    courses: coursesDATA,
    tasks: tasksDATA
};

/* const initialState = {
    courses: [],
    tasks: []
}; */

if(localStorage.getItem("tasks")){
    initialState.tasks = JSON.parse(localStorage.getItem("tasks"))
}

if(localStorage.getItem("courses")){
    initialState.courses = JSON.parse(localStorage.getItem("courses"))
}

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

const addTask = ({tasks}, {description, user}) => {
    let id = (tasks.length > 0) ? tasks[tasks.length - 1].id + 1 : 1
    let newTask = {
        id:  id,
        description: description,
        user: user
    }
    tasks.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const removeTask = (state, {id}) => {
    state.tasks = state.tasks.filter(task => task.id !== id)
    localStorage.setItem("tasks", JSON.stringify(state.tasks))
}

const addCourse = ({courses}, {name, note, credit, period, user}) => {
    let id = (courses.length > 0) ? courses[courses.length - 1].id + 1 : 1
    let newCourse = {
        id:  id,
        name: name,
        note: note,
        credit: credit,
        period: period,
        user: user
    }
    courses.push(newCourse)
    localStorage.setItem("courses", JSON.stringify(courses))
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
    localStorage.setItem("courses", JSON.stringify(courses))
}

const removeCourse = (state, {id}) => {
    state.courses = state.courses.filter(course => course.id !== id)
    localStorage.setItem("courses", JSON.stringify(state.courses))

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



