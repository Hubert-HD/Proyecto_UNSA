import React, { useContext, useEffect } from "react"
import Chart from "react-google-charts";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import { useTranslation } from "react-i18next"
import Selection from "../atoms/Selection";

import "../../styles/graphic.scss"


const GraphicPage = () => {
  const [appStore] = useContext(AppContext);
  const [userStore] = useContext(UserContext);
  let {t} = useTranslation()
  
  const periodsValid = () => {
    let semestres = []
    appStore.courses.forEach(({period, user}) => {
      if(userStore.user === user && !semestres.includes(period)){
        semestres.push(period)
      }
    })
    semestres.sort()
    return semestres
  }
  
  const periods = periodsValid()
  const [period, setPeriod] = useState({period: ""})

  return (
    <div className="grilla">
      <div className="selection-container">
        <span className="text-selc">{t("graph.selection")}</span>
        <Selection
          placeholder={t("modal.period")}
          optionList={periods}
          valueState={[period, setPeriod]}
        />   
      </div>
      <GraphicCycle cycle={period.period} valid={periods}/>
    </div>
  )
}

const GraphicCycle = ({cycle = "", valid}) => {

  const [appStore] = useContext(AppContext);
  const [userStore] = useContext(UserContext);
  let {t} = useTranslation()

  const [data, setData] = useState([])
  
  useEffect(() => {
    let data = []
    appStore.courses.map(({name, note, user, period}) => {
      if(userStore.user === user && cycle === period)
        data.push([name, parseInt(note)])
    })
    setData(data)
  }, [cycle])

  if(valid.find(p => p === cycle))
    return (
      <div className="graph-container">
          <div className="graph-marco">
            <Chart
              width={550}
              height={450}
              className="chart"
              chartType="ColumnChart"
              loader={<span className="textload">{t("graph.load")}</span>}
              data={[
                [t("graph.subtitle.courses"), t("graph.subtitle.point")], ...data,
              ]}
              options={{
                title: `${t("graph.title")} ${cycle}`,
                chartArea: { width: '85%' },
                hAxis: {
                  title: t("graph.subtitle.courses"),
                  minValue: 0,
                },
                vAxis: {
                  title: t("graph.subtitle.point"),
                },
                colors: ['#3498db'],
                legend: 'none'
              }}
            />
          </div>
      </div>
    )
  else
    return (<span className="textsub">{t("graph.void")}</span>)
}
  
export default GraphicPage