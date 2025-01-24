import React from 'react';
import '../styles/Home.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <p>&copy; 2025 MoonInTheCake. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="/terms">Conditions d'utilisation</a>
          <a href="/privacy">Politique de confidentialité</a>
        </div>
      </div>
      <img src="../img/footer.webp" alt="Background" className="footer-background" />
    </footer>
  );
}
