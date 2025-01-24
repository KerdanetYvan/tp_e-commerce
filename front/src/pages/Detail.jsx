import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Pour récupérer les paramètres de l'URL
import Layout from '../components/Layout'; // Import du Layout
import '../styles/Detail.css'; 

const products = [
  {
    id: '1',
    name: 'Fondant Chocolat',
    description: 'Un délicieux fondant au chocolat préparé avec du chocolat noir de qualité supérieure et un cœur coulant irrésistible.',
    price: '29,99 €',
    image: '/img/fondant.webp',
  },
  {
    id: '2',
    name: 'Tarte Fraise & Kiwi',
    description: 'Une tarte fruitée et colorée garnie de fraises fraîches et de rondelles de kiwi juteux, posées sur une crème pâtissière légère et une base croustillante de pâte sablée.',
    price: '39,99 €',
    image: '/img/tarte-fraise.webp',
  },
  {
    id: '3',
    name: 'Cupcake Ganache Chocolat',
    description: 'Un cupcake moelleux recouvert d\'une ganache au chocolat riche et onctueuse, garni d\'un soupçon de copeaux de chocolat noir pour une touche supplémentaire de gourmandise.',
    price: '19,99 €',
    image: '/img/cupcake.webp',
  },
  {
    id: '4',
    name: 'Tuiles aux Amandes',
    description: 'De fines tuiles croquantes aux amandes grillées, légèrement dorées au four pour une saveur délicate et raffinée.',
    price: '14,99 €',
    image: '/img/tuiles.webp',
  },
  {
    id: '5',
    name: 'Cookies Pistache & Framboise',
    description: 'Des cookies moelleux et gourmands à la pistache avec des éclats de framboise séchée pour un équilibre parfait entre douceur et acidité.',
    price: '19,99 €',
    image: '/img/cookies.webp',
  },
  {
    id: '6',
    name: 'Tarte aux Abricots',
    description: 'Une tarte ensoleillée garnie d\'abricots mûrs et juteux, déposés sur une crème d\'amande délicatement parfumée.',
    price: '29,99 €',
    image: '/img/tarte-abricot.webp',
  },
];

export default function Detail() {
  const { id } = useParams(); // Récupère l'ID du produit depuis l'URL
  const product = products.find((prod) => prod.id === id); // Trouve le produit correspondant

  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]); // Liste des avis
  const [review, setReview] = useState(''); // Avis en cours de rédaction
  const [name, setName] = useState(''); // Nom de l'utilisateur
  const [rating, setRating] = useState(0); // Note de l'avis (1 à 5)

  if (!product) {
    return (
      <Layout>
        <div className="detail">
          <h2>Produit non trouvé</h2>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    alert(`Ajouté ${quantity} x ${product.name} au panier.`);
  };

  const handleSubmitReview = () => {
    if (review.trim() && name.trim() && rating > 0) {
      setReviews([...reviews, { name, review, rating }]);
      setReview('');
      setName('');
      setRating(0);
    } else {
      alert('Veuillez remplir tous les champs et donner une note.');
    }
  };

  return (
    <Layout>
      <div className="detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>Prix : {product.price}</h3>

        {/* Ajouter au panier */}
        <div className="add-to-cart">
          <label>
            Quantité :
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </label>
          <button onClick={handleAddToCart} className="btn-primary">
            Ajouter au panier
          </button>
        </div>
      </div>
      <div className="detail">
        {/* Rédiger un avis */}
        <div className="write-review">
          <h2>Rédiger un avis</h2>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="review-input"
          />
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Partagez votre avis sur ce produit..."
          />
          <button onClick={handleSubmitReview} className="btn-primary">
            Soumettre
          </button>
        </div>
      </div>
      <div className="detail">
        {/* Lire les avis */}
        <div className="reviews">
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((rev, index) => (
                <li key={index}>
                  <strong>{rev.name}</strong> - 
                  <span className="review-rating">
                    {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                  </span>
                  <p>{rev.review}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun avis pour le moment. Soyez le premier à en rédiger un !</p>
          )}
        </div>
      
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </Layout>
  );
}
