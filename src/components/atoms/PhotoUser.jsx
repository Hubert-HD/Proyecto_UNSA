import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const PhotoUser = () => {

    const [state] = useContext(UserContext);

    return (
        <div className="container-userPhoto">
            <img className="userPhoto" src={state.photo} alt=""/>
        </div>
    )
}

export default PhotoUser;