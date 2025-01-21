import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [user, setUser] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(user => ({...user, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/user/signup', user);
        } catch(e) {
            console.log(e.message);
        }
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor='firstname'>Firstname</label>
            <input
                type='text'
                name='firstname'
                id='firstname'
                onChange={handleChange}
                placeholder='Firstname'
            />
            <label htmlFor='nom'>Lastname</label>
            <input
                type='text'
                name='lastname'
                id='lastname'
                onChange={handleChange}
                placeholder='Lastname'
            />
            <label htmlFor='avatar'>Avatar</label>
            <input
                type='text'
                name='avatar'
                id='avatar'
                onChange={handleChange}
                placeholder='Avatar URL'
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                id='email'
                onChange={handleChange}
                placeholder='Votre email'
            />
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                id='password'
                onChange={handleChange}
                placeholder='Votre mot de passe'
            />
        </form>
        <Link to='/connexion'>Already registered ?</Link>
    </>)
}
