import "./Tache.css";
import { useDate } from "../../context/TimeContexte";
import getMois from "../../hooks/defMois";

const Tache = () => {
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

    const clement = {
        preparation: {
            vert: "",
            rouge: "mettre couvert",
            bleu: "preparer petit dej",
        },
        Tache: {
            vert: "nettoyer table + aspirateur",
            rouge: "laver la velle a la main",
            bleu: "lave vaisselle",
        }
    };
    const celeste = {
        preparation: {
            vert: "preparer petit dej",
            rouge: "",
            bleu: "laver la velle a la main",
        },
        Tache: {
            vert: "lave vaisselle",
            rouge: "nettoyer table + aspirateur",
            bleu: "mettre couvert",
        }
    };
    const timothe = {
        preparation: {
            vert: "mettre couvert",
            rouge: "preparer petit dej",
            bleu: "",
        },
        Tache: {
            vert: "laver la velle a la main",
            rouge: "lave vaisselle",
            bleu: "nettoyer table + aspirateur",
        }
    };



    return (
        <div className="tableux">
            {/* type */}
            <div className="tableuxLigne">
                <p></p>
                <p>preparation</p>
                <p>tache</p>
            </div>
            {/* timothée */}
            <div className="tableuxLigne">
                <p>timothée :</p>
                <p>{timothe.preparation[jourCouleur]}</p>
                <p>{timothe.Tache[jourCouleur]}</p>
            </div>
            {/* celeste */}
            <div className="tableuxLigne">
                <p>celeste :</p>
                <p>{celeste.preparation[jourCouleur]}</p>
                <p>{celeste.Tache[jourCouleur]}</p>
            </div>
            {/* clement */}
            <div className="tableuxLigne">
                <p>clement :</p>
                <p>{clement.preparation[jourCouleur]}</p>
                <p>{clement.Tache[jourCouleur]}</p>
            </div>
        </div>
    );
};

export default Tache;