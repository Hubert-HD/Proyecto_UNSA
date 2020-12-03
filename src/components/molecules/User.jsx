import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const User = () => {

  const [userStorage] = useContext(UserContext);
  
  return (
    <div className="container-user">
      <div className="container-userPhoto">
        <img className="userPhoto" src="img/user.jpg" alt=""/>
      </div>
      <div className="container-userInfo">
        <Link className="userInfo" to=".">{userStorage.user}</Link>
      </div>
    </div>
    )
  }
  
  export default User;