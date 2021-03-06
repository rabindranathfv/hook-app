import React, { useState } from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContest';


export const MainApp = () => {
    
    const [user, setUser] = useState({ name: '', email: '', id: null, confing: { key: 'value' }})
    
    return (
        <UserContext.Provider value={ { user, setUser } }>
            <AppRouter />
        </UserContext.Provider>
    )
}
