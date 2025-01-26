import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/Global.css';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="privacy-container">
        <h1>Politique de Confidentialité</h1>
        <p>
          Bienvenue sur <strong>Fou de Pâtisserie</strong>. Nous prenons la protection de vos données personnelles très au sérieux. 
          Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
        </p>

        <h2>1. Informations collectées</h2>
        <p>Nous collectons les informations suivantes :</p>
        <ul>
          <li>Adresse e-mail</li>
          <li>Avatar (image de profil)</li>
          <li>Pseudonyme</li>
        </ul>

        <h2>2. Utilisation des données</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Créer et gérer votre compte utilisateur</li>
          <li>Permettre la rédaction et la gestion des avis</li>
          <li>Améliorer votre expérience sur le site</li>
        </ul>

        <h2>3. Partage des données</h2>
        <p>
          Nous ne partageons vos données personnelles avec aucun tiers. Toutes vos informations restent strictement confidentielles.
        </p>

        <h2>4. Cookies</h2>
        <p>Notre site <strong>n’utilise pas</strong> de cookies ni d’autres outils de suivi.</p>

        <h2>5. Sécurité</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès
          non autorisé, perte ou divulgation.
        </p>

        <h2>6. Vos droits</h2>
        <p>Vous avez le droit de :</p>
        <ul>
          <li>Accéder à vos données</li>
          <li>Les modifier ou les supprimer</li>
          <li>Demander des informations sur l’utilisation de vos données</li>
        </ul>
        <p>
          Pour exercer vos droits, vous pouvez nous contacter via les options disponibles dans votre compte.
        </p>

        <h2>7. Changements de la politique</h2>
        <p>
          Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Les modifications seront
          publiées sur cette page.
        </p>

        <p>
          En utilisant notre site, vous acceptez cette politique de confidentialité. Si vous avez des questions, n’hésitez pas à nous
          contacter. 
        </p>

        <div className="go-home">
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}
