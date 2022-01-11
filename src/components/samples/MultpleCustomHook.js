import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCounterQuote } from '../../hooks/useCounterQuote';

import '../../App.css';

export const MultpleCustomHook = () => {
    
    const { quoteId, add } = useCounterQuote();
    const url = `https://www.breakingbadapi.com/api/quotes/${quoteId}`;
    const { loading, data } = useFetch( url );

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h2> BreakingBad Quotes</h2>

            <hr />

            { loading 
                ? 
                <div className='alert alert-info text-center'>
                    loading
                </div>
                :
                <blockquote className='blockquote text-right'>
                <p className='mb-0'> { quote } </p>
                <footer className='blockquote-footer'> { author } </footer>
            </blockquote>
            }

            <button type="button" className="btn btn-outline-primary" onClick={add}> next Quote </button>            
        </div>
    )
}
