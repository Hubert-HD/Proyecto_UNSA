import React, { useState, useEffect, useRef } from 'react'

const Selection = ({placeholder, optionList, value, useForm}) => {

  const [activate, setActivate] = useState(false)
  const [box, setBox] = useState(value)
  const selection = useRef(null);
  
  useEffect(() => {
    window.addEventListener("click", handleEvent);
    return () => {window.removeEventListener("click", handleEvent)}
  }, []);
  
  const handleEvent = (event) => {
    if(!selection.current.contains(event.target))
      setActivate(false)
  }

  useEffect(() => {
    useForm[1]({...useForm[0], period: box})
  }, [box])

  return (
    <div className="selection" ref={selection}>
      <div 
        className="selecBox"
        tabindex="0"
        onClick={() => setActivate(!activate)}
        onKeyDown={(event) => {
          if (event.key === "Enter")
            setActivate(!activate)
        }}>
        <div className={`selecBox__content selecBox__content--${box ? "full" : "void"}`}>{box ? box : placeholder}</div>
        <i className={`selecBox__ico selecBox__ico--${activate ? "up" : "down"} fas fa-angle-down` }></i>
      </div>
      <div className={`optionList optionList--${activate ? "show" : "hidden"}`}>
        {
          optionList.map(option => 
            <div 
              key={option}
              className="optionList__option"
              onClick={() => {
                setBox(option)
                setActivate(!activate)
              }}
              tabindex={activate ? "0":"-1"}
              onKeyDown={(event) => {
                if (event.key === "Enter"){
                  setBox(option)
                  setActivate(!activate)
                }
              }}
              onMouseOver={ (event) => {
                event.target.focus()
              }}
            >{option}</div>
          )
        }
      </div>
      <input className="selection__input" type="hidden" name="ciclo" value={box ? box : value}/>
    </div>
  )
}

export default Selection;