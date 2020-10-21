import React from 'react'

import Selection from '../atoms/Selection';

const Form = () => {
    return (
        <form class="form-course__form" id="addCourse">
            <input class="form-course__input" type="text" name="curso" placeholder="Nombre del curso" autocomplete="off" /> 
            <input class="form-course__input" type="number" name="nota" placeholder="Nota" min="0" max="20" autocomplete="off" />            
            <input class="form-course__input" type="number" name="credito" placeholder="Creditos" min="0" autocomplete="off" />
            <Selection cartel="Ciclo" optionList={["2017-I","2017-II","2018-I","2018-II","2019-I","2019-II","2020-I","2020II"]}/>          
        </form>
    )
}

export default Form;