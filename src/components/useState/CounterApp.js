import React from 'react'

export const CounterApp = () => {
    return (
        <div>
            <h1> Counter { 0 } </h1>
            <hr />

            <button type="button" class="btn btn-outline-primary"> +1</button>
            <button type="button" class="btn btn-outline-primary"> -1</button>
            <button type="button" class="btn btn-outline-primary"> reset</button>
            <button type="button" class="btn btn-outline-primary"> +1</button>
        </div>
    )
}
