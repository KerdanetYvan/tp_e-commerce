import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [user, setUser] = useState({ isActive: true });
    const [response, setResponse] = useState('');
    const [isGood, setIsGood] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(user => ({...user, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/user/signup', user);
            setResponse('Email de vérification envoyé, consultez votre boîte mail');
            setIsGood(true);
        } catch(e) {
            console.log(e.message);
            setResponse('Erreur lors de l\'envoi du formulaire');
            setIsGood(false);
        }
    };

    return (<div className='register'>
        <form onSubmit={handleSubmit} className='form containerRe'>
            <h1 className='titleRe'>Register</h1>
            <div className='form-area'>
                <label htmlFor='firstname'>Firstname</label>
                <input
                    type='text'
                    name='prenom'
                    id='firstname'
                    onChange={handleChange}
                    placeholder='Firstname'
                />
            </div>
            <div className='form-area'>
                <label htmlFor='avatar'>Avatar</label>
                <input
                    type='text'
                    name='avatar'
                    id='avatar'
                    onChange={handleChange}
                    placeholder='Avatar URL'
                />
            </div>
            <div className='form-area'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    placeholder='Votre email'
                />
            </div>
            <div className='form-area'>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                id='password'
                onChange={handleChange}
                placeholder='Votre mot de passe'
            />
            </div>
            <button>Register</button>
            <Link to='/connexion' className='linkNotRe'>Already registered ?</Link>
            <p style={{ color: isGood ? 'green' : 'red'}}>{response}</p>
        </form>
    </div>)
}
