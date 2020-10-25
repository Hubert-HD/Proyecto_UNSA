import React, { useContext } from 'react'
import FormAction from '../organisms/FormAction'
import Button from '../atoms/Button'
import { LibretaContext } from '../../context/LibretasContext';
import Form from './Form';

const ModalLibreta = () => {

  const [status, dispatch] = useContext(LibretaContext);

  if(status.modal){
    return (
      <div class="modal modal--show">
        <Form />
      </div>
    )
  }
  
  return null
}

export default ModalLibreta
