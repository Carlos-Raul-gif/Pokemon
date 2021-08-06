import { useEffect, useState } from 'react'

export const useFetch = (catalogo) => {

    const [state, setState] = useState({load: true, data: []});

    useEffect(() => {
        setState({load: true, data: []});

        fetch(catalogo)
        .then(res => res.json())
        .then(data => setState({ load: false, data: data }));

    }, [ catalogo ]);

    return state;
}
