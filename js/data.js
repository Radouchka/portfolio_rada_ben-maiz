/* =====================================================
   DATA.JS
====================================================== */

/*
    Cette fonction récupère le contenu du fichier JSON.

    Le JSON permet de modifier les projets sans
    devoir réécrire toute la structure HTML.
*/

export async function chargerProjets() {
    const reponse = await fetch("./data/projets.json");

    if (!reponse.ok) {
        throw new Error("Erreur pendant le chargement du JSON.");
    }

    return await reponse.json();
}