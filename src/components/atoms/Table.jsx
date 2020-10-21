import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Loader from './Loader';
import { LibretaContext } from '../../context/LibretaContext';
import { TOOGLE_MODAL } from '../../context/actions';

const Table = () => {

    const [state, dispatch] = useContext(LibretaContext)

    const [notas, setNotas] = useState(null)
    const [puntaje, setPuntaje] = useState({
        notaPonderada: 0,
        creditoAcumulados: 0
    })

    function promediar(data){    
        let sumaCredito = 0;
        let promedio = 0;
        let sumaNotaPonderada = 0;

        data.forEach(({ciclo, cursos}) => {
            cursos.forEach(({nota, credito}) => {
                sumaNotaPonderada += parseInt(nota) * parseInt(credito);
                sumaCredito += parseInt(credito);
            });
        });
        promedio = sumaNotaPonderada / sumaCredito;

        setPuntaje({
            notaPonderada: promedio,
            creditoAcumulados: sumaCredito
        });
    }


    function abrirModal(curso, nota, credito){
        dispatch({type: TOOGLE_MODAL, modal: "modalEdit", data: {curso: curso, nota: nota, credito: credito}})
    }

    useEffect(() => {
        fetch("data.json")
            .then(respuesta => respuesta.json())
            .then(data => {
                setNotas(data);
                promediar(data);
            })
    }, [])

    if (!notas) return <Loader />

    return (
        <div class="tableList-container">
            <table class="tableList" id="notasTabla">
                <thead class="tableList__head">
                    <tr class="tableList__row tableList__row--title">
                        <th class="tableList__colum tableList__colum--center">NOMBRE DEL CURSO</th>
                        <th class="tableList__colum tableList__colum--center">NOTA</th>
                        <th class="tableList__colum tableList__colum--center">N° CREDITOS</th>
                    </tr>
                </thead>
                {
                    notas.map(({ciclo, cursos}) => (
                            <tbody class="tableList__body">
                                <tr class="tableList__row tableList__row--subtitle">
                                    <th class="tableList__colum tableList__colum--subtitle">{ciclo}</th>
                                </tr>
                                {
                                    cursos.map( ({curso, nota, credito}) => (
                                            <tr class="tableList__row tableList__row--data">
                                                <td class="tableList__colum tableList__colum--text">{curso}</td>
                                                <td class="tableList__colum tableList__colum--number nota">{nota}</td>
                                                <td class="tableList__colum tableList__colum--number credito">{credito}</td>
                                                {
                                                    (state.editActivate) ? (
                                                    <td class="tableList__colum tableList__colum--action">
                                                        <a class="buttonIco editIco" onClick={() => abrirModal(curso, nota, credito)}>
                                                            <i class="fas fa-edit"></i>
                                                        </a>
                                                        <a class="buttonIco buttonIco--red deleteIco">
                                                            <i class="fas fa-trash-alt"></i>
                                                        </a>
                                                    </td>) : <></>
                                                }
                                            </tr>
                                        ) 
                                    )
                                }
                            </tbody>
                        )
                    ) 
                }
                <tfoot class="tableList__foot">
                    <tr class="tableList__row tableList__row--result">
                        <td class="tableList__colum tableList__colum--center">PROMEDIO</td>
                        <td class="tableList__colum tableList__colum--center" id="promedioBox">{puntaje.notaPonderada}</td>
                        <td class="tableList__colum tableList__colum--center" id="creditoTotalBox">{puntaje.creditoAcumulados} creditos</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Table;