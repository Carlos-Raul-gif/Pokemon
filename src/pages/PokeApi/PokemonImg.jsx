import React from 'react'

export const PokemonImg = ({ id }) => {

    return (
        <>
            <img 
                className="card-img-top" 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                alt="pokemon" 
            />
        </>
    )
}
