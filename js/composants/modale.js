/* =====================================================
   MODALE.JS
====================================================== */


/*
    On récupère les éléments de la fenêtre de zoom.
*/


const modale =
    document.querySelector("#modale");


const imageModale =
    document.querySelector(
        "#modale-image"
    );


const legendeModale =
    document.querySelector(
        "#modale-legende"
    );


const boutonFermer =
    document.querySelector(
        ".modale__fermer"
    );



/* =====================================================
   OUVRIR LA MODALE
====================================================== */


export function ouvrirModale(
    src,
    alt
) {


    /*
        On met l'image sélectionnée dans
        la grande fenêtre.
    */

    imageModale.src =
        src;


    imageModale.alt =
        alt;


    /*
        On affiche un petit texte sous l'image.
    */

    legendeModale.textContent =
        alt;


    /*
        On ajoute la classe qui rend la modale visible.
    */

    modale.classList.add(
        "modale--ouverte"
    );


    /*
        On indique que la fenêtre est maintenant visible.
    */

    modale.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Empêche la page derrière de défiler
        lorsque la modale est ouverte.
    */

    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   FERMER LA MODALE
====================================================== */


export function fermerModale() {


    /*
        On enlève la classe qui rend la fenêtre visible.
    */

    modale.classList.remove(
        "modale--ouverte"
    );


    /*
        On remet son état d'accessibilité.
    */

    modale.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        On enlève l'image actuelle.
    */

    imageModale.src =
        "";


    /*
        On remet le scroll normal.
    */

    document.body.style.overflow =
        "";

}



/* =====================================================
   INITIALISER LA MODALE
====================================================== */


export function initialiserModale() {


    /*
        Cliquer sur X ferme la fenêtre.
    */

    boutonFermer.addEventListener(
        "click",
        fermerModale
    );



    /*
        Cliquer à l'extérieur de l'image
        ferme également la fenêtre.
    */

    modale.addEventListener(
        "click",
        (event) => {


            if (
                event.target ===
                modale
            ) {

                fermerModale();

            }

        }
    );



    /*
        La touche Échap ferme la fenêtre.
    */

    document.addEventListener(
        "keydown",
        (event) => {


            if (

                event.key === "Escape"

                &&

                modale.classList.contains(
                    "modale--ouverte"
                )

            ) {

                fermerModale();

            }

        }
    );

}