import React, { useContext, useEffect } from "react"
import "../../styles/flipcard.scss";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useHistory, useParams } from "react-router-dom";
import Selection from "../atoms/Selection";
import Button from "../atoms/Button";
import { useTranslation } from "react-i18next";

const ModalEdit = () => {
  let {t} = useTranslation()
  const periods = ["2017-I","2017-II","2018-I","2018-II","2019-I","2019-II","2020-I","2020-II"]
  const [newCourse, setNewCourse] = useState({
    id: 0,
    name: "", 
    note: "", 
    credit: "",
    period: ""
  })
  const [appStorage, dispatch] = useContext(AppContext);
  const history = useHistory()
  const id = parseInt(useParams().id)

  useEffect(() => {
    let course = appStorage.courses.find(course => course.id == id)
    setNewCourse({
      id: id,
      name: course.name, 
      note: course.note, 
      credit: course.credit,
      period: course.period
    })
  }, [])

  const cancel = () => {
    history.push("/cursos")
    setNewCourse({
      id: 0,
      name: "", 
      note: "", 
      credit: "",
      period: ""
    })
  }

  const save = () => {
    if(newCourse.name !== "" && newCourse.note !== "" && newCourse.credit !== "" && newCourse.period !== ""){
      dispatch({
        type: "EDIT_COURSE",
        data: {
          id: id,
          name: newCourse.name,
          note: newCourse.note,
          credit: newCourse.credit,
          period: newCourse.period
        }
      })
      history.push("/cursos")
    }
  }

  return (
    <div className="libreta__modal">
      <div className="modal modal--show">
        <div className="form-course">
            <h1 className="form-course__title">{t("modal.edit")}</h1>
            <form className="form-course__form">
              <input 
                className="form-course__input"
                type="text"
                name="curso"
                placeholder={t("modal.name")}
                autoComplete="off"
                value={newCourse.name}
                onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
              /> 
              <input
                className="form-course__input"
                type="number"
                name="nota"
                placeholder={t("modal.note")}
                min="0"
                max="20"
                autoComplete="off"
                value={newCourse.note}
                onChange={(e) => setNewCourse({...newCourse, note: e.target.value})}
              />            
              <input className="form-course__input"
                type="number"
                name="credito"
                placeholder={t("modal.credit")}
                min="0"
                autoComplete="off"
                value={newCourse.credit}
                onChange={(e) => setNewCourse({...newCourse, credit: e.target.value})}
              />
              <Selection
                placeholder={t("modal.period")}
                optionList={periods}
                valueState={[newCourse, setNewCourse]}
              />         
            </form>
            <div className="libreta__action">
              <Button icon="fas fa-check" cartel={t("modal.save")} color="button--green" onClick={save}/>
              <Button icon="fas fa-times" cartel={t("modal.cancel")} color="button--red" onClick={cancel}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit