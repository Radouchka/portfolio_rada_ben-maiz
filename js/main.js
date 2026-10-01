/* =====================================================
   MAIN.JS
====================================================== */

/*
   Anime.js est chargé directement depuis son CDN.
   Pas besoin de modifier le HTML pour charger Anime.js.
*/
import { animate } from "https://cdn.jsdelivr.net/npm/animejs/+esm";


import { chargerProjets } from "./data.js";

import { creerCarteProjet } from "./composants/carte-projet.js";

import {
    initialiserModale,
    ouvrirModale
} from "./composants/modale.js";


/* =====================================================
   VARIABLES
====================================================== */

const conteneurProjets =
    document.querySelector("#projets");

let projets = [];


/* =====================================================
   CHARGEMENT DES PROJETS
====================================================== */

chargerProjets()
    .then((donnees) => {

        projets = donnees;


        projets.forEach((projet) => {

            conteneurProjets.insertAdjacentHTML(
                "beforeend",
                creerCarteProjet(projet)
            );

        });


        /* Le deuxième projet reçoit cet ID */
        const cartesProjets =
            document.querySelectorAll(
                ".carte-projet"
            );


        if (cartesProjets[1]) {

            cartesProjets[1].id =
                "deuxieme-projet";

        }


        initialiserCarousels();

    })

    .catch((erreur) => {

        console.error(erreur);

        conteneurProjets.innerHTML =
            "<p>Impossible de charger les projets.</p>";

    });


/* =====================================================
   CAROUSELS
====================================================== */

function initialiserCarousels() {

    const carousels =
        document.querySelectorAll(
            ".carte-projet__carousel"
        );


    carousels.forEach((carousel) => {

        /* Récupère les images du projet */
        const images =
            JSON.parse(
                carousel.dataset.images
            );


        /* Image actuelle */
        let index = 0;


        /* Éléments du carousel */

        const image =
            carousel.querySelector(
                ".carte-projet__slide img"
            );


        const compteur =
            carousel.querySelector(
                ".carousel__compteur"
            );


        const boutonPrecedent =
            carousel.querySelector(
                ".carousel__fleche--precedente"
            );


        const boutonSuivant =
            carousel.querySelector(
                ".carousel__fleche--suivante"
            );


        const boutonZoom =
            carousel.querySelector(
                ".carousel__zoom"
            );


        /* ---------------------------------------------
           AFFICHER UNE IMAGE
        ---------------------------------------------- */

        function afficherImage() {

            image.src =
                images[index];


            image.alt =
                `Image ${index + 1} du projet`;


            compteur.textContent =
                `${index + 1} / ${images.length}`;

        }


        /* ---------------------------------------------
           BOUTON PRÉCÉDENT
        ---------------------------------------------- */

        boutonPrecedent.addEventListener(
            "click",
            () => {

                index--;


                if (index < 0) {

                    index =
                        images.length - 1;

                }


                afficherImage();

            }
        );


        /* ---------------------------------------------
           BOUTON SUIVANT
        ---------------------------------------------- */

        boutonSuivant.addEventListener(
            "click",
            () => {

                index++;


                if (
                    index >= images.length
                ) {

                    index = 0;

                }


                afficherImage();

            }
        );


        /* ---------------------------------------------
           BOUTON ZOOM
        ---------------------------------------------- */

        boutonZoom.addEventListener(
            "click",
            () => {

                ouvrirModale(
                    image.src,
                    image.alt
                );

            }
        );


        /* Affiche la première image */
        afficherImage();

    });

}


/* =====================================================
   TEXTES DÉFILANTS ANIME.JS
====================================================== */

function initialiserTextesDefilants() {

    /*
       Sélectionne tous les bandeaux
       qui doivent avoir un texte animé.
    */

    const bandes =
        document.querySelectorAll(
            ".hero__bande--verte, " +
            ".hero__bande--violette, " +
            ".bande-rose, " +
            ".bande-verte"
        );


    bandes.forEach((bande) => {

        /* ---------------------------------------------
           RÉCUPÉRER LE TEXTE ORIGINAL
        ---------------------------------------------- */

        const texte =
            bande.textContent.trim();


        /* ---------------------------------------------
           VIDER LE BANDEAU
        ---------------------------------------------- */

        bande.innerHTML = "";


        /* ---------------------------------------------
           CRÉER LE SPAN
        ---------------------------------------------- */

        const texteDefilant =
            document.createElement("span");


        texteDefilant.classList.add(
            "texte-defilant"
        );


        texteDefilant.textContent =
            texte;


        bande.appendChild(
            texteDefilant
        );


        /* ---------------------------------------------
           MESURER LES LARGEURS
        ---------------------------------------------- */

        const largeurTexte =
            texteDefilant.offsetWidth;


        const largeurBande =
            bande.offsetWidth;


        /* ---------------------------------------------
           POSITION DE DÉPART
        ---------------------------------------------- */

        /*
           Le texte commence complètement
           en dehors de la partie gauche.
        */

        const debut =
            -largeurTexte - 40;


        /* ---------------------------------------------
           POSITION D'ARRIVÉE
        ---------------------------------------------- */

        /*
           Le texte termine complètement
           en dehors de la partie droite.
        */

        const fin =
            largeurBande + 40;


        /* ---------------------------------------------
           DISTANCE
        ---------------------------------------------- */

        const distance =
            fin - debut;


        /* ---------------------------------------------
           VITESSE
        ---------------------------------------------- */

        /*
           Plus la durée est grande,
           plus le texte avance lentement.

           Ici, le texte prend au minimum
           9 secondes pour traverser le bandeau.
        */

        const duree =
            Math.max(
                9000,
                distance * 8
            );


        /* ---------------------------------------------
           ANIMATION
        ---------------------------------------------- */

        animate(
            texteDefilant,
            {

                /*
                   Le texte avance constamment
                   de gauche à droite.
                */

                translateX: [
                    debut,
                    fin
                ],


                /*
                   Le texte devient visible
                   au début puis disparaît
                   doucement à la fin.
                */

                opacity: [

                    {
                        value: 0,
                        duration: 1
                    },

                    {
                        value: 1,
                        duration: 600
                    },

                    {
                        value: 1,
                        duration:
                            duree - 1800
                    },

                    {
                        value: 0,
                        duration: 1200
                    }

                ],


                /*
                   Même vitesse du début
                   jusqu'à la fin.
                */

                ease: "linear",


                /*
                   Recommence une fois
                   complètement disparu.
                */

                loop: true,


                /*
                   Durée totale.
                */

                duration: duree

            }
        );

    });

}


/* =====================================================
   ATTENDRE LE CHARGEMENT DES POLICES
====================================================== */

/*
   On attend que les polices Google soient chargées
   avant de mesurer la largeur du texte.

   Cela évite que l'animation commence
   avec une mauvaise largeur.
*/

if (document.fonts) {

    document.fonts.ready.then(() => {

        initialiserTextesDefilants();

    });

} else {

    initialiserTextesDefilants();

}


/* =====================================================
   MODALE
====================================================== */

initialiserModale();