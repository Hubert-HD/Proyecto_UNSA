import React, { useContext } from 'react'
import Table from '../molecules/Table'
import Button from '../atoms/Button'
import { CHANGE_MODE, EDIT, OPEN_MODAL, ADD, NORMAL, ADD_COURSE } from '../../context/actions'
import { LibretaContext } from '../../context/LibretasContext'
import ModalLibreta from '../molecules/ModalLibreta'

const Libreta = () => {

  const [state, dispatch] = useContext(LibretaContext);

  return (
    <div>
      <Table />
      <div className="libreta__action">
        <Button 
          icon="fas fa-plus" 
          cartel="AÑADIR"
          color="button--green"
          onClick={() => dispatch({
            type: OPEN_MODAL,
            data: {
              modal: true,
              title: ADD_COURSE,
              mode: ADD
            }
          })}
        />
        {
        (state.mode == NORMAL || state.mode == ADD) && <Button 
            icon="fas fa-pen"
            cartel="EDITAR"
            color="button--yellow"
            onClick={() => dispatch({
              type: CHANGE_MODE,
              data: {
                mode: EDIT
              }
            })}
          />
        }
        {
        (state.mode == EDIT) && <Button 
            icon="fas fa-ban"
            cartel="ABORTAR"
            color="button--red"
            onClick={() => dispatch({
              type: CHANGE_MODE,
              data: {
                mode: NORMAL
              }
            })}
          />
      }
      </div>
      <ModalLibreta />
    </div>
  )
}

export default Libreta
