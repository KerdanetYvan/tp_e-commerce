import './App.css';
import { Route, Routes } from 'react-router-dom';

// Import des différentes pages :
import Home from './pages/Home';

function App() {
  return (
    // Définition de toutes les routes
    <Routes>
      <Route index element={<Home />} /> {/* Définition de la page d'accueil sur la page Home */}
    </Routes>
  );
}

export default App;
