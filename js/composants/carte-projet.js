/* =====================================================
   CARTE-PROJET.JS
====================================================== */


/*
    Cette fonction reçoit un projet
    provenant du fichier projets.json.

    Elle crée ensuite tout le HTML
    nécessaire à son affichage.
*/


export function creerCarteProjet(projet) {


    /* ================================================= 
       COULEUR DU FOND 
    ================================================== */


    /*
        Certains projets ont un fond violet.
        Les autres ont un fond noir.
    */

    const fond =

        projet.couleurFond === "violet"

            ? "carte-projet--violette"

            : "";



    /* ================================================= 
       IMAGES 
    ================================================== */


    /*
        On transforme le tableau d'images 
        en texte JSON pour pouvoir le mettre 
        dans l'attribut data-images.
    */

    const imagesJSON =

        JSON.stringify(
            projet.images
        )

        .replace(
            /"/g,
            "&quot;"
        );



    /* =================================================
       LOGOS
    ================================================== */


    /*
        Les logos sont séparés des images
        du carousel.

        Le tableau "logos" vient directement
        du fichier projets.json.
    */

    const logosHTML =

        (projet.logos || [])

            .map(

                (logo, index) => `

                    <div
                        class="carte-projet__petite-image"
                    >

                        <img
                            src="${logo}"
                            alt="Logo ${index + 1}"
                        >

                    </div>

                `

            )

            .join("");



    /* ================================================= 
       CARTE 
    ================================================== */


    return ` 

        <article 

            class=" 
                carte-projet 
                ${fond} 
            " 

            style=" 
                --couleur-projet: 
                ${projet.couleurBordure}; 
            " 

        > 


            <!-- Numéro du projet --> 

            <p class="carte-projet__label"> 

                ${projet.numero} 
                / PROJET 

            </p> 



            <!-- Titre --> 

            <h2 class="carte-projet__titre"> 

                ${projet.titre} 

            </h2> 



            <!-- ================================================= 
                 CAROUSEL 
            ================================================== --> 


            <div 

                class="carte-projet__carousel" 

                data-images="${imagesJSON}" 

            > 


                <!-- Image actuelle --> 

                <div class="carte-projet__slide"> 


                    <img 

                        src="${projet.images[0]}" 

                        alt="${projet.titre}" 

                    > 


                </div> 



                <!-- ----------------------------- 
                     PRÉCÉDENT 
                ------------------------------ --> 


                <button 

                    type="button" 

                    class=" 
                        carousel__fleche 
                        carousel__fleche--precedente 
                    " 

                    aria-label="Image précédente" 

                > 

                    ‹ 

                </button> 



                <!-- ----------------------------- 
                     SUIVANT 
                ------------------------------ --> 


                <button 

                    type="button" 

                    class=" 
                        carousel__fleche 
                        carousel__fleche--suivante 
                    " 

                    aria-label="Image suivante" 

                > 

                    › 

                </button> 



                <!-- ----------------------------- 
                     ZOOM 
                ------------------------------ --> 


                <button 

                    type="button" 

                    class="carousel__zoom" 

                    aria-label="Agrandir l'image" 

                    title="Agrandir l'image" 

                > 

                    <span 
                        class="loupe-icone" 
                        aria-hidden="true" 
                    ></span> 

                </button> 



                <!-- ----------------------------- 
                     COMPTEUR 
                ------------------------------ --> 


                <span class="carousel__compteur"> 

                    1 / 
                    ${projet.images.length} 

                </span> 


            </div> 



            <!-- ================================================= 
                 LÉGENDE 
            ================================================== --> 


            <p class="carte-projet__legende"> 

                ${projet.legende} 

            </p> 



            <!-- ================================================= 
                 DESCRIPTION 
            ================================================== --> 


            <p class="carte-projet__description"> 

                ${projet.description} 

            </p> 



            <!-- =================================================
                 TAGS + LOGOS
            ================================================== -->


            <div class="carte-projet__bas">


                <!-- TAGS -->

                <div class="carte-projet__tags"> 


                    ${ 

                        projet.tags 

                            .map( 

                                (tag) => 
                                    `<span>${tag}</span>` 

                            ) 

                            .join("") 

                    } 


                </div>



                <!-- LOGOS -->

                <div class="carte-projet__petites-images">

                    ${logosHTML}

                </div>


            </div>




        </article> 

    `; 
}