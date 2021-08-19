import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

import '../../styles/login.css';

export const Register = () => {

    const { setUsuario } = useContext(UserContext);

    const [ values, inputChange, resetValues ] = useForm({
        nombre: '',
        email: '',
        password: ''
    });

    const { nombre, email, password } = values;

    const submitForm  = ( e ) => {
        e.preventDefault();
        
        setUsuario({
            isAuthenticated: true,
            nombre: nombre,
            email: email
        });

        resetValues();
    }

    return (
        <div className="contenedor" >
            <div className="form-container">
                <h1>Registrate gratis</h1>
                <form onSubmit={submitForm} >

                    <input onChange={inputChange} value={nombre} name="nombre" type="text" required placeholder="Nombre" />
                    <input onChange={inputChange} value={email} name="email" type="text" required placeholder="Email" />
                    <input onChange={inputChange} value={password} name="password" type="password" required placeholder="Password" />

                    <button type="submit">entrar</button>
                </form>

                <span><Link to="/login">Ya tengo cuenta</Link></span>

            </div>
        </div>
    )
}
