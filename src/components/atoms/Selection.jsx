import React, { useState, useEffect, useRef } from 'react'

const Selection = ({placeholder, optionList, valueState}) => {

  const [activate, setActivate] = useState(false)
  const [value, setValue] = valueState
  const selection = useRef(null);
  
  useEffect(() => {
    window.addEventListener("click", handleEvent);
    return () => {window.removeEventListener("click", handleEvent)}
  }, []);
  
  const handleEvent = (event) => {
    if(!selection.current.contains(event.target))
      setActivate(false)
  }

  const toogleBoxClick = () => {
    setActivate(!activate)
  }

  const toogleBoxKey = (event) => {
    if (event.key === "Enter")
      setActivate(!activate)
  }

  return (
    <div className="selection" ref={selection}>
      <div
        className="selecBox"
        tabIndex="0"
        onClick={toogleBoxClick}
        onKeyDown={toogleBoxKey}
      >
        <div className={`selecBox__content selecBox__content--${(value.period) ? "full" : "void"}`}>{value.period ? value.period : placeholder}</div>
        <i className={`selecBox__ico selecBox__ico--${activate ? "up" : "down"} fas fa-angle-down` }></i>
      </div>
      <div className={`optionList optionList--${activate ? "show" : "hidden"}`}>
        {
          optionList.map(option => 
            <div 
              key={option}
              className="optionList__option"
              onClick={() => {setValue({...value, period: option}); setActivate(!activate)}}
              tabIndex={activate ? "0":"-1"}
              onKeyDown={(event) => {if (event.key === "Enter"){setValue({...value, period: option}); setActivate(!activate)}}}
              onMouseOver={ (event) => {event.target.focus()}}
            >{option}</div>
          )
        }
      </div>
      <input className="selection__input" type="hidden" name="ciclo" value={value.period ? value.period : ""}/>
    </div>
  )
}

export default Selection;