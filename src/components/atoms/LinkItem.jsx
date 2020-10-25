import React from 'react';
import { Link } from 'react-router-dom';

const LinkItem = ({icon, cartel, link, className = ""}) => {

    return (
        <li className={"container-linkItem " + className}>
            <Link className="linkItem" to={link}>
                <i className={"iconLink " + icon}></i>
                <span className="cartelLink">{cartel}</span>
            </Link>
        </li>
    );
}

export default LinkItem;