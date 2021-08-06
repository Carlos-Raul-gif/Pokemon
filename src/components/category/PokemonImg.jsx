import React from 'react'

export const PokemonImg = ({ img, load }) => {

    return (
        <>
            {load ? <span>Cargando...</span>
                : <img 
                    className="card-img-top" 
                    src={img?.other?.dream_world?.front_default} 
                    alt="pokemon" 
                />
            }
        </>
    )
}
