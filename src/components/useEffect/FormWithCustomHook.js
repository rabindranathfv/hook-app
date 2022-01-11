import React from 'react';
import { useForm } from '../../hooks/useForm';

import './effect.css';

export const FormWithCustomHook = () => {
    
    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1> FormWithCustomHook </h1>
            <hr />

            <div className="form-group">
                <label htmlFor=""></label>
                <input type="text"
                className="form-control" name="name" id="" aria-describedby="name-form" placeholder="enter your name" value={name} onChange={handleInputChange}/>
                <small className="form-text text-muted">Name</small>

                <label htmlFor=""></label>
                <input type="email"
                className="form-control" name="email" id="" aria-describedby="email-form" placeholder="enter your email" value={email} onChange={handleInputChange}/>
                <small className="form-text text-muted">Email</small>

                <label htmlFor=""></label>
                <input type="password"
                className="form-control" name="password" id="" aria-describedby="password-form" placeholder="enter your password" value={password} onChange={handleInputChange}/>
                <small className="form-text text-muted">password</small>
            </div>

            <button type="submit" className="btn btn-outline-primary"> Submit</button>
        </form>
    )
}
