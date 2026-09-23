/* =====================================================
   MAIN.JS
====================================================== */

/*
    Ce fichier initialise le portfolio.

    Pour garder le code simple :
    - les projets sont dans projets.json;
    - data.js s'occupe de les récupérer;
    - carte-projet.js crée chaque carte.
*/

import { chargerProjets } from "./data.js";
import { creerCarteProjet } from "./composants/carte-projet.js";

const conteneur = document.querySelector("#projets");

chargerProjets()
    .then((projets) => {
        projets.forEach((projet) => {
            conteneur.insertAdjacentHTML(
                "beforeend",
                creerCarteProjet(projet)
            );
        });
    })
    .catch((erreur) => {
        console.error("Les projets n'ont pas pu être chargés.", erreur);
        conteneur.innerHTML =
            "<p>Impossible de charger les projets.</p>";
    });
