export default function getMois(moisIndex) {
    const mois = [
        "janvier", "fevrier", "mars", "avril", "mai", "juin",
        "juillet", "aout", "septembre", "octobre", "novembre", "decembre"
    ];
    return mois[moisIndex - 1]; // `moisIndex - 1` car les mois commencent à 1 (janvier = 1)
}