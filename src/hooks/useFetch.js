import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({load: true, data: []});
    const isMounted = useRef(true);

    useEffect(() => {
        return () => isMounted.current = false;
    }, []);

    useEffect(() => {
        setState({load: true, data: []});

        fetch(url)
        .then(res => res.json())
        .then(data => setState({ load: false, data: data }));

    }, [ url ]);

    return state;
}

export const useFetchPost = (url, values) => {

    const [state, setState] = useState({ error: false, data: [], load: false })

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(values),
    })
    .then(res => res.json())
    .then(data => {
        setState({...state, data, load: true});
    })
    .catch(err => setState({...state, error: true}));

    return state;
}