import React, { useContext } from 'react'
import { UserContext } from './UserContest';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1> About Screen </h1>
            <hr />

            <h3>
                welcome { user?.name }!
            </h3>
        </div>
    )
}
