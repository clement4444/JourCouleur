export default function getJourSemaine(dateString) {
    // Créer un objet Date à partir de la chaîne de date
    const date = new Date(dateString);

    // Liste des jours de la semaine
    const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    // Obtenir le jour de la semaine
    const jourIndex = date.getDay(); // Renvoie un entier entre 0 (dimanche) et 6 (samedi)

    // Retourner le nom du jour correspondant
    return jours[jourIndex];
}