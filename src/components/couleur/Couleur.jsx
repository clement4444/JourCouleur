import "./Couleur.css";
import { useDate } from "../../context/TimeContexte";
import getMois from "../../hooks/defMois";

const Couleur = () => {
    const { date, calendrier } = useDate();

    //returne chargement si calendrier est null
    if (calendrier === null) {
        return <div>Chargement...</div>;
    }
    const ans = date.slice(0, 4);
    const mois = date.slice(5, 7);
    const jour = parseInt(date.slice(8, 10));
    const nameMois = getMois(mois);

    const jourCouleur = calendrier[ans][nameMois][jour];

    return (
        <div className={`couleur ${jourCouleur}`} />
    );
};

export default Couleur;