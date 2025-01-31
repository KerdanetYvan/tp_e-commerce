import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function ModifieUser({ id, setModifieUser }) {
    const { auth, logout, login } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [modifie, setModifie] = useState(false);
    const [modifiedUser, setModifiedUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/api/user/get/${id}`);
                setUser(data);
                
            } catch(error) {
                console.log(error);
            };
        };
        fetchUser();
    }, [id, logout]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setModifiedUser(user => ({...user, [name]: value}));
    };

    const handleSubmit = async (event) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/user/update/${id}`, modifiedUser);
            console.log(response);
            setModifie(false);
            if(auth.id === id){
                logout();
                login(modifiedUser);
            }
        } catch(error) {
            console.log(error);
        };
    };

    return (
        <div className='modifie-user'>
            <div className='containerMod'>
                <h1>Informations utilisateur</h1>
                <div className='buttons'>
                    <button onClick={() => {
                        setModifie(!modifie);
                        }}>Modifier</button>
                    <button onClick={() => setModifieUser(false)}>Fermer</button>
                </div>
                <form className='form'>
                    <div className='form-area'>
                        <label htmlFor='firstname'>Prénom</label>
                        <input
                            type='text'
                            name='prenom'
                            id='firstname'
                            onChange={handleChange}
                            placeholder={user.prenom}
                            disabled={!modifie}
                            />
                    </div>
                    <div className='form-area'>
                        <label htmlFor='avatar'>Avatar</label>
                        <input
                            type='text'
                            name='avatar'
                            id='avatar'
                            onChange={handleChange}
                            placeholder={user.avatar}
                            disabled={!modifie}
                            />
                    </div>
                    <div className='form-area'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            onChange={handleChange}
                            placeholder={user.email}
                            disabled={!modifie}
                            />
                    </div>
                    <div className='form-area role-area'>
                        <label htmlFor='role'>Role</label>
                        <select
                            name='role'
                            id='role'
                            placeholder={user.role}
                            onChange={handleChange}
                            disabled={!modifie}
                        >
                            <option value='user'>User</option>
                            <option value='admin'>Admin</option>
                            <option value='superAdmin'>Super Admin</option>
                        </select>
                    </div>
                    <button type='submit' onClick={handleSubmit}>Valider</button>
                </form>
            </div>
        </div>
    )
}
