import React from 'react'

import User from '../molecules/User';
import LinkItemList from '../molecules/LinkItemList';
import ButtonLanguage from '../molecules/ButtonLanguage';
import LinkLogout from '../molecules/LinkLogout';

const SideMenu = () => {
  return (
    <div className="container-sidebar">
      <User />
      <ButtonLanguage/>
      <LinkItemList/>
      <LinkLogout/>
    </div>
    )
  }
  
export default SideMenu;