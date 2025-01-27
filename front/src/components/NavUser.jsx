import '../styles/NavUser.css';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function NavUser() {
    const { auth, logout } = useContext(AuthContext);
    console.log(auth);

    const handleLogout = () => {
        logout();
    };

    if(!auth) {
        return (
            <div className='nav-user'>
                <Link to='/connexion'>Connexion</Link>
                <Link to='/register'>Inscription</Link>
            </div>
        )
    }
    if(auth && auth.role !== 'admin' && auth.role !== 'superAdmin') {
        return (
            <div className='nav-user'>
                <Link to='/cart' className='link'>🛒 Panier</Link>
                <div className='user'>
                    <img src={auth.avatar} alt={auth.prenom} />
                    <span>{auth.prenom}</span>
                </div>
                <button onClick={handleLogout}>Déconnexion</button>
            </div>
        )
    }
    if(auth && (auth.role === 'admin' || auth.role === 'superAdmin')) {
        return (
            <div className='nav-user'>
                <Link to='/dashboard' className='link'>🚀 Dashboard</Link>
                <div className='user'>
                    <img src={auth.avatar} alt={auth.prenom} />
                    <span>{auth.prenom}</span>
                </div>
                <button onClick={handleLogout}>Déconnexion</button>
            </div>
        )
    }
}
