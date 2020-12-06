import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next"
import { AppContext } from "../../context/AppContext";
import "../../styles/libretaApp.scss";
import { UserContext } from "../../context/UserContext";

const ReportCardPage = () => {

  let {t} = useTranslation()
  const [appStore] = useContext(AppContext);
  const [userStore, dispatch] = useContext(UserContext);
  const [score, setScore] = useState({
    note: 0,
    credit: 0
  })
  const [data, setData] = useState([])

  useEffect(() => {
    calculateTotal()
    dataFormat()
  }, [appStore])

  const calculateTotal = () => {
    let creditTotal = 0;
    let promedio = 0;
    if(appStore.courses.find(course => course.user === userStore.user)){
      appStore.courses.forEach(({note, credit, user}) => {
        if(userStore.user === user){
          creditTotal += parseInt(credit)
          promedio += parseInt(note) * parseInt(credit)
        }
      })
      promedio /= creditTotal
      setScore({
        note: promedio,
        credit: creditTotal
      })
    }
  };

  const dataFormat = () => {
    let data = []
    let semestres = []
    appStore.courses.forEach(({period, user}) => {
      if(userStore.user === user && !semestres.includes(period)){
        semestres.push(period)
      }
    })
    semestres.sort()
    semestres.forEach(period => {
      data.push({
        period: period,
        courses: []
      })
    })
    appStore.courses.forEach(({id, name, note, credit, period, user}) => {
      if(userStore.user === user){
        let semestre = data.find(semestre => semestre.period === period)
        semestre.courses.push({
          id:  id,
          name: name,
          note: note,
          credit: credit
        })
      }
    })
    setData(data)
  };

  return (
    <div className="tableList-container">
      <table className="tableList">
        <thead className="tableList__head">
          <tr className="tableList__row tableList__row--title">
            <th className="tableList__colum tableList__colum--center">{t("table.title.name")}</th>
            <th className="tableList__colum tableList__colum--center">{t("table.title.note")}</th>
            <th className="tableList__colum tableList__colum--center">{t("table.title.credit")}</th>
          </tr>
        </thead>
        {
          data.map( ({period, courses}) => (
            <BodyTable key={period} subtitle={period} courses={courses}/>
            )
          )
        }
        <tfoot className="tableList__foot">
          <tr className="tableList__row tableList__row--result">
            <td className="tableList__colum tableList__colum--center">{t("table.title.promedio")}</td>
            <td className="tableList__colum tableList__colum--center">{score.note}</td>
            <td className="tableList__colum tableList__colum--center">{score.credit}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    )
  }

const BodyTable = ({subtitle, courses}) => {
  return (
    <tbody className="tableList__body">
      <tr className="tableList__row tableList__row--subtitle">
        <td className="tableList__colum tableList__colum--subtitle">{subtitle}</td>
      </tr>
      {
        courses && courses.map( ({id, name, note, credit}) => 
          <tr key={id} className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text">{name}</td>
            <td className="tableList__colum tableList__colum--number nota">{note}</td>
            <td className="tableList__colum tableList__colum--number credito">{credit}</td>
          </tr>
        )
      }
    </tbody>
  )
}
  
export default ReportCardPage;