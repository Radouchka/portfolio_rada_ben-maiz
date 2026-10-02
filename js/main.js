/* =====================================================
   MAIN.JS
====================================================== */


/*
   Anime.js est chargé directement depuis son CDN.
*/

import {
    animate
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";


import {
    chargerProjets
} from "./data.js";


import {
    creerCarteProjet
} from "./composants/carte-projet.js";


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
   MENU MOBILE
====================================================== */

const boutonBurger =
    document.querySelector(
        ".navigation__burger"
    );


const navigationLiens =
    document.querySelector(
        ".navigation__liens"
    );


if (
    boutonBurger &&
    navigationLiens
) {

    boutonBurger.addEventListener(
        "click",
        () => {

            const menuOuvert =
                navigationLiens.classList.toggle(
                    "ouvert"
                );


            boutonBurger.classList.toggle(
                "active"
            );


            boutonBurger.setAttribute(
                "aria-expanded",
                menuOuvert
            );


            boutonBurger.setAttribute(
                "aria-label",
                menuOuvert
                    ? "Fermer le menu"
                    : "Ouvrir le menu"
            );

        }
    );


    /*
        Ferme le menu lorsqu'un lien
        est sélectionné.
    */

    navigationLiens
        .querySelectorAll("a")
        .forEach(
            (lien) => {

                lien.addEventListener(
                    "click",
                    () => {

                        navigationLiens
                            .classList
                            .remove("ouvert");


                        boutonBurger
                            .classList
                            .remove("active");


                        boutonBurger.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        boutonBurger.setAttribute(
                            "aria-label",
                            "Ouvrir le menu"
                        );

                    }
                );

            }
        );

}



/* =====================================================
   EFFET DU TITRE + NOM + ÉTOILES
====================================================== */

function initialiserEffetTitre() {


    const titre =
        document.querySelector(
            ".hero__titre"
        );


    const nom =
        document.querySelector(
            ".hero__nom"
        );


    const hero =
        document.querySelector(
            ".hero"
        );


    if (
        !titre ||
        !nom ||
        !hero
    ) {

        return;

    }


    /*
        L'effet souris est réservé
        aux appareils avec une souris.
    */

    if (
        !window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        return;

    }



    /* =================================================
       CONTENEUR DU TITRE
    ================================================== */

    const conteneur =
        document.createElement(
            "div"
        );


    conteneur.className =
        "hero__titre-interactif";


    titre.parentNode.insertBefore(
        conteneur,
        titre
    );


    conteneur.appendChild(
        titre
    );



    /* =================================================
       COUCHE ROSE
    ================================================== */

    const coucheRose =
        document.createElement(
            "span"
        );


    coucheRose.className =
        "hero__titre-couche hero__titre-couche--rose";


    coucheRose.textContent =
        titre.textContent.trim();



    /* =================================================
       COUCHE VERTE
    ================================================== */

    const coucheVerte =
        document.createElement(
            "span"
        );


    coucheVerte.className =
        "hero__titre-couche hero__titre-couche--verte";


    coucheVerte.textContent =
        titre.textContent.trim();


    conteneur.insertBefore(
        coucheRose,
        titre
    );


    conteneur.insertBefore(
        coucheVerte,
        titre
    );



    /* =================================================
       ÉTOILES
    ================================================== */

    const positionsEtoiles = [

        {
            classe:
                "hero__etoile--haut-gauche",

            symbole:
                "✦",

            couleur:
                "rose",

            force:
                1.3
        },

        {
            classe:
                "hero__etoile--haut-droite",

            symbole:
                "✧",

            couleur:
                "vert",

            force:
                1.8
        },

        {
            classe:
                "hero__etoile--bas-gauche",

            symbole:
                "✧",

            couleur:
                "vert",

            force:
                1.5
        },

        {
            classe:
                "hero__etoile--bas-droite",

            symbole:
                "✦",

            couleur:
                "rose",

            force:
                2
        },

        {
            classe:
                "hero__etoile--coin-gauche",

            symbole:
                "✦",

            couleur:
                "rose",

            force:
                1
        },

        {
            classe:
                "hero__etoile--coin-droit",

            symbole:
                "✧",

            couleur:
                "vert",

            force:
                1.2
        }

    ];


    const etoiles = [];


    positionsEtoiles.forEach(
        (etoileInfo) => {

            const etoile =
                document.createElement(
                    "span"
                );


            etoile.className =
                `hero__etoile
                 ${etoileInfo.classe}
                 hero__etoile--${etoileInfo.couleur}`;


            etoile.textContent =
                etoileInfo.symbole;


            hero.appendChild(
                etoile
            );


            etoiles.push(
                {
                    element:
                        etoile,

                    force:
                        etoileInfo.force
                }
            );

        }
    );



    /* =================================================
       MOUVEMENT DE LA SOURIS
    ================================================== */

    hero.addEventListener(
        "mousemove",
        (evenement) => {


            const centreX =
                window.innerWidth / 2;


            const centreY =
                window.innerHeight / 2;


            const differenceX =
                evenement.clientX -
                centreX;


            const differenceY =
                evenement.clientY -
                centreY;


            const mouvementX =
                differenceX * 0.018;


            const mouvementY =
                differenceY * 0.012;



            /* -------------------------------------------------
               TITRE BLANC
            -------------------------------------------------- */

            animate(
                titre,
                {

                    translateX:
                        mouvementX * 0.35,

                    translateY:
                        mouvementY * 0.35,

                    duration:
                        250,

                    ease:
                        "out(3)"

                }
            );



            /* -------------------------------------------------
               COUCHE ROSE
            -------------------------------------------------- */

            animate(
                coucheRose,
                {

                    translateX:
                        mouvementX,

                    translateY:
                        mouvementY,

                    duration:
                        250,

                    ease:
                        "out(3)"

                }
            );



            /* -------------------------------------------------
               COUCHE VERTE
            -------------------------------------------------- */

            animate(
                coucheVerte,
                {

                    translateX:
                        -mouvementX * 1.4,

                    translateY:
                        -mouvementY * 1.4,

                    duration:
                        320,

                    ease:
                        "out(3)"

                }
            );



            /* -------------------------------------------------
               NOM
            -------------------------------------------------- */

            animate(
                nom,
                {

                    translateX:
                        mouvementX * 0.55,

                    translateY:
                        mouvementY * 0.55,

                    duration:
                        300,

                    ease:
                        "out(3)"

                }
            );



            /* -------------------------------------------------
               ÉTOILES
            -------------------------------------------------- */

            etoiles.forEach(
                (etoile) => {

                    animate(
                        etoile.element,
                        {

                            translateX:
                                mouvementX *
                                etoile.force *
                                2,

                            translateY:
                                mouvementY *
                                etoile.force *
                                2,

                            duration:
                                400,

                            ease:
                                "out(3)"

                        }
                    );

                }
            );

        }
    );



    /* =================================================
       RETOUR À LA POSITION ORIGINALE
    ================================================== */

    hero.addEventListener(
        "mouseleave",
        () => {


            animate(
                titre,
                {

                    translateX:
                        0,

                    translateY:
                        0,

                    duration:
                        500,

                    ease:
                        "out(3)"

                }
            );


            animate(
                coucheRose,
                {

                    translateX:
                        0,

                    translateY:
                        0,

                    duration:
                        500,

                    ease:
                        "out(3)"

                }
            );


            animate(
                coucheVerte,
                {

                    translateX:
                        0,

                    translateY:
                        0,

                    duration:
                        550,

                    ease:
                        "out(3)"

                }
            );


            animate(
                nom,
                {

                    translateX:
                        0,

                    translateY:
                        0,

                    duration:
                        500,

                    ease:
                        "out(3)"

                }
            );


            etoiles.forEach(
                (etoile) => {

                    animate(
                        etoile.element,
                        {

                            translateX:
                                0,

                            translateY:
                                0,

                            duration:
                                600,

                            ease:
                                "out(3)"

                        }
                    );

                }
            );

        }
    );

}



/* =====================================================
   CHARGEMENT DES PROJETS
====================================================== */

chargerProjets()

    .then(
        (donnees) => {

            projets = donnees;


            /*
                Création de chaque projet
                à partir du fichier JSON.
            */

            projets.forEach(
                (projet) => {

                    conteneurProjets.insertAdjacentHTML(
                        "beforeend",
                        creerCarteProjet(projet)
                    );

                }
            );


            /*
                Le deuxième projet reçoit
                cet ID pour le bouton
                du projet mis en avant.
            */

            const cartesProjets =
                document.querySelectorAll(
                    ".carte-projet"
                );


            if (
                cartesProjets[1]
            ) {

                cartesProjets[1].id =
                    "deuxieme_projet";

            }


            /*
                Initialise les carousels.
            */

            initialiserCarousels();


            /*
                Initialise les animations
                au scroll.
            */

            initialiserAnimationsScroll();

        }
    )


    .catch(
        (erreur) => {

            console.error(
                erreur
            );


            conteneurProjets.innerHTML =
                "<p>Impossible de charger les projets.</p>";

        }
    );



/* =====================================================
   CAROUSELS
====================================================== */

function initialiserCarousels() {


    const carousels =
        document.querySelectorAll(
            ".carte-projet__carousel"
        );


    carousels.forEach(
        (carousel) => {


            /*
                Récupère les images du projet.
            */

            const images =
                JSON.parse(
                    carousel.dataset.images
                );


            /*
                Image actuellement affichée.
            */

            let index = 0;



            /* =================================================
               ÉLÉMENTS DU CAROUSEL
            ================================================== */

            const slide =
                carousel.querySelector(
                    ".carte-projet__slide"
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



            /* =================================================
               VÉRIFIER SI LE LIEN EST YOUTUBE
            ================================================== */

            function estLienYoutube(
                lien
            ) {

                return (

                    lien.includes(
                        "youtube.com/watch"
                    )

                    ||

                    lien.includes(
                        "youtu.be/"
                    )

                    ||

                    lien.includes(
                        "youtube.com/embed/"
                    )

                );

            }



            /* =================================================
               RÉCUPÉRER L'ID YOUTUBE
            ================================================== */

            function obtenirLienYoutube(
                lien
            ) {


                /*
                    Déjà au format embed.
                */

                if (
                    lien.includes(
                        "youtube.com/embed/"
                    )
                ) {

                    return lien;

                }



                /*
                    Format :
                    youtube.com/watch?v=XXXX
                */

                if (
                    lien.includes(
                        "youtube.com/watch"
                    )
                ) {

                    const url =
                        new URL(
                            lien
                        );


                    const videoID =
                        url.searchParams.get(
                            "v"
                        );


                    return (
                        "https://www.youtube.com/embed/" +
                        videoID
                    );

                }



                /*
                    Format :
                    youtu.be/XXXX
                */

                if (
                    lien.includes(
                        "youtu.be/"
                    )
                ) {

                    const videoID =
                        lien
                            .split(
                                "youtu.be/"
                            )[1]
                            .split("?")[0];


                    return (
                        "https://www.youtube.com/embed/" +
                        videoID
                    );

                }


                return lien;

            }



            /* =================================================
               AFFICHER IMAGE OU VIDÉO
            ================================================== */

            function afficherImage() {


                /*
                    On vide la zone du carousel.
                */

                slide.innerHTML =
                    "";


                /*
                    Récupère le média actuel.
                */

                const media =
                    images[index];



                /* =================================================
                   YOUTUBE
                ================================================== */

                if (
                    estLienYoutube(
                        media
                    )
                ) {


                    const iframe =
                        document.createElement(
                            "iframe"
                        );


                    iframe.src =
                        obtenirLienYoutube(
                            media
                        );


                    iframe.title =
                        "Vidéo YouTube";


                    iframe.allow =
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";


                    iframe.allowFullscreen =
                        true;


                    iframe.className =
                        "carte-projet__youtube";


                    slide.appendChild(
                        iframe
                    );


                    /*
                        Pas de loupe pour les vidéos.
                    */

                    boutonZoom.style.display =
                        "none";

                }

                else {


                    /* =================================================
                       IMAGE / GIF
                    ================================================== */

                    const nouvelleImage =
                        document.createElement(
                            "img"
                        );


                    nouvelleImage.src =
                        media;


                    nouvelleImage.alt =
                        `Image ${index + 1} du projet`;


                    slide.appendChild(
                        nouvelleImage
                    );


                    /*
                        La loupe est disponible
                        pour les images et GIF.
                    */

                    boutonZoom.style.display =
                        "grid";


                    boutonZoom.onclick =
                        () => {

                            ouvrirModale(
                                nouvelleImage.src,
                                nouvelleImage.alt
                            );

                        };

                }



                /* =================================================
                   COMPTEUR
                ================================================== */

                compteur.textContent =
                    `${index + 1} / ${images.length}`;

            }



            /* =================================================
               BOUTON PRÉCÉDENT
            ================================================== */

            boutonPrecedent.addEventListener(
                "click",
                () => {

                    index--;


                    if (
                        index < 0
                    ) {

                        index =
                            images.length - 1;

                    }


                    afficherImage();

                }
            );



            /* =================================================
               BOUTON SUIVANT
            ================================================== */

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



            /*
                Affiche la première image.
            */

            afficherImage();

        }
    );

}



/* =====================================================
   ANIMATIONS AU SCROLL
====================================================== */

function initialiserAnimationsScroll() {


    const elements =
        document.querySelectorAll(

            ".section-label, " +

            ".a-propos__titre, " +

            ".a-propos__texte, " +

            ".mise-en-avant__grille, " +

            ".mise-en-avant__titre, " +

            ".projet-info, " +

            ".carte-projet, " +

            ".contact__titre, " +

            ".contact__boite"

        );


    /*
        Respecte le réglage de l'utilisateur
        pour les animations réduites.
    */

    const animationsReduites =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        animationsReduites
    ) {

        return;

    }



    /* =================================================
       ÉTAT INITIAL
    ================================================== */

    elements.forEach(
        (element) => {

            element.style.opacity =
                "0";

        }
    );



    /* =================================================
       OBSERVER
    ================================================== */

    const observer =
        new IntersectionObserver(

            (entrees) => {

                entrees.forEach(
                    (entree) => {


                        if (
                            !entree.isIntersecting
                        ) {

                            return;

                        }



                        /* Animation */

                        animate(
                            entree.target,
                            {

                                opacity: [
                                    0,
                                    1
                                ],

                                translateY: [
                                    40,
                                    0
                                ],

                                duration:
                                    800,

                                ease:
                                    "out(3)"

                            }
                        );


                        /*
                            L'élément n'a plus besoin
                            d'être observé après
                            son apparition.
                        */

                        observer.unobserve(
                            entree.target
                        );

                    }
                );

            },

            {

                threshold:
                    0.15

            }

        );



    /* Observation de tous les éléments */

    elements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

}



/* =====================================================
   TEXTES DÉFILANTS ANIME.JS
====================================================== */

function initialiserTextesDefilants() {


    const bandes =
        document.querySelectorAll(

            ".hero__bande--verte, " +

            ".hero__bande--violette, " +

            ".bande-rose, " +

            ".bande-verte"

        );


    bandes.forEach(
        (bande) => {


            /*
                Récupère le texte initial.
            */

            const texte =
                bande.textContent.trim();


            /*
                Vide le bandeau.
            */

            bande.innerHTML =
                "";


            /*
                Crée le texte animé.
            */

            const texteDefilant =
                document.createElement(
                    "span"
                );


            texteDefilant.classList.add(
                "texte-defilant"
            );


            texteDefilant.textContent =
                texte;


            bande.appendChild(
                texteDefilant
            );



            /* =================================================
               MESURES
            ================================================== */

            const largeurTexte =
                texteDefilant.offsetWidth;


            const largeurBande =
                bande.offsetWidth;



            /* Position de départ */

            const debut =
                -largeurTexte - 40;



            /* Position de fin */

            const fin =
                largeurBande + 40;



            /* Distance totale */

            const distance =
                fin - debut;



            /* Durée */

            const duree =
                Math.max(
                    9000,
                    distance * 8
                );



            /* =================================================
               ANIMATION
            ================================================== */

            animate(
                texteDefilant,
                {

                    /*
                        Déplacement constant
                        de gauche à droite.
                    */

                    translateX: [
                        debut,
                        fin
                    ],


                    /*
                        Apparition au début
                        et disparition à la fin.
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


                    duration:
                        duree,


                    ease:
                        "linear",


                    loop:
                        true

                }
            );

        }
    );

}



/* =====================================================
   CHARGEMENT DES POLICES
====================================================== */

if (
    document.fonts
) {

    document.fonts.ready.then(
        () => {

            initialiserEffetTitre();

            initialiserTextesDefilants();

        }
    );

}

else {

    initialiserEffetTitre();

    initialiserTextesDefilants();

}



/* =====================================================
   MODALE
====================================================== */

initialiserModale();