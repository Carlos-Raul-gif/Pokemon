import React from 'react';
// import { useFetch } from '../../hooks/useFetch';

export const PokemonInfo = ({ tipo }) => {

    console.log(tipo)

    return (
        <div  className="card-img-top">
            <div>
                <span> Tipo de Pokemon:</span>
                {tipo.map((item, i) => <li key={i} >{ item.type?.name }</li> )}
            </div>  
        </div>
    )
}
