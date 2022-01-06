import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

import '../../styles/login.css';

export const Register = () => {

    // obtener la funcion para setear el valor global
    const { setUsuario } = useContext(UserContext);

    // declarando los valores iniciales para el form
    const [ values, inputChange ] = useForm({
        nombre: '',
        email: '',
        password: ''
    });

    // desestructurando los valores del form
    const { nombre, email, password } = values;

    const submitForm = async  ( e ) => {
        e.preventDefault();

                setUsuario({
                    isAuthenticated: true,
                    nombre: email,
                    correo: email
                })
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
