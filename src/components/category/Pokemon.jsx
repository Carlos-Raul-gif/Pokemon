import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { PokemonImg } from './PokemonImg';
import { PokemonInfo } from './PokemonInfo';

import './styles.css';


export const Pokemon = ({ name }) => {
    const [showInfo, setShowInfo] = useState(true);

    const { load, data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

    return (
        <div className="col-md-4">
            <div className="card">

                { showInfo ?  <PokemonImg img={data.sprites} load={load} />
                    : <PokemonInfo tipo={data.types} />
                }

                <div className="card-body">
                    <button onClick={() => setShowInfo(!showInfo)} className="btn btn-success btn-block">{ name }</button>
                </div>
            </div>
        </div>
    )
}
