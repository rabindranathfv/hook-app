import React, { useState, useEffect } from 'react';
import './effect.css';

export const SingleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    // just execute one time at render component
    useEffect(() => {
        console.log('hey!!')
    }, []);

    // execute every time form updates or re-render
    useEffect(() => {
        console.log('Listem all formState changes')
    }, [formState])

    useEffect(() => {
        console.log('listem email changes')
    }, [email])

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [ e.target.name ] : e.target.value
        })
    };

    return (
        <div>
            <h1> useEffect </h1>
            <hr />

            <div className="form-group">
                <label htmlFor=""></label>
                <input type="text"
                className="form-control" name="name" id="" aria-describedby="name-form" placeholder="enter your name" value={name} onChange={handleInputChange}/>
                <small className="form-text text-muted">Name</small>

                <label htmlFor=""></label>
                <input type="text"
                className="form-control" name="email" id="" aria-describedby="email-form" placeholder="enter your email" value={email} onChange={handleInputChange}/>
                <small className="form-text text-muted">Email</small>
            </div>
        </div>
    )
}
