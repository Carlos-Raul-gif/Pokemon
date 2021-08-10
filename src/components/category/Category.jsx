import React, { useState } from 'react';
import { Pokemon } from './Pokemon';

export const Category = ({ results }) => {

    const [pagination, setPagination] = useState(0);

    return (
        <>
        <div className="row">
            {results.slice(pagination, pagination + 6).map((item, i) => {
                return <Pokemon key={i} name={item.name} pokeUrl={item.url} />
            })}
        </div>
            
        <div className="text-center">
            { (pagination > 0) && <button onClick={() => setPagination(i => i - 6)} className="btn btn-outline-warning btn-margen">Back</button> }

            <button onClick={() => setPagination(i => i + 6 )} className="btn btn-outline-primary btn-margen">Next</button>
        </div>
                
        </>
    )
}
