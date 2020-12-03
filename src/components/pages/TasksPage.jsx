import React, { useContext, useState } from "react"
import "../../styles/libretaApp.scss";
import "../../styles/taskPage.scss";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";

const TasksPage = () => {
    let {t} = useTranslation()
    const [appStore, dispatch] = useContext(AppContext);
    const [newTask, setNewTask] = useState({description: ""})

    const save = () => {
        if(newTask.description){
            dispatch({type: "ADD_TASK", data: {description: newTask.description}})
            setNewTask({description: ""})
        }
    }

    return (
    <div className="tareas-container">
        <div className="addTask">
            <input className="inputTask" type="text" placeholder={t("task.input")} onChange={(e) => setNewTask({description: e.target.value})} value={newTask.description}/>
            <button className="buttonTask" onClick={save}>+</button>
        </div>
        <div className="listTask">
            <h1 className="subtitleTask">{t("task.subtitle")}</h1>
            <TaskList/>
        </div>
    </div>
    )
}

const TaskList = () =>{
    const [appStore, dispatch] = useContext(AppContext);
    let taskList = appStore.tasks;

    if(taskList.length > 0){
        return (<>{
            taskList.map(({id, description}) => (
                <li key={id} className="taskContainer">
                    <p className="taskItem">{description}</p>
                    <button className="buttonComplete" onClick={() => dispatch({
                            type: "REMOVE_TASK",
                            data: {id: id}
                        })}>
                        <i className="button__ico far fa-trash-alt"></i>
                    </button>
                </li>
            ))
        }</>)
    }
    else{
        return (<h2 className="subtitleTask">(Vacio)</h2>)
    }
}

export default TasksPage