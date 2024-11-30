import "./Date.css";
import { useDate } from "../../context/TimeContexte";
import getJourSemaine from "../../hooks/defJourSemains";
import getMois from "../../hooks/defMois";

const JourDate = () => {
    const { date, calendrier } = useDate();

    //returne chargement si calendrier est null
    if (calendrier === null) {
        return <div>Chargement...</div>;
    }
    const ans = date.slice(0, 4);
    const mois = date.slice(5, 7);
    const jour = date.slice(8, 10);
    const nameJour = getJourSemaine(`${ans}-${mois}-${jour}`);
    const nameMois = getMois(mois);

    return (
        <div className="contenerDate">
            <p className="dateFr">{nameJour} {jour} {nameMois} {ans}</p>
            <p className="dateChiffre">{jour}/{mois}/{ans}</p>
        </div>
    );
};

export default JourDate;