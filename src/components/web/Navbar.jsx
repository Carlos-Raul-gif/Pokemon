import React from 'react';

import './Search.css';

export const Navbar = () => {

   
    return (
        <>
        <nav className="navbar fixed navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">PokeDex</a>
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
                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
            </div>
        </nav>
        </>
    )
}
