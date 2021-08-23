import React from 'react';
import axios from 'axios';
import { useFetch } from '../../hooks/useFetch';

export const CategoryFilter = ({ nombre, setBusqueda, setSelection }) => {

    const { load, data } = useFetch('https://pokeapi.co/api/v2/type');

    const change = ({ target }) => setBusqueda({nombre: target.value.toLowerCase()});


    const changeFilterOption = async ({ target }) => {
        console.log(target.value);
        
        if(target.value === 'all'){
            setSelection({ pokemons: [] });
        } else {
            const { data: newData } = await axios(`https://pokeapi.co/api/v2/type/${target.value}`);

            setSelection({ pokemons: newData.pokemon });
        }
    }

    return (
        <div style={{'margin': '10px'}}>
            <form className="form-inline my-2 my-lg-0" >

                <input 
                    onChange={change} 
                    value={nombre} 
                    autoComplete="false" 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Buscar pokemon" 
                    aria-label="Search" 
                />

                <select onChange={changeFilterOption} >
                    <option disabled>buscar por tipo el tipo</option>
                    <option value="all">Todos</option>
                    {
                        !load && data.results.map((poke, i) => {
                            return (<option key={i} value={poke.name} > {poke.name} </option>);
                        })
                    }
                </select>
            </form>
        </div>
    )
}
