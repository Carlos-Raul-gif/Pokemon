import React from 'react';
import { Pokemon } from './Pokemon';

export const Category = ({ datos, setCategory }) => {
    
    const { results, next, previous } = datos;

    const skipCategory = (next) => { setCategory(next) }

    return (
        <>
        <div className="row">
            {results.map((item, i) => {
                return <Pokemon key={i} name={item.name} />
            })}
        </div>
            
        <div className="text-center">
            { previous && <button onClick={() => skipCategory(previous)} className="btn btn-outline-warning btn-margen">Back</button> }
            <button onClick={() => skipCategory(next)} className="btn btn-outline-primary btn-margen">Next</button>
        </div>
                
        </>
    )
}
