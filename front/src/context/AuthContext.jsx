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
    const [auth, setAuth] = useState(null);

    // Navigate
    const navigate = useNavigate();

    const login = async (dataForm) => {
        setIsLoading(true);

        try {
            //Envoie d'une requête POST à l'API avec les données du formulaire
            const { data, status } = await axios.post('http://localhost:8000/api/user/sign', dataForm);

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

    return (
        <AuthContext.Provider value={{ login, auth, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}