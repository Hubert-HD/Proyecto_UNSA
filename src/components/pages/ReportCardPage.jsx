import React, { useContext, useState, useEffect } from "react";
import "../../styles/libretaApp.scss";
import { AppContext } from "../../context/AppContext";

const ReportCardPage = () => {

  const [appStore] = useContext(AppContext);
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
    if(appStore.courses.length > 0){
      appStore.courses.forEach(({note, credit}) => {
        creditTotal += parseInt(credit)
        promedio += parseInt(note) * parseInt(credit)
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
    appStore.courses.forEach(({period}) => {
      if(!semestres.includes(period)){
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
    appStore.courses.forEach(({id, name, note, credit, period}) => {
      let semestre = data.find(semestre => semestre.period === period)
      semestre.courses.push({
        id:  id,
        name: name,
        note: note,
        credit: credit
      })
    })
    console.log(data)
    setData(data)
  };

  return (
    <div className="tableList-container">
      <table className="tableList">
        <thead className="tableList__head">
          <tr className="tableList__row tableList__row--title">
            <th className="tableList__colum tableList__colum--center">NOMBRE DEL CURSO</th>
            <th className="tableList__colum tableList__colum--center">NOTA</th>
            <th className="tableList__colum tableList__colum--center">CREDITO</th>
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
            <td className="tableList__colum tableList__colum--center">PROMEDIO</td>
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