import React from "react"
import { Link } from 'react-router-dom';
import "../../styles/inicio.scss"

const PublicPage = () => {
  
  return (
    <>
      <header className="headerPublic">
        <h1 className="appText">ToolStudent</h1>
        <div className="paginas-container">
          <Link className="paginas">Inicio</Link>
          <Link className="paginas">Contacto</Link>
          <Link className="paginas">Servicios</Link>
        </div>
        <Link to="./login" className="login">Iniciar Session</Link>
      </header>
      <section className="banner">
        <h1 className="nombreApp">ToolStudent</h1>
        <p className="subtitulo">Una herramienta web para universitarios</p>
        <Link className="button buttonPublic">Más información</Link>
      </section>
      <footer className="footer">
        <div className="foot-item">
          <img className="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo3fuUQ2wlUKcjcjMYkJa_ZsRe7a2fVezFg&usqp=CAU" alt=""/>
          <h3 className="subtitulo">Libreta de notas</h3>
        </div>
        <div className="foot-item foot-item-center">
          <img className="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo3fuUQ2wlUKcjcjMYkJa_ZsRe7a2fVezFg&usqp=CAU" alt=""/>
          <h3 className="subtitulo">Lista de tareas</h3>
        </div>
        <div className="foot-item">
          <img className="imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo3fuUQ2wlUKcjcjMYkJa_ZsRe7a2fVezFg&usqp=CAU" alt=""/>
          <h3 className="subtitulo">Calculadora de notas</h3>
        </div>
      </footer>
    </>
    )
  }
  
  export default PublicPage