import React, { useState, useMemo } from 'react';
import { useCounterQuote } from '../../hooks/useCounterQuote';
import { memoHeavyRequest } from '../../helpers/memoHeavyRequest';

import '../../App.css';

export const MemoHook = () => {

    const { quoteId, add } =  useCounterQuote( 5000 );
    const [ show, setShow ] = useState(true);
    
    const memoSimulateHeavyRequest = useMemo(() => memoHeavyRequest(quoteId), [ quoteId ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ quoteId }</small>  </h3>
            <hr />

            <p> { memoSimulateHeavyRequest } </p>

            <button 
                className="btn btn-primary"
                onClick={ add }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
