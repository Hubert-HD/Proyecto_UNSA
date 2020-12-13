import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LinkItemList = () => {
  const {t} = useTranslation()
  const history = useHistory();
  const [linkActive, setLinkActive] = useState({
    note : history.location.pathname === "/",
    course: history.location.pathname === "/cursos",
    task: history.location.pathname === "/tareas",
    curriculum: history.location.pathname === "/malla-curricular",
    calculator: history.location.pathname === "/calculadora",
    graphic: history.location.pathname === "/estadisticas"
  })
  return (
    <ul className="container-linkList">
      <li className={"container-linkItem"}>
        <Link className={(linkActive.note) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note : true,
              course: false,
              task: false,
              curriculum: false,
              calculator: false,
              graphic: false
            })
            history.push("/")
          }}>
          <i className={"iconLink fas fa-address-book"}></i>
          <span className="cartelLink">{t("link.note")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.course) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: true,
              task: false,
              curriculum: false,
              calculator: false,
              graphic: false
            })
            history.push("/cursos")
            }
          }>
          <i className={"iconLink fas fa-book"}></i>
          <span className="cartelLink">{t("link.course")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.task) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: true,
              curriculum: false,
              calculator: false,
              graphic: false
            })
            history.push("/tareas")
            }
          }>
          <i className={"iconLink fas fa-tasks"}></i>
          <span className="cartelLink">{t("link.task")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.curriculum) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: false,
              curriculum: true,
              calculator: false,
              graphic: false
            })
            history.push("/malla-curricular")
            }
          }>
          <i className={"iconLink fas fa-project-diagram"}></i>
          <span className="cartelLink">{t("link.curriculum")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.calculator) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: false,
              curriculum: false,
              calculator: true,
              graphic: false
            })
            history.push("/calculadora")
            }
          }>
          <i className={"iconLink fas fa-calculator"}></i>
          <span className="cartelLink">{t("link.calculator")}</span>
        </Link>
      </li>
      <li className={"container-linkItem"}>
        <Link className={(linkActive.graphic) ? "linkItem linkItem-active" : "linkItem"} onClick={() => {
            setLinkActive({
              note: false,
              course: false,
              task: false,
              curriculum: false,
              calculator: false,
              graphic: true
            })
            history.push("/estadisticas")
            }
          }>
          <i className={"iconLink fas fa-chart-bar"}></i>
          <span className="cartelLink">{t("link.stats")}</span>
        </Link>
      </li>
    </ul>
    )
  }
  
export default LinkItemList;