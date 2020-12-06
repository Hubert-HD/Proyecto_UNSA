import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { useTranslation } from 'react-i18next'

const LinkLogout = () => {
  const {t} = useTranslation()
  return (
    <ul className="container-linkLogout">
      <Logout icon="fas fa-sign-out-alt" cartel={t("logout")} className="container-linkItem--down"/>
    </ul>
    )
  }

const Logout = ({icon, cartel, className = ""}) => {
  const [userStorage, dispatch] = useContext(UserContext);
  const history = useHistory();

  const singout = (e) => {
    e.preventDefault();
    dispatch({
        type: "LOGOUT_USER", 
        user: null
    })
    history.push("/");
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
  
export default LinkLogout;