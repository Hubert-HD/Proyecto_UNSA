import React, { useContext } from "react"
import { Redirect } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { SET_USER } from "../../context/actions";

const Logout = () => {
    const [state, dispatch] = useContext(UserContext);

    dispatch({
        type: SET_USER, 
        user: null
    })

    return (
        <Redirect to="/" />
    )
}
export default Logout