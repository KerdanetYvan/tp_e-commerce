import './App.css';
import { Route, Routes } from 'react-router-dom';

// Import des différentes pages :
import Home from './pages/Home';
import Connexion from './pages/Connexion';

function App() {
  return (
    // Définition de toutes les routes
    <Routes>
      <Route index element={<Home />} /> {/* Définition de la page d'accueil sur la page Home */}
      <Route path='/connexion' element={<Connexion />} /> {/* Définition de la page de connexion sur la page Connexion */}
    </Routes>
  );
}

export default App;
