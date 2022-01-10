import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        console.log('Message mount');
        return () => {
            console.log('message unmount')
        }
    }, []);

    return (
        <div>
            <h4> you are cool</h4>
        </div>
    )
}
