import React from 'react'

const Button = ({icon, cartel, id, color}) => {

    return (
        <a className={"button " + color}>
          <i className={"button__ico " + icon}></i>
          <span className="button__text">{cartel}</span>
        </a>
    )
}

export default Button;