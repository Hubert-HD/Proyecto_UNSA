import React from 'react'

import User from '../molecules/User';
import LinkItemList from '../molecules/LinkItemList';

const SideMenu = () => {
    
    return (
        <div className="container-sidebar">
            <User />
            <LinkItemList/>
        </div>
    )
}

export default SideMenu;