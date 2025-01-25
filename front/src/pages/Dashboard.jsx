import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import CreateUser from '../components/CreateUser';

export default function Dashboard() {
    const { auth } = useContext(AuthContext);
    console.log(auth);
    const [users, setUsers] = useState([]);
    const [articles, setArticles] = useState([]);
    const [activeTable, setActiveTable] = useState('users');

    const [createUser, setCreateUser] = useState(false);
    // const [newUser, setNewUser] = useState({ isActive: true });
    // const [responseUser, setResponseUser] = useState('');


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/user/get');
                const data = await response.data;
                setUsers(data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchUsers();

        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/article/all');
                const data = await response.data;
                setArticles(data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchArticles();
    }, []);

    const renderUsersTable = () => {
        if( users.length === 0 ) {
            return <div className='table'>Nous avons rencontré un problème...</div>;
        };

        return (<div className='table'>
            <table className='tableau users'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Créé le</th>
                        <th>Modifié le</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                    <tr key={user._id}>
                        <td><img src={user.avatar} alt='avatar' className='img' /></td>
                        <td>{user.prenom}</td>
                        <td>{user.email}</td>
                        <td style={{ fontWeight: user.role === 'admin' ? 'bold' : user.role === 'superAdmin' ? 'bold' : 'normal', color: user.role === 'admin' ? 'red' : user.role === 'superAdmin' ? 'purple' : 'black' }}>
                        {user.role}
                        </td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
                        <td>
                            <button>Modifier</button>
                            <button>Archiver</button>
                            <button disabled={['admin', 'superadmin'].includes(user.role?.toLowerCase()) && (auth.role?.toLowerCase() !== 'superadmin' || user.role?.toLowerCase() === 'superadmin')}>Supprimer</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className='new'>
                <button onClick={() => setCreateUser(true)}>Ajoutez-en un</button>
            </div>
        </div>);
    };

    const renderArticlesTable = () => {
        if( articles.length === 0 ) {
            return <div className='table'>
            <p>Aucun article trouvé</p>
            <button>Ajoutez-en un</button>
        </div>;
        };

        return (<div className='table'>
            <table className='tableau articles'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>Créé le</th>
                        <th>Modifié le</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article._id}>
                            <td><img src={article.image} alt='article' /></td>
                            <td>{article.titre}</td>
                            <td>{article.description}</td>
                            <td>{article.prix}</td>
                            <td>{article.createdAt}</td>
                            <td>{article.updatedAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='new'>
                <button>Ajoutez-en un</button>
            </div>
        </div>);
    };





    if( !auth ) {
        return <div className='non-connected'>
            <div className='containerNoCo'>
                <h1>You are not connected</h1>
                <Link to='/connexion' className='button'>Log in</Link>
            </div>
        </div>;
    }
    if( auth && auth.role !== 'admin' && auth.role !== 'superAdmin' ) {
        return <div className='wrong-role'>
            <div className='containerWrRo'>
                <h1>You are not authorized to access this page</h1>
                <Link to='/' className='button'>Return to the main page</Link>
            </div>
        </div>
    }
    return (<div className='dashboard'>
        <div className='containerTitleDa'>
            <img src={auth.avatar} alt='avatar' />
            <div id='ui'>Welcome {auth.prenom}, to the <strong>Dashboard</strong></div>
        </div>
        <div className='tableauDa'>
            <div className='tablesDa'>
                <button className='buttonDa leftBu' onClick={() => setActiveTable('users')}>Users</button>
                <button className='buttonDa' onClick={() => setActiveTable('articles')}>Articles</button>
                <button className='buttonDa rightBu' onClick={() => console.log('click')}>Avis</button>
            </div>
            {activeTable === 'users' && renderUsersTable()}
            {activeTable === 'articles' && renderArticlesTable()}
        </div>
        {createUser && <CreateUser />}
        <Link to='/'>Return to main page</Link>
    </div>);
}
