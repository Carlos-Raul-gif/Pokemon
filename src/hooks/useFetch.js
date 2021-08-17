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
