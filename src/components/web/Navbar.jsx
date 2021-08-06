import React, { useState } from 'react';

import './Search.css';

export const Navbar = () => {

    const [busqueda , setBusqueda] = useState('');

    const change = ({ target }) => {
        if(target.value.length > 2){
            setBusqueda(target.value);
        }
    }
    return (
        <>
        <nav className="navbar fixed navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler " type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input onChange={change} value={busqueda.nombre} autoComplete="false" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        {/* <div className="resultados">
            <ul>
                <li>Vista 1</li>
                <li>Vista 2</li>
                <li>Vista 3</li>
            </ul>
        </div> */}
        </>
    )
}
