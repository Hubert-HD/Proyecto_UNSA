import React from "react";
import { useContext } from "react";
import { LibretaContext } from "../../context/LibretaContext";
import { TOOGLE_MODAL } from "../../context/actions";
import Button from "../atoms/Button";
import FormAction from '../organisms/FormAction'

const Modal = () => {
    const [state, dispatch] = useContext(LibretaContext)

    if(state.modalAdd){
        return (
            <div class="libreta__modal">
                <div class="modal modal--show">
                    <FormAction title="Añadir Curso">
                        <Button
                            icon="fas fa-check" 
                            cartel="CONFIRMAR"
                            color="button--green"
                            onClick={() => console.log("add")}
                        />
                        <Button
                            icon="fas fa-times" 
                            cartel="CANCELAR"
                            color="button--red"
                            onClick={() => dispatch({type: TOOGLE_MODAL, modal: "modalAdd"})}
                        />
                    </FormAction>
                </div>
            </div>
        )
    }

    if(state.modalEdit){
        return (
            <div class="libreta__modal">
                <div class="modal modal--show">
                    <FormAction title="Editar Curso">
                        <Button
                            icon="fas fa-check" 
                            cartel="CONFIRMAR"
                            color="button--green"
                            onClick={() => console.log("add")}
                        />
                        <Button
                            icon="fas fa-times" 
                            cartel="CANCELAR"
                            color="button--red"
                            onClick={() => dispatch({type: TOOGLE_MODAL, modal: "modalEdit"})}
                        />
                    </FormAction>
                </div>
            </div>
        )
    }

    if(state.modalDelete){
        return (
            <div class="libreta__modal">
                <div class="modal modal--show">
                    <FormAction title="Eliminar Curso">
                        <Button
                            icon="fas fa-check" 
                            cartel="CONFIRMAR"
                            color="button--green"
                            onClick={() => console.log("add")}
                        />
                        <Button
                            icon="fas fa-times" 
                            cartel="CANCELAR"
                            color="button--red"
                            onClick={() => dispatch({type: TOOGLE_MODAL, modal: "modalDelete"})}
                        />
                    </FormAction>
                </div>
            </div>
        )
    }

    return (<></>)
}

export default Modal;