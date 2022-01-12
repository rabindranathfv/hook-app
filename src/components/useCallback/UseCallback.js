import React, { useCallback, useState, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../../App.css';

export const UseCallback = () => {

    const [counter, setCounter] = useState(10);

    const add = useCallback(( {incr, factor} ) => 
        {
            setCounter( val => val + incr*factor)
        },
        [setCounter])

    useEffect(() => {
        // 
    }, [add])

    return (
        <div>
            <h1> useCallback Hook </h1>
            <hr />

           <h3>Counter: {counter } </h3>

            <ShowIncrement add={add} />
        </div>
    )
}
