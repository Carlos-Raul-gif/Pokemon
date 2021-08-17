import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from './UserContext';


export const PrivateRoute = ({ component: Component, ...rest }) => {

    const { usuario } = useContext(UserContext)

    return (
        <Route {...rest} render={ props => (usuario.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" /> )} />
    )
}
