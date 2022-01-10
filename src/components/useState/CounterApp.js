import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const initialState = { counter: 0, counter2: 20 };
    const [state, setState] = useState(initialState);

    const { counter, counter2 } = state;

    const add = () => {
        setState({
            ...state,
            counter: counter + 1
        })
    }

    const subs = () => {
        setState({
            ...state,
            counter: counter - 1
        })
    }

    const reset = () => {
        setState({
            ...state,
            counter: 0
        })
    }

    return (
        <div>
            <h1> Counter1 { counter } </h1>
            <h1> Counter2 { counter2 } </h1>
            <hr />

            <button type="button" class="btn btn-outline-primary" onClick={add}> +1</button>
            <button type="button" class="btn btn-outline-primary" onClick={subs}> -1</button>
            <button type="button" class="btn btn-outline-primary" onClick={reset}> reset</button>
            <button type="button" class="btn btn-outline-primary"> +1</button>
        </div>
    )
}
