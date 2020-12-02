import React, { useContext, useEffect } from "react"
import "../../styles/flipcard.scss";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useHistory, useParams } from "react-router-dom";
import Button from "../atoms/Button";

const ModalRemove = () => {
  const [newCourse, setNewCourse] = useState({id: 0, name: ""})
  const [appStorage, dispatch] = useContext(AppContext);
  const history = useHistory()
  const id = parseInt(useParams().id)

  useEffect(() => {
    let course = appStorage.courses.find(course => course.id === id)
    setNewCourse({id: id, name: course.name})
  }, [])

  const cancel = () => {
    history.push("/cursos")
    setNewCourse({id: id, name: ""})
  }

  const save = () => {
    dispatch({
      type: "REMOVE_COURSE",
      data: {id: id}
    })
    history.push("/cursos")
  }

  return (
    <div className="libreta__modal">
      <div className="modal modal--show">
        <div className="form-course">
            <h1 className="form-course__title">Eliminar curso</h1>
            <h1 className="form-course__content">
              {(newCourse.name) ? ("¿Está seguro de eliminar \"" + newCourse.name + "\"?") : ""} 
            </h1>
            <div className="libreta__action">
              <Button icon="fas fa-check" cartel="CONFIRMAR" color="button--green" onClick={save}/>
              <Button icon="fas fa-times" cartel="CANCELAR" color="button--red" onClick={cancel}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRemove