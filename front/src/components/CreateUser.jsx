import React, { useState } from 'react';
import axios from 'axios';

export default function CreateUser({ setCreateUser }) {
    const [newUser, setNewUser] = useState({ isActive: true, ifVerified: true });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser(user => ({...user, [name]: value}));
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:8000/api/user/signup', newUser);
            setCreateUser(false);
        } catch(error) {
            console.log(error);
        }
    };

    return (<div className='fast-create-user'>
        <form onSubmit={handleSubmit}>
            <h1 className='title'>Créer un utilisateur</h1>
            <div className='form-area'>
                <label htmlFor='firstname'>Prénom</label>
                <input
                    type='text'
                    name='prenom'
                    id='firstname'
                    onChange={handleChange}
                    placeholder='Prénom'
                    required
                />
            </div>
            <div className='form-area'>
                <label htmlFor='avatar'>Avatar</label>
                <input
                    type='text'
                    name='avatar'
                    id='avatar'
                    onChange={handleChange}
                    placeholder="URL de l'avatar"
                    required
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
                    required
                />
            </div>
            <div className='form-area'>
                <label htmlFor='password'>Mot de passe</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    onChange={handleChange}
                    placeholder='Votre mot de passe'
                    required
                />
            </div>
            <div className='form-area role-area'>
                <label htmlFor='role'>Role</label>
                <select
                    name='role'
                    id='role'
                    onChange={handleChange}
                >
                    <option value='user'>User</option>
                    <option value='admin'>Admin</option>
                    <option value='superAdmin'>Super Admin</option>
                </select>
            </div>
            <button type='submit'>Créer</button>
        </form>
    </div>);
}
