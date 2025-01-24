import './App.css';
import { Route, Routes } from 'react-router-dom';

// Import des différentes pages :
import Home from './pages/Home';
import Detail from './pages/Detail';
import Connexion from './pages/Connexion';
import Register from './pages/Register';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // Définition de toutes les routes
    <Routes>
      <Route index element={<Home />} /> {/* Définition de la page d'accueil sur la page Home */}
      <Route path='/connexion' element={<Connexion />} /> {/* Définition de la page de connexion sur la page Connexion */}
      <Route path="/register" element={<Register />} /> {/* Définition de la page d'inscription sur la page Register */}
      <Route path='/verify/:token' element={<Verify />} /> {/* Définition de la page de vérification sur la page Verify */}
    </Routes>
  );
}

export default App;



