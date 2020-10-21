import React, { useContext } from 'react'

import Button from '../atoms/Button';
import { LibretaContext } from '../../context/LibretaContext';
import { ACTIVATE_MODAL } from '../../context/actions';

const ButtonGrid = () => {

    const [state, dispatch] = useContext(LibretaContext);

    return (
        <div class="libreta__action" onClick={() => dispatch({
            type: ACTIVATE_MODAL
        })}>  
            <Button icon="fas fa-plus" cartel="AÑADIR" id="addButton" color="button--green" />
            <Button icon="fas fa-pen" cartel="EDITAR" id="editButton" color="button--yellow"/>
        </div>
    )
}

export default ButtonGrid;