import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    
    const [state, setsState] = useState({ data: null, loading: true, error: null})

    useEffect(() => {

        setsState({ data: null, loading: true, error: null})

        fetch( url ).then( resp => resp.json()).then( data => {
            setsState({
                loading: false,
                error: null,
                data
            })
        });
    }, [url]);

    return state;
}
