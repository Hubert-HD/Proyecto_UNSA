import React, { useContext } from 'react'
import { LibretaContext } from '../../context/LibretasContext'
import { CHANGE_MODE, EDIT, REMOVE, OPEN_MODAL, EDIT_COURSE, REMOVE_COURSE } from '../../context/actions';


const BodyTable = ({subtitle, curses, modeEdit}) => {


  const [status, dispatch] = useContext(LibretaContext);

  const editCourse = (id, name, note, credit, period) => {
    dispatch({
      type: OPEN_MODAL,
      data:{
        modal: true,
        title: EDIT_COURSE,
        form: {
          id: id,
          name: name,
          note: parseInt(note),
          credit: parseInt(credit),
          period: period 
        }
      }
    })
  }

  const removeCourse = (id, name, note, credit, period) => {
    dispatch({
      type: OPEN_MODAL,
      data:{
        modal: true,
        title: REMOVE_COURSE,
        form: {
          id: id,
          name: name,
          note: parseInt(note),
          credit: parseInt(credit),
          period: period  
        }
      }
    })
  }

  return (
    <tbody className="tableList__body">
      <tr className="tableList__row tableList__row--subtitle">
        <td className="tableList__colum tableList__colum--subtitle">{subtitle}</td>
      </tr>
      {
        curses && curses.map( ({id, name, note, credit, period}) => 
          <tr key={id} className="tableList__row tableList__row--data">
            <td className="tableList__colum tableList__colum--text">{name}</td>
            <td className="tableList__colum tableList__colum--number nota">{note}</td>
            <td className="tableList__colum tableList__colum--number credito">{credit}</td>
            {
              (status.mode == EDIT) && (
                <td className="tableList__colum tableList__colum--action">
                  <a className="buttonIco editIco" onClick={() => editCourse(id, name, note, credit, period)}>
                      <i className="fas fa-edit"></i>
                  </a>
                  <a className="buttonIco buttonIco--red deleteIco" onClick={() => removeCourse(id, name, note, credit, period)}>
                      <i className="fas fa-trash-alt"></i>
                  </a>
                </td>
              )
            }
          </tr>
        )
      }
    </tbody>
  )
}

export default BodyTable
