import React from 'react'

export const ShowIncrement = React.memo(({ add }) => {

    return (
        <button type="button" className='btn btn-outline-primary' onClick={ () => {
            add( 5, 2 );
        }}> add </button>
    )
})
