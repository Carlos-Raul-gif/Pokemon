import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

import '../../styles/login.css';

export const Login = () => {

    const { setUsuario } = useContext(UserContext);

    const [ values, inputChange, resetValues ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = values;

    const submitForm  = ( e ) => {
        e.preventDefault();
        
        setUsuario({
            isAuthenticated: true,
            nombre: 'aun',
            email: email
        });

        resetValues();
    }

    return (
        <div className="contenedor" >
            <div className="form-container">
                <h1>Welcome</h1>
                <form onSubmit={submitForm} >

                    <input onChange={inputChange} value={email} name="email" type="text" required placeholder="email" />
                    <input onChange={inputChange} value={password} name="password" type="password" required placeholder="password" />

                    <button type="submit">entrar</button>
                </form>

                <span>registrarse <Link to="/register">aqui</Link></span>

            </div>
        </div>
    )
}
