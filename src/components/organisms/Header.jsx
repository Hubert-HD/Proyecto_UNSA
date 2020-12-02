import React from "react"

const Header = () => {
  
  return (
    <div className="container-header">
      <div className="container-logo">
        <img className="logoPhoto" src="img/unsa_logo.png" alt=""/>
        <h1 className="logoInfo">Notas unsa</h1>
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