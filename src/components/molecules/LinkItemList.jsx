import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const LinkItemList = () => {
  return (
    <ul className="container-linkList">
      <LinkItem icon="fas fa-chart-bar" cartel="Mis notas" link="/" />
      <LinkItem icon="fas fa-book" cartel="Mis cursos" link="/cursos" />
      <LinkItem icon="fas fa-tasks" cartel="Mis tareas" link="/tareas" />
      <LinkItem icon="fas fa-project-diagram" cartel="Malla curricular" link="/malla-curricular" />
      <LinkItem icon="fas fa-calculator" cartel="Calculadora" link="/calculadora" />
      <LinkLogout icon="fas fa-sign-out-alt" cartel="Cerrar sesion" className="container-linkItem--down"/>
    </ul>
    )
  }

const LinkItem = ({icon, cartel, link, className = ""}) => {
  return (
    <li className={"container-linkItem " + className}>
      <Link className="linkItem" to={link}>
        <i className={"iconLink " + icon}></i>
        <span className="cartelLink">{cartel}</span>
      </Link>
    </li>
  );
}

const LinkLogout = ({icon, cartel, className = ""}) => {
  const [userStorage, dispatch] = useContext(UserContext);
  const history = useHistory();

  const singout = (e) => {
    e.preventDefault();
    dispatch({
        type: "LOGOUT_USER", 
        user: null
    })
    history.push("/");
    localStorage.removeItem("user")
}

  return (
    <li className={"container-linkItem " + className}>
      <a className="linkItem" href="." onClick={singout}>
        <i className={"iconLink " + icon}></i>
        <span className="cartelLink">{cartel}</span>
      </a>
    </li>
  );
}
  
export default LinkItemList;