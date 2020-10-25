import React from 'react'

import LinkItem from '../atoms/LinkItem';

const LinkItemList = () => {
    return (
        <ul className="container-linkList">
            <LinkItem icon="fas fa-home" cartel="Home" link="/" />
            <LinkItem icon="fas fa-home" cartel="Home" link="/" />
            <LinkItem icon="fas fa-home" cartel="Home" link="/" />
            <LinkItem icon="far fa-check-square" cartel="Mis notas" link="/libreta-notas" />
            <LinkItem icon="fas fa-calculator" cartel="Calculadora" link="/calculadora-cursos" />
            <LinkItem icon="fas fa-chart-line" cartel="Progreso" link="/progreso" />
            <LinkItem icon="fas fa-sign-out-alt" cartel="Cerrar sesion" link="/logout" className="container-linkItem--down"/>
        </ul>
    )
}

export default LinkItemList;