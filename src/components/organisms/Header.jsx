import React from "react"

import Logo from "../atoms/Logo"
import MenuButton from "../atoms/MenuButton"

const Header = () => {

    return (
        <div className="container-header">
            <Logo/>
            <MenuButton/>
        </div>
    );
};

export default Header;