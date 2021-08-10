import React, { useState } from 'react';
import { PokemonImg } from './PokemonImg';
import { PokemonInfo } from './PokemonInfo';

import './styles.css';


export const Pokemon = ({ name, pokeUrl }) => {
    const [showInfo, setShowInfo] = useState(true);

    const pokeId = pokeUrl.split('/')[6];

    return (
        <div className="col-md-4">
            <div className="card">

                { showInfo ?  <PokemonImg id={pokeId} />
                    : <PokemonInfo id={pokeId} />
                }

                <div className="card-body">
                    <button onClick={() => setShowInfo(!showInfo)} className="btn btn-success btn-block">{ name }</button>
                </div>
            </div>
        </div>
    )
}
