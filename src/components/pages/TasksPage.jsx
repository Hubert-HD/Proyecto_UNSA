import React, { useContext, useState } from "react"
import "../../styles/libretaApp.scss";
import "../../styles/taskPage.scss";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

const TasksPage = () => {
    const [userStore] = useContext(UserContext);
    let {t} = useTranslation()
    const [appStore, dispatch] = useContext(AppContext);
    const [newTask, setNewTask] = useState({description: ""})

    const save = () => {
        if(newTask.description){
            dispatch({type: "ADD_TASK", data: {description: newTask.description, user: userStore.user}})
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
    let {t} = useTranslation()
    const [appStore, dispatch] = useContext(AppContext);
    const [userStore] = useContext(UserContext);
    let taskList = appStore.tasks;

    if(taskList.find((task) => task.user === userStore.user)){
        return (<>{
            taskList.map(({id, description, user}) => {
                if(userStore.user === user){
                    return (
                        <li key={id} className="taskContainer">
                            <p className="taskItem">{description}</p>
                            <button className="buttonComplete" onClick={() => dispatch({
                                    type: "REMOVE_TASK",
                                    data: {id: id}
                                })}>
                                <i className="button__ico far fa-trash-alt"></i>
                            </button>
                        </li>
                    )
                }
            })
        }</>)
    }
    else{
    return (<h2 className="subtitleTask">{t("task.void")}</h2>)
    }
}

export default TasksPage