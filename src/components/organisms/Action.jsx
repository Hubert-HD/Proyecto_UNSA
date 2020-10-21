import React, { useContext } from 'react'
import Button from '../atoms/Button'
import { TOOGLE_MODAL, ACTIVATE_EDIT } from '../../context/actions'
import { LibretaContext } from '../../context/LibretaContext'

const Action = () => {

    const [state, dispatch] = useContext(LibretaContext)

    return (
        <div className="libreta__action">
            <Button 
                icon="fas fa-plus" 
                cartel="AÑADIR"
                color="button--green"
                onClick={() => dispatch({type: TOOGLE_MODAL, modal: "modalAdd"})}
            />
            <Button 
                icon="fas fa-pen"
                cartel="EDITAR"
                color="button--yellow"
                onClick={() => dispatch({type: ACTIVATE_EDIT, modal: "modalEdit"})}
            />
        </div>
    )
}

export default Action