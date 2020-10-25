import React, { useState, useContext } from 'react'

import Selection from '../atoms/Selection';
import { LibretaContext } from '../../context/LibretasContext';
import Button from '../atoms/Button';
import { NORMAL, ADD, EDIT, REMOVE, ADD_COURSE, CLOSE_MODAL, EDIT_COURSE, REMOVE_COURSE} from '../../context/actions';
import { useEffect } from 'react';

const Form = () => {

  const [state, dispatch] = useContext(LibretaContext)
  const [form, setForm] = useState(state.form)


  function confirmar(e) {
    let obj = null;
    switch(state.title){
      case ADD_COURSE:
        obj = {
          type: ADD_COURSE,
          data: {
            modal: false,
            form: form
          }
        }
        break;
      case EDIT_COURSE:
        obj = {
          type: EDIT_COURSE,
          data: {
            modal: false,
            form: form
          }
        }
        break;
      case REMOVE_COURSE:
      obj = {
        type: REMOVE_COURSE,
        data: {
          modal: false,
          form: form
        }
      }
        break;
    }
    dispatch(obj)
  }


  return (
    <div className="form-course">
      <h1 className="form-course__title">{state.title}</h1>
      {
        (state.title === REMOVE_COURSE) 
        ? <div>
          <h3>¿Esta seguro que quiere eliminar {form.name}?</h3>
        </div> 
        : <form className="form-course__form">
          <input 
            className="form-course__input"
            type="text"
            name="curso"
            placeholder="Nombre del curso"
            autocomplete="off"
            value={form.name}
            onChange={(e)=>setForm({...form, name: e.target.value})}
          /> 
          <input
            className="form-course__input"
            type="number"
            name="nota"
            placeholder="Nota"
            min="0"
            max="20"
            autocomplete="off"
            value={form.note}
            onChange={(e)=>setForm({...form, note: e.target.value})}
          />            
          <input className="form-course__input"
            type="number"
            name="credito"
            placeholder="Creditos"
            min="0"
            autocomplete="off"
            value={form.credit}
            onChange={(e)=>setForm({...form, credit: e.target.value})}

          />
          <Selection
            placeholder="Ciclo"
            optionList={["2017-I","2017-II","2018-I","2018-II","2019-I","2019-II","2020-I","2020-II"]}
            value={form.period}
            useForm={[form, setForm]}
          />          
        </form>
      }
      <div className="libreta__action"> 
        <Button
          icon="fas fa-check" 
          cartel="CONFIRMAR"
          color="button--green"
          onClick={confirmar}
        />
        <Button
          icon="fas fa-times" 
          cartel="CANCELAR"
          color="button--red"
          onClick={() => dispatch({
            type: CLOSE_MODAL,
            data: {
              modal: false,
              mode: ((state.mode === ADD) ? NORMAL : EDIT)
            }
          })}
        />
      </div>
    </div>
  )
}

export default Form;