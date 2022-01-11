import { useState } from 'react';

export const useCounterQuote = (initualState = 1) => {
    
    const [counterQuote, setCounterQuote] = useState( initualState );

    const reset = () => {
        setCounterQuote( initualState )
    };

    const add = () => {
        setCounterQuote( counterQuote + 1 )
    };

    const subs = () => {
        setCounterQuote( counterQuote - 1 )
    }
    
    return {
        reset,
        add,
        subs,
        quoteId: counterQuote
    }
}
