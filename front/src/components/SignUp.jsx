// useContext (pour accéder au contexte d'authentification)
import React, { useState, useContext } from 'react';

// On Importe le contexte d'authentificatio AuthContext
import { AuthContext } from '../context/AuthContext';

export default function SignUp() {
    const [user, setUser] = useState({});
    const { login } = useContext(AuthContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({...prevUser, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(user);
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form-area mail'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder='Email'
                    name="email"
                    id="email"
                    onChange={handleChange}
                />
            </div>
            <div className='form-area password'>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='Password'
                    name="password"
                    id="password"
                    onChange={handleChange}
                />
            </div>
            <button>Log In</button>
        </form>
    )
}