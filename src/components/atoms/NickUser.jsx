import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const NickUser = () => {

    const [state] = useContext(UserContext);

    return (
        <div className="container-userInfo">
            <Link className="userInfo" to="./libreta-notas">{state.user}</Link>
        </div>
    )
}

export default NickUser;