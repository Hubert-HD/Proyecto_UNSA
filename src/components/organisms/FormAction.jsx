import React from 'react'

import Form from '../molecules/Form';
import ButtonGrid from '../molecules/ButtonGrid';

const FormAction = ({title, children}) => {
    
    return (
        <div class="form-course">
            <h1 class="form-course__title">{title}</h1>
            <Form />
            <ButtonGrid>
                {children}
            </ButtonGrid>
        </div>
    )
}

export default FormAction;