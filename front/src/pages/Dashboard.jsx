import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import CreateUser from '../components/CreateUser';
import ModifieUser from '../components/ModifieUser';
import Layout from '../components/Layout';

export default function Dashboard() {
    const { auth } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [articles, setArticles] = useState([]);
    const [activeTable, setActiveTable] = useState('users');

    const [createUser, setCreateUser] = useState(false);
    const [modifieUser, setModifieUser] = useState(false);
    const [id, setId] = useState('');


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/user/get', {
                    withCredentials: true
                });
                const data = await response.data;
                setUsers(data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchUsers();

        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/article/all', {
                    withCredentials: true
                });
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
                        <td>{user.prenom}{!user.isActive && '😴'}</td>
                        <td style={{ color: user.isVerified ? 'black' : 'grey' }}>{!user.isVerified && '❔ '}{user.email}</td>
                        <td style={{ fontWeight: user.role === 'admin' ? 'bold' : user.role === 'superAdmin' ? 'bold' : 'normal', color: user.role === 'admin' ? 'red' : user.role === 'superAdmin' ? 'purple' : 'black' }}>
                        {user.role}
                        </td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
                        <td>
                            <button onClick={() => {
                                setModifieUser(true);
                                setId(user._id);
                            }}>Informations</button>
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
                        <th>Brand</th>
                        <th>Prix</th>
                        <th>Category</th>
                        <th>Nb Stock</th>
                        <th>Nb avis</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                    <tr key={article._id}>
                        <td><img src={article.picture[0]} alt='article' className='img' /></td>
                        <td>{article.name}</td>
                        <td>{article.content.length > 50 ? `${article.content.substring(0, 50)}...` : article.content}</td>
                        <td>{article.brand}</td>
                        <td>{article.price}</td>
                        <td>{article.category}</td>
                        <td>{article.stock}</td>
                        <td>{article.avis.length > 0 ? article.avis.length : 0}</td>
                        <td>
                            <button>Informations</button>
                            <button>Supprimer</button>
                        </td>
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
        return (<Layout><div className='non-connected'>
            <div className='containerNoCo'>
                <h1>You are not connected</h1>
                <Link to='/connexion' className='button'>Log in</Link>
            </div>
        </div></Layout>);
    }
    if( auth && auth.role !== 'admin' && auth.role !== 'superAdmin' ) {
        return <Layout><div className='wrong-role'>
            <div className='containerWrRo'>
                <h1>You are not authorized to access this page</h1>
                <Link to='/' className='button'>Return to the main page</Link>
            </div>
        </div></Layout>;
    }
    return (<Layout><div className='dashboard'>
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
        {createUser && <CreateUser setCreateUser={setCreateUser} />}
        {modifieUser && <ModifieUser id={id} setModifieUser={setModifieUser} />}
        <Link to='/'>Return to main page</Link>
    </div></Layout>);
}
