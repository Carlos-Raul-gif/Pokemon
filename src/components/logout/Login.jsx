import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

import '../../styles/login.css';

export const Login = () => {

    const { setUsuario } = useContext(UserContext);

    const [values, inputChange, resetValues] = useForm({
        isAuthenticated: true, email: '', password: ''
    });

    const [hasError, setHasError] = useState(false);

    const { email, password } = values;

    const submitForm = (e) => {
        e.preventDefault();

        if (email === 'invitado@gmail.com') {
            setUsuario({
                isAuthenticated: true, nombre: 'Invitado', email: email
            });
        } else {
            setHasError(true)
            setTimeout(() => setHasError(false), 2000);
        }
        resetValues();
    }

    return (
        <div className="contenedor" >
            <div className="form-container">
                <h1>Welcome</h1>
                <form onSubmit={submitForm} >

                    <input
                        onChange={inputChange}
                        value={email}
                        name="email"
                        type="text"
                        placeholder="email"
                        className={`${hasError && 'hasError'}`}
                        // autoComplete="off"
                        required
                    />

                    { hasError && <div className="mensaje-error">Error! Correo o contrasena incorrecto </div> }

                    <input
                        onChange={inputChange} 
                        value={password} 
                        name="password" 
                        type="password" 
                        placeholder="password" 
                        required 
                    />

                    <button type="submit">Iniciar sesion</button>

                </form>

                <span className="registro-nuevo">registrarse <Link to="/register">aqui</Link></span>

            </div>
        </div>
    )
}
