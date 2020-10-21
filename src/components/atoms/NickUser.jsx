import React from 'react'
import { Link } from 'react-router-dom';

const NickUser = () => {

    return (
        <div className="container-userInfo">
            <Link className="userInfo" to="./libreta-notas">Hubert Alexander</Link>
        </div>
    )
}

export default NickUser;