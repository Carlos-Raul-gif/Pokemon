import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

import '../../styles/login.css';

export const Login = () => {

    const { setUsuario } = useContext(UserContext);

    const [ values, inputChange ] = useForm({
        email: '', password: ''
    });

    const { email, password } = values;

    const [ hasError, setHasError ] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();

        const { data } = await axios.post('http://localhost:4000/login', values);

        try{
            if(!data.err) {
                console.log('logeado')
                setUsuario({
                    isAuthenticated: true, 
                    nombre: data.payload.nombre, 
                    email: data.payload.email, 
                    token: data.token
                });
            } else {
                setHasError(true)
                setTimeout(() => setHasError(false), 2000);
            }
        } catch (err) { console.log(err) }

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
                        placeholder="Email"
                        className={`${hasError && 'hasError'}`}
                        // autoComplete="off"
                        required
                    />

                    { hasError && <div className="mensaje-error">Error! Correo o contraseña incorrecto </div> }

                    <input
                        onChange={inputChange} 
                        value={password} 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        required 
                    />

                    <button type="submit">Iniciar sesion</button>

                </form>

                <span className="registro-nuevo">registrarse <Link to="/register">aqui</Link></span>

            </div>
        </div>
    )
}
