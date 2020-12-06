import React, { useContext } from "react"
import "../../styles/flipcard.scss";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next"
import { Route, useHistory, Switch } from "react-router-dom";
import ModalAdd from "./CourseAdd";
import ModalEdit from "./CourseEdit";
import ModalRemove from "./CourseRemove";

const CoursesPages = () => {

  const [appStore] = useContext(AppContext);
  const [userStore] = useContext(UserContext);
  const history = useHistory();
  let {t} = useTranslation()
  
  return (
    <div className="courses">
      <h2 className="title">{t("link.course")}</h2>
      <div className="coursesGrid">
        {
          appStore.courses.map(({id, name, note, credit, period, user}) => {
            if(userStore.user === user)
              return (<CourseCard key={id} id={id} period={period} course={name} note={note} credit={credit}/>)})
        }
        <div className="flipCard" onClick={() => history.push("/cursos/add")}>
          <a className="cardCourse cardCourse--btn"><i className="fas fa-plus"></i></a>
        </div>
      </div>
      <Switch>
        <Route path="/cursos/add" component={ ModalAdd } />
        <Route path="/cursos/edit/:id" component={ ModalEdit } />
        <Route path="/cursos/delete/:id" component={ ModalRemove } />
      </Switch>
    </div>
  )
}

const CourseCard = ({id, period, course, note, credit}) => {
  const [isFront, setIsFront] = useState(true);
  const history = useHistory();

  return (
    <div className={"flipCard " + ((isFront) ? "" : "flipCard--flip")} onClick={() => setIsFront(!isFront)}>
      <div className={"flipCard__front" + ((note < 11) ? " red" : "")}>
        <h1 className="courseName">{course}</h1>
      </div>
      <div className={"flipCard__back" + ((note < 11) ? " red" : "")}>
        <h1 className="periodo">{period}</h1>
        <div className="cardInfo">
          <p className="cardInfo__label">Nota</p>
          <p className="cardInfo__value">{note}</p>
        </div>
        <div className="cardInfo">
          <p className="cardInfo__label">Creditos</p>
          <p className="cardInfo__value">{credit}</p>
        </div>
        <div className="menu">
          <div className="menu__option color-yellow" onClick={() => history.push("/cursos/edit/" + id)}>
            <i className="fas fa-pen"></i>
          </div>
          <div className="menu__option color-red" onClick={() => history.push("/cursos/delete/" + id)}>
            <i className="far fa-trash-alt"></i> 
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default CoursesPages