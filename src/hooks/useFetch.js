import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    
    const isMounted = useRef(true);

    const [state, setsState] = useState({ data: null, loading: true, error: null})

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setsState({ data: null, loading: true, error: null})

        fetch( url ).then( resp => resp.json()).then( data => {

            if (isMounted.current) {
                setsState({
                    loading: false,
                    error: null,
                    data
                })
            }
        }).catch(() => {
            setsState({
                loading: true,
                error: 'could not load phrase',
                data: null
            })
        })
    }, [url]);

    return state;
}
