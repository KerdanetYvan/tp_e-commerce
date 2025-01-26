import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? 'scrolled' : ''}`}>
      <div className="container">
        <button className="burger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Nos Produits</Link></li>
          </ul>
        </nav>
        <div className="logo">
          <Link to="/"><img src="../img/logo.png" alt="Logo" /></Link>
        </div>
        <div className="actions">
          <Link to="/cart" className="icon">🛒</Link>
          <Link to="/connexion" className="icon">🔑</Link>
        </div>
      </div>
    </header>
  );
}
