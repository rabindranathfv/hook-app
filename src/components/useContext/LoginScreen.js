import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserContest';

export const LoginScreen = () => {
    
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        console.log('Listem all user changes')
    }, [user])
    

    const handleInputChange = (e) => {
        console.log(user);
        setUser({
            ...user,
            [ e.target.name ] : e.target.value
    
        })
    };

    return (
        <div>
            <h1> Login Screen </h1>
            <hr />

            <div className="form-group">
                <label htmlFor=""></label>
                <input type="text"
                className="form-control" name="name" id="" aria-describedby="name-form" placeholder="enter your name" value={user?.name} onChange={handleInputChange}/>
                <small className="username info">Name</small>

                <label htmlFor=""></label>
                <input type="text"
                className="form-control" name="email" id="" aria-describedby="email-form" placeholder="enter your email" value={user?.email} onChange={handleInputChange}/>
                <small className="email info">Email</small>
            </div>
        </div>
    )
}
