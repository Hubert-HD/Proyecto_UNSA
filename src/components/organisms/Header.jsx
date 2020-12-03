import React from "react"

const Header = () => {
  
  return (
    <div className="container-header">
      <div className="container-logo">
        <h1 className="logoInfo">ToolStudent</h1>
      </div>
      <div className="container-menuButton">
        <a className="menuButton" href=".">
          <i className="icono fas fa-bars"></i>
        </a>
      </div>
    </div>
    );
  };
  
  export default Header;