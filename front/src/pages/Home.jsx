import React from 'react';
import { Link } from 'react-router-dom'; // Pour créer des liens entre les pages
import Layout from '../components/Layout';
import '../styles/Home.css'; // Fichier CSS pour le style

export default function Home() {
  return (
    <Layout>
      <div className="home">
        {/*Products */}
        <section  className="products">
          <h2>Nos Produits</h2>
          <div id="products" className="products-grid">
            <div className="product-card">
              <div className="image-container">
                <img src="../img/fondant.webp" alt="Produit 1" />
                <div className="product-info">
                  <Link to="/detail/1" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="image-container">
                <img src="../img/tarte-fraise.webp" alt="Produit 2" />
                <div className="product-info">
                  <Link to="/detail/2" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="image-container">
                <img src="../img/cupcake.webp" alt="Produit 3" />
                <div className="product-info">
                  <Link to="/detail/3" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="image-container">
                <img src="../img/tuiles.webp" alt="Produit 4" />
                <div className="product-info">
                  <Link to="/detail/4" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="image-container">
                <img src="../img/cookies.webp" alt="Produit 5" />
                <div className="product-info">
                  <Link to="/detail/5" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="image-container">
                <img src="../img/tarte-abricot.webp" alt="Produit 6" />
                <div className="product-info">
                  <Link to="/detail/6" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Advice Section */}
        <section className="advice">
          <h2>Votre avis compte</h2>
          <div className="advice-grid">
            <div className="advice-card">
              <p>"Les gâteaux sont mauvais, comme ton code "</p>
              <h4>- Florent</h4>
            </div>
            <div className="advice-card">
              <p>"J'avoue y'a mieux, 6/10."</p>
              <h4>- Célia</h4>
            </div>
            <div className="advice-card">
              <p>"Les pires gâteaux que j'ai mangé de ma vie entière, A FUIR !!!!"</p>
              <h4>- Noussaïba</h4>
            </div>
          </div>
        </section>

      </div>
    </Layout>
    
  );
}