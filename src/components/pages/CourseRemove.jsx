import React, { useContext, useEffect } from "react"
import "../../styles/flipcard.scss";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useHistory, useParams } from "react-router-dom";
import Button from "../atoms/Button";
import { useTranslation } from "react-i18next";

const ModalRemove = () => {
  let {t} = useTranslation()
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
            <h1 className="form-course__title">{t("modal.remove")}</h1>
            <h1 className="form-course__content">
              {(newCourse.name) ? (t("modal.remove.info") + " \"" + newCourse.name + "\"?") : ""} 
            </h1>
            <div className="libreta__action">
              <Button icon="fas fa-check" cartel={t("modal.confirm")} color="button--green" onClick={save}/>
              <Button icon="fas fa-times" cartel={t("modal.cancel")} color="button--red" onClick={cancel}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRemove