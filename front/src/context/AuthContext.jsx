import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Pour communiquer avec notre API
import axios from "axios";

// Créez un context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Etat pour suivre l'authentification
    const [isLoading, setIsLoading] = useState(false);
    
    // Etat pour stocker les infos de l'user connecté
    const [auth, setAuth] = useState(() => {
        const storedAuth = localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : null;
    });

    // Navigate
    const navigate = useNavigate();

    const login = async (dataForm) => {
        setIsLoading(true);

        try {
            //Envoie d'une requête POST à l'API avec les données du formulaire
            const { data, status } = await axios.post('http://localhost:8000/api/user/sign', dataForm);
            console.log(data);
            console.log(status);

            // Si la requête est un succès (status 200)
            if( status === 200 ){
                // Sauvegarde des données utilisateur dans le localStorage
                localStorage.setItem('auth', JSON.stringify(data));

                // Mise à jour du state auth
                setAuth(data);

                // Redirection vers la page d'accueil
                navigate('/');

                // Désactive le chargement comme l'authentification est terminée
                setIsLoading(false);
            }
        } catch(e) {
            console.log(e);
            setIsLoading(false);
        }
    }

    const logout = () => {
        // Supprime les données utilisateur du localStorage
        localStorage.removeItem('auth');

        // Mise à jour du state auth
        setAuth(null);
    }

    return (
        <AuthContext.Provider value={{ login, logout, auth, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}