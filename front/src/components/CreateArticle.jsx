import React, { useState } from 'react';
import axios from 'axios';

export default function CreateArticle({ setCreateArticle }) {
    const [newArticle, setNewArticle] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewArticle(article => ({...article, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/article/add', newArticle);
            setCreateArticle(false);
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Créer un nouvel article</h1>
                <div>
                    <label htmlFor='title'>Titre</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        onChange={handleChange}
                        placeholder='Titre'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        name='content'
                        id='content'
                        onChange={handleChange}
                        placeholder='Description'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='category'>Catégorie</label>
                    <input
                        type='text'
                        name='category'
                        id='category'
                        onChange={handleChange}
                        placeholder='Catégorie'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='brand'>Marque</label>
                    <input
                        type='text'
                        name='brand'
                        id='brand'
                        onChange={handleChange}
                        placeholder='Marque'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='price'>Prix</label>
                    <input
                        type='number'
                        name='price'
                        id='price'
                        onChange={handleChange}
                        placeholder='Prix'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='stock'>Stock</label>
                    <input
                        type='number'
                        name='stock'
                        id='stock'
                        onChange={handleChange}
                        placeholder='Stock'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='picture'>Image</label>
                    <input
                        type='text'
                        name='img'
                        id='img'
                        onChange={handleChange}
                        placeholder="URL de l'image"
                        required
                    />
                    <input
                        type='text'
                        name='img1'
                        id='img1'
                        onChange={handleChange}
                        placeholder="URL de l'image"
                    />
                    <input
                        type='text'
                        name='img2'
                        id='img2'
                        onChange={handleChange}
                        placeholder="URL de l'image"
                    />
                    <input
                        type='text'
                        name='img3'
                        id='img3'
                        onChange={handleChange}
                        placeholder="URL de l'image"
                    />
                    <input
                        type='text'
                        name='img4'
                        id='img4'
                        onChange={handleChange}
                        placeholder="URL de l'image"
                    />
                </div>
                <button type='submit'>Créer</button>
            </form>
        </div>
    )
}
