import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Category } from './Category';


export const Index = () => {

    const [catalogo, setCatalogo] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6');
    const { load, data } = useFetch(catalogo);

    useEffect(() => {}, [catalogo])

    return (
        <div className="container">
            <h5 className="item-center">Elige una carta pokemon</h5>

            { 
                load ? <div className="alert alert-primary" >Cargando... </div>
                    :  <Category datos={data} setCategory={setCatalogo} />
            }

        </div>
    )
}
