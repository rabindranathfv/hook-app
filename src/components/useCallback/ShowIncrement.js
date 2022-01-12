import React from 'react'

export const ShowIncrement = React.memo(({ add }) => {

    console.log('Re-RENDER *****');

    return (
        <button type="button" className='btn btn-outline-primary' onClick={ () => {
            add( 5 );
        }}> add </button>
    )
})
