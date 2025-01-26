import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Chargement du panier depuis localStorage au démarrage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart); // Mettre à jour l'état avec le contenu du localStorage
  }, []);

  // Calcul du prix total du panier
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace(' €', '').replace(',', '.')) * item.quantity, 0);

  // Supprimer un article du panier
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sauvegarder le panier mis à jour dans le localStorage
  };

  // Modifier la quantité d'un article
  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sauvegarder le panier mis à jour dans le localStorage
  };

  return (
    <Layout>
      <div className="cart">
        <h1>Votre Panier 🛒</h1>
        {cart.length === 0 ? (
            <div>
              <p>Votre panier est vide. </p>
              <Link to="/" className="btn-primary">Ajouter des produits</Link>
            </div>
        ) : (
          <>
            <ul>
              {cart.map(item => {
                // Convertir le prix en nombre et formater avec 2 décimales
                const formattedPrice = parseFloat(item.price.replace(' €', '').replace(',', '.')).toFixed(2);
                
                return (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h2>{item.name}</h2>
                      <div className="cart-item-actions">
                        <span>Prix : {formattedPrice} €</span>
                        <label>
                          Quantité :
                          <select
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                          >
                            {[...Array(10).keys()].map((num) => (
                              <option key={num + 1} value={num + 1}>
                                {num + 1}
                              </option>
                            ))}
                          </select>
                        </label>
                        <button onClick={() => handleRemoveItem(item.id)} className="btn-danger">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="total-price">
              <h3>Total: {totalPrice.toFixed(2)} €</h3>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
