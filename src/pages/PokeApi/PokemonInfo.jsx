import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const PokemonInfo = ({ id }) => {

    const { data, load } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    return (
        <div  className="card-img-top">
            <div>
                <span> Tipo de Pokemon:</span>
                { load ? <span>Cargando...</span>
                    : data.types.map((item, i) => <li key={i} >{ item.type?.name }</li> )
                }
            </div>  
        </div>
    )
}
