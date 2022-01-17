import React, { useContext, useEffect } from 'react';
import {Link } from 'react-router-dom';
   

import { UserContext } from './UserContest';

export const LoginScreen = () => {
    
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
    }, [user])
    

    const handleInputChange = (e) => {
        console.log(user);
        setUser({
            ...user,
            id: new Date().getDate().toString(),
            [ e.target.name ] : e.target.value
        })
    };

    const login = (e) => {
        e.preventDefault();
        console.log('*** login USER ***');
    }

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

            <button type="button" className="btn btn-outline-primary" onClick={login}>
                <Link to="/about">Sign In</Link>
                </button>
        </div>
    )
}
