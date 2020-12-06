import React, { useState, useEffect } from "react";
import "../../styles/libretaApp.scss";
import "../../styles/calcApp.scss";
import { useTranslation } from "react-i18next";

const ReportCardPage = () => {
  let {t} = useTranslation()
  const [notes, setNotes] = useState([
    {note: 0, peso: 0},
    {note: 0, peso: 0},
    {note: 0, peso: 0},
    {note: 0, peso: 0},
    {note: 0, peso: 0},
    {note: 0, peso: 0}
  ])
  const [score, setScore] = useState({note: 0, peso: 0})

  useEffect(() => {
    let pesoTotal = 0;
    let promedio = 0;
    notes.forEach(({note, peso}) => {
      pesoTotal += peso
      promedio += note * peso
    })
    promedio /= 100
    setScore({note: promedio, peso: pesoTotal})
  }, [notes])

  const setNote = (index, data) => {
    let note = (data === "") ? 0 : parseInt(data)
    let newNotes = []
    notes.forEach(({note, peso}) => {
      newNotes.push({note: note, peso: peso})
    })
    newNotes[index] = {...newNotes[index], note: note}
    setNotes(newNotes)
  }

  const setPeso = (index, data) => {
    let peso = (data === "") ? 0 : parseInt(data)
    let newNotes = []
    notes.forEach(({note, peso}) => {
      newNotes.push({note: note, peso: peso})
    })
    newNotes[index] = {...newNotes[index], peso: peso}
    setNotes(newNotes)
  }

  return (
    <div className="tableList-container tableList-container__calc">
      <table className="tableList">
        <thead className="tableList__head">
          <tr className="tableList__row tableList__row--title">
            <th className="tableList__colum tableList__colum--center">
            {
              
              t("calc.evaluation")
              
            }
            </th>
            <th className="tableList__colum tableList__colum--center">{t("calc.note")}</th>
            <th className="tableList__colum tableList__colum--center">{t("calc.weight")}</th>
          </tr>
        </thead>
        <tbody className="tableList__body">
          <tr className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text reduce">{t("calc.continuing") + " 1"}</td>
            <td className="tableList__colum tableList__colum--number nota">
              <input
                className="calc__input"
                type="number"
                name="nota1"
                placeholder={t("calc.input.note")}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setNote(0, e.target.value)}
              /> 
            </td>
            <td className="tableList__colum tableList__colum--number credito">
              <input
                className="calc__input"
                type="number"
                placeholder={t("calc.input.weight") + "%"}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setPeso(0, e.target.value)}
              />
            </td>
          </tr>
          <tr className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text reduce">{t("calc.exam") + " 1"}</td>
            <td className="tableList__colum tableList__colum--number nota">
              <input
                className="calc__input"
                type="number"
                name="nota2"
                placeholder={t("calc.input.note")}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setNote(1, e.target.value)}
              /> 
            </td>
            <td className="tableList__colum tableList__colum--number credito">
              <input
                className="calc__input"
                type="number"
                placeholder={t("calc.input.weight") + "%"}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setPeso(1, e.target.value)}
              />
            </td>
          </tr>
          <tr className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text reduce">{t("calc.continuing") + " 2"}</td>
            <td className="tableList__colum tableList__colum--number nota">
              <input
                className="calc__input"
                type="number"
                name="nota2"
                placeholder={t("calc.input.note")}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setNote(2, e.target.value)}
              /> 
            </td>
            <td className="tableList__colum tableList__colum--number credito">
              <input
                className="calc__input"
                type="number"
                placeholder={t("calc.input.weight") + "%"}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setPeso(2, e.target.value)}
              />
            </td>
          </tr>
          <tr className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text reduce">{t("calc.exam") + " 2"}</td>
            <td className="tableList__colum tableList__colum--number nota">
              <input
                className="calc__input"
                type="number"
                name="nota2"
                placeholder={t("calc.input.note")}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setNote(3, e.target.value)}
              /> 
            </td>
            <td className="tableList__colum tableList__colum--number credito">
              <input
                className="calc__input"
                type="number"
                placeholder={t("calc.input.weight") + "%"}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setPeso(3, e.target.value)}
              />
            </td>
          </tr>
          <tr className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text reduce">{t("calc.continuing") + " 3"}</td>
            <td className="tableList__colum tableList__colum--number nota">
              <input
                className="calc__input"
                type="number"
                name="nota2"
                placeholder={t("calc.input.note")}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setNote(4, e.target.value)}
              /> 
            </td>
            <td className="tableList__colum tableList__colum--number credito">
              <input
                className="calc__input"
                type="number"
                placeholder={t("calc.input.weight") + "%"}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setPeso(4, e.target.value)}
              />
            </td>
          </tr>
          <tr className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text reduce">{t("calc.exam") + " 3"}</td>
            <td className="tableList__colum tableList__colum--number nota">
              <input
                className="calc__input"
                type="number"
                name="nota2"
                placeholder={t("calc.input.note")}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setNote(5, e.target.value)}
              /> 
            </td>
            <td className="tableList__colum tableList__colum--number credito">
              <input
                className="calc__input"
                type="number"
                placeholder={t("calc.input.weight") + "%"}
                min="0"
                max="20"
                autoComplete="off"
                onChange={(e) => setPeso(5, e.target.value)}
              />
            </td>
          </tr>
        </tbody>
        <tfoot className="tableList__foot">
          <tr className="tableList__row tableList__row--result">
            <td className="tableList__colum tableList__colum--center">{t("table.title.promedio")}</td>
            <td className="tableList__colum tableList__colum--center">{score.note}</td>
            <td className="tableList__colum tableList__colum--center">{score.peso}%</td>
          </tr>
        </tfoot>
      </table>
    </div>
    )
  }
  
export default ReportCardPage;