import React, { useLayoutEffect, useState, useRef } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounterQuote } from '../../hooks/useCounterQuote';

import './layout.css';

export const Layout = () => {
    
    const { quoteId, add } = useCounterQuote();
    const url = `https://www.breakingbadapi.com/api/quotes/${quoteId}`;
    const { data } = useFetch( url );

    const { author, quote } = !!data && data[0];

    const textRef = useRef();
    const [BoxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize( textRef.current.getBoundingClientRect() )
    }, [quote])

    return (
        <div>
            <h2> Layouts Quotes</h2>

            <hr />
       
            <blockquote className='blockquote text-right'>
                <p ref={textRef} className='mb-0'> { quote } </p>
                <footer className='blockquote-footer'> { author } </footer>
            </blockquote>      

            <pre>
                { JSON.stringify( BoxSize, null, 3 )}
            </pre>      

            <button type="button" className="btn btn-outline-primary" onClick={add}> next Quote </button>            
        </div>
    )
}
