import React from 'react'

const Button = ({icon, cartel, color, onClick}) => {

  return (
    <a className={"button " + color} onClick={onClick}>
      <i className={"button__ico " + icon}></i>
      <span className="button__text">{cartel}</span>
    </a>
  )
}

export default Button;