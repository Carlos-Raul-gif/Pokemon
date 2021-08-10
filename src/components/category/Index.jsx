import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Category } from './Category';


export const Index = () => {

    const catalogo = 'https://pokeapi.co/api/v2/pokemon?limit=1100';

    const { load, data } = useFetch(catalogo);

    console.log(data)

    useEffect(() => { }, [catalogo])

    return (
        <div className="container">
            <h5 className="item-center">Elige una carta pokemon</h5>

            { 
                load ? <div className="alert alert-primary" >Cargando... </div>
                    :  <Category results={data.results} />
            }

        </div>
    )
}
