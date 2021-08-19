import React, { useState } from 'react';
import { SpanAlert } from '../../components/etiquetas/SpanAlert';
import { Pokemon } from './Pokemon';

export const Category = ({ results }) => {

    const [pagination, setPagination] = useState(0);

    return (
        <>

        <div className="row">
            { (results.length === 0) ? <SpanAlert tipo="warning" mensaje="No hay resultados" />
                : results.slice(pagination, pagination + 6)
                    .map((item, i) => <Pokemon key={i} name={item.name} pokeUrl={item.url} /> )
            }
        </div>
            
        <div className="text-center">
            { (pagination > 0) && <button onClick={() => setPagination(i => i - 6)} className="btn btn-outline-warning btn-margen">Back</button> }

            { (results.length > 9) && <button onClick={() => setPagination(i => i + 6 )} className="btn btn-outline-primary btn-margen">Next</button> }
        </div>
                
        </>
    )
}
