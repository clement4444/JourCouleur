export default function getMois(moisIndex) {
    const mois = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    return mois[moisIndex - 1]; // `moisIndex - 1` car les mois commencent à 1 (janvier = 1)
}