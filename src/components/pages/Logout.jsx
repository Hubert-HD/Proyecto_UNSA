import React from "react"
import { Redirect } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { useContext } from "react";

const Logout = () => {
    const {logout} = useContext(UserContext);

    logout();

    return (
        <Redirect to="/" />
    )
}
export default Logout