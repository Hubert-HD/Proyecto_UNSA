import React from "react";
import { useContext } from "react";
import { LibretaContext } from "../../context/LibretaContext";
import { DESACTIVATE_MODAL } from "../../context/actions";

const Modal = () => {

    const [state, dispatch] = useContext(LibretaContext)

    return (
        state.modal ? (
        <div class="libreta__modal">
            <div class="modal modal--show">
                <button onClick={()=>dispatch({type: DESACTIVATE_MODAL})}>cerrar</button>
            </div>
        </div>) : (
        <div class="libreta__modal">
            <div class="modal modal--hidden">
                cerrado
            </div>
        </div>)
    )
}

export default Modal;