import React from 'react';

export const CategoryFilter = ({ nombre, setBusqueda }) => {

    const change = ({ target }) => setBusqueda({nombre: target.value.toLowerCase()});

    return (
        <div style={{'margin': '10px'}}>
            <form className="form-inline my-2 my-lg-0">
                <input onChange={change} value={nombre} autoComplete="false" className="form-control mr-sm-2" type="search" placeholder="Buscar pokemon" aria-label="Search" />
            </form>
        </div>
    )
}
