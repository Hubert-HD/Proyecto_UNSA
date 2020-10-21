import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LibretaContext } from '../../context/LibretaContext';

const Table = () => {

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
           /*  console.log(ciclo); */
            cursos.forEach(({nota, credito}) => {
                /* console.log(nota + " y " + credito); */
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

    useEffect(() => {
        fetch("data.json")
            .then(respuesta => respuesta.json())
            .then(data => {
                setNotas(data);
                promediar(data);
            })
    }, [])

    if (!notas) return <h1>Cargando...</h1>

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