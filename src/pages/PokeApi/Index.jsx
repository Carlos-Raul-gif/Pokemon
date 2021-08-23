import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { SpanAlert } from '../../components/etiquetas/SpanAlert';
import { Category } from './Category';
import { CategoryFilter } from './CategoryFilter';

import '../../styles/grid-pokemon.css';

export const Index = () => {
    
    const { load, data } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=1100');
    
    const [{nombre} , setBusqueda] = useState({nombre: ''});
    
    const [{ pokemons }, setPokemonSelectFilter] = useState({ pokemons: [] });

    return (
        <div className="container" >

            <CategoryFilter 
                nombre={nombre} 
                setBusqueda={setBusqueda} 
                setSelection={setPokemonSelectFilter}
            />

            { 
                load ? <SpanAlert tipo="primary" mensaje="Cargando..." />
                    :  <Category results={ 
                            (pokemons.length > 0 ) ? pokemons.map((poke) => poke.pokemon ) :
                                (nombre === '') ? data.results : data.results.filter(poke => poke.name.includes(nombre))
                     } />
            }

        </div>
    )
}
