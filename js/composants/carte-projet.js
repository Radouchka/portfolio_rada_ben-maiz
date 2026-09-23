/* =====================================================
   CARTE-PROJET.JS
====================================================== */

/*
    Cette fonction prend un projet du JSON
    et construit le HTML de sa carte.
*/

export function creerCarteProjet(projet) {

    const classeFond =
        projet.couleur === "rose"
            ? "carte-projet--violette"
            : "carte-projet--sombre";

    const classeCouleur =
        projet.couleur === "rose"
            ? "carte-projet__legende--rose"
            : "carte-projet__legende--verte";

    const tags = projet.tags
        .map((tag) => `<span>${tag}</span>`)
        .join("");

    const images = projet.images
        .map((image) => `
            <div class="media">
                <img src="${image}" alt="${projet.titre}">
            </div>
        `)
        .join("");

    return `
        <article class="carte-projet ${classeFond}">

            <p class="carte-projet__label">
                ${projet.numero} / PROJET
            </p>

            <h2 class="carte-projet__titre">
                ${projet.titre}
            </h2>

            <div class="media carte-projet__image-principale">
                <img src="${projet.imagePrincipale}" alt="${projet.titre}">
            </div>

            <div class="carte-projet__galerie">
                ${images}
            </div>

            <p class="carte-projet__legende ${classeCouleur}">
                ${projet.legende}
            </p>

            <p class="carte-projet__description">
                ${projet.description}
            </p>

            <div class="carte-projet__tags">
                ${tags}
            </div>

            <a
                class="bouton ${projet.couleur === "rose" ? "bouton--rose" : "bouton--vert"}"
                href="${projet.lien}"
            >
                VOIR LE PROJET
            </a>

        </article>
    `;
}
