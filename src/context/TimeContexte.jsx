import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
const DateContext = createContext();

// Exporter le contexte pour l'utiliser
export const useDate = () => React.useContext(DateContext);

// Créer le provider
export const DateProvider = ({ children }) => {
    const [date, setDate] = useState(null); // Pour stocker les données
    const [loadingDate, setLoadingDate] = useState(true); // Pour gérer le chargement
    const [errorDate, setErrorDate] = useState(null); // Pour gérer les erreurs

    const [calendrier, setCalendrier] = useState(null); // Pour stocker les données
    const [loadingCalendrier, setLoadingCalendrier] = useState(true); // Pour gérer le chargement
    const [errorCalendrier, setErrorCalendrier] = useState(null); // Pour gérer les erreurs

    useEffect(() => {
        // fetche la date actuelle
        const fetchDate = async () => {
            try {
                const response = await fetch('https://api-univers.vercel.app/time');
                if (!response.ok) {
                    throw new Error(`Erreur : ${response.status}`);
                }
                const result = await response.json();
                setDate(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoadingDate(false);
            }
        };

        // fetche le calendrier
        const fetchCalendrier = async () => {
            try {
                const response = await fetch('https://api-univers.vercel.app/calendrier');
                if (!response.ok) {
                    throw new Error(`Erreur : ${response.status}`);
                }
                const result = await response.json();
                setCalendrier(result);
            } catch (err) {
                setErrorCalendrier(err.message);
            } finally {
                setLoadingCalendrier(false);
            }
        };

        fetchDate();
        fetchCalendrier();
    }, []); // Exécuté une seule fois au montage

    return (
        <DateContext.Provider value={{ date, loadingDate, errorDate, calendrier, loadingCalendrier, errorCalendrier }}>
            {children}
        </DateContext.Provider>
    );
};
