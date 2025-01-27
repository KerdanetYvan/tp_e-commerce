import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DeleteUser({ id, setDeleteUser }) {
    const [user, setUser] = useState({});

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
    }, [id]);

    const handleSubmitDel = async (event) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/user/delete/${id}`);
            console.log(response);
            setDeleteUser(false);
        } catch(error) {
            console.log(error);
        };
    };

    const handleSubmitAct = async (event) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/user/reactivate/${id}`);
            console.log(response);
            setDeleteUser(false);
        } catch(error) {
            console.log(error);
        };
    };

    return (
        <div>
            <h1>{user.isActive ? 'Archiver' : 'Re-activer'} cet utilisateur ?</h1>
            <div className='delete-user'>
                <img src={user.avatar} alt={user.prenom} />
                <h2>{user.prenom}</h2>
            </div>
            <form onSubmit={user.isActive ? handleSubmitDel : handleSubmitAct}>
                <button className='green-button' type='submit'>{user.isActive ? 'Archiver' : 'Re-activer'}</button>
                <button className='red-button' onClick={() => setDeleteUser(false)}>Annuler</button>
            </form>
        </div>
    )
}
