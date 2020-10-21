import React from 'react'

import PhotoUser from '../atoms/PhotoUser';
import NickUser from '../atoms/NickUser';

const User = () => {

    return (
        <div className="container-user">
            <PhotoUser />
            <NickUser />
        </div>
    )
}

export default User;