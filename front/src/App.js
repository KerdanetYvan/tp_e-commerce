import './App.css';
import { Route, Routes } from 'react-router-dom';

// Import des différentes pages :
import Home from './pages/Home';
import Detail from './pages/Detail';
import Connexion from './pages/Connexion';
import Register from './pages/Register';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart'; // Import du panier
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    // Définition de toutes les routes
    <Routes>
      <Route index element={<Home />} /> {/* Définition de la page d'accueil sur la page Home */}
      <Route path='/connexion' element={<Connexion />} /> {/* Définition de la page de connexion sur la page Connexion */}
      <Route path="/register" element={<Register />} /> {/* Définition de la page d'inscription sur la page Register */}
      <Route path='/verify/:token' element={<Verify />} /> {/* Définition de la page de vérification sur la page Verify */}
      <Route path='/dashboard' element={<Dashboard />} /> {/* Définition de la page de dashboard sur la page Dashboard */}
      <Route path='/detail/:id' element={<Detail />} /> {/* Définition de la page de détail sur la page Detail */}
      <Route path="/cart" element={<Cart />} /> {/* Définition de la page panier sur la page Cart */}
      <Route path="/terms" element={<Terms />} /> {/* Définition de la page des conditions générales sur la page Terms */}
      <Route path="/privacy" element={<Privacy />} /> {/* Définition de la page de politique de confidentialité sur la page Privacy */}
    </Routes>
  );
}

export default App;
