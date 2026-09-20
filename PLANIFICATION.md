# Justifications des choix technologiques
1- Fichier JSON local, car c'est efficace et rapide à utiliser.Je trouve que mon site
vas etre tres charger par rapport au viseul, alors je trouve que JSON local m'aiderai et géré plus souplement mes fichiers.

2- Anime.js, j'aimerais avoir des transitions fluide, assez artistique et aussi c'est une extention que nous avons maitriser au parravant.


3- Multipages avec paramètre d'URL, je voudrais que le recruteur soit capable de naviguer facilement dans mon site.

4- Github Pages, car c'est beaucoup plus efficace et c'est deja intégré.


# idées d'animations
Pour mon portfolio, j’aimerais utiliser Anime.js pour ajouter des animations inspirées des BD et des jeux vidéo. Par exemple, le titre pourrait apparaître avec un effet de rebond et de « pop », tandis que les éléments décoratifs comme les étoiles, les points verts et les bulles pourraient apparaître progressivement. Les cartes de projets pourraient entrer à l’écran une par une lors du défilement et légèrement s’incliner ou grossir au passage de la souris. Lorsqu’un projet est sélectionné, une petite explosion de BD rose et verte pourrait apparaître avant d’afficher ses détails. Je pourrais également ajouter un curseur vert néon animé et quelques effets de glitch sur certains titres. L’objectif serait de rendre le portfolio plus vivant et interactif, tout en conservant son style BD/graffiti et une navigation simple.


20 - 09 - 2026

## 1. Présentation du projet

Le projet consiste à transformer les deux maquettes de référence du
portfolio en un site web fonctionnel, responsive et interactif.

Les deux références doivent être utilisées simultanément pendant toute
la production :

Portfolio_final.png : référence principale pour la version
desktop.

Portfolio_final_mobile.png : référence principale pour la
version mobile.

Le but n'est pas seulement de reproduire une image avec du HTML et du
CSS. Il faut transformer la composition graphique en une véritable
interface web : les sections doivent être structurées correctement, les
projets doivent être générés à partir de données, la navigation doit
fonctionner, les éléments doivent s'adapter aux différentes tailles
d'écran et les interactions doivent être cohérentes avec l'identité
visuelle.

Le résultat recherché est donc un portfolio qui reste très proche des
maquettes visuellement, tout en étant suffisamment bien organisé pour
pouvoir être modifié et maintenu pendant le projet.

Contraintes principales

Le site devra :

fonctionner sur ordinateur, tablette et téléphone;

conserver la hiérarchie visuelle des maquettes;

éviter les bogues majeurs;

utiliser un fichier externe pour les données des projets;

récupérer les données de manière asynchrone;

utiliser JavaScript pour les interactions nécessaires;

contenir des animations cohérentes avec le design;

séparer clairement HTML, CSS, JavaScript, données et ressources;

avoir des commentaires écrits dans des mots simples et personnels;

posséder une démarche de contrôle qualité documentée;

être facilement déployable en ligne.

La planification ci-dessous sert de feuille de route de production.
Chaque étape explique non seulement ce qui doit être fait, mais aussi
pourquoi cette étape existe, comment elle sera réalisée et ce qui doit
être terminé avant de passer à la suivante.

## 2. Objectifs du projet

### 2.1 Objectif visuel

Le premier objectif est de conserver l'identité graphique de la
maquette.

Le portfolio doit garder :

le fond noir ou très foncé;

les sections violet foncé / magenta;

les accents vert néon;

les accents rose/magenta vif;

les textes blancs;

les grands titres très expressifs;

les bordures fines;

les cadres;

les blocs colorés;

les compositions légèrement asymétriques;

les grands espaces entre les projets;

l'aspect artistique, numérique et légèrement brut.

La reproduction ne doit pas devenir une simple page noire avec du texte
vert. Le placement des éléments, les proportions, le rythme vertical,
les images et les contrastes sont également importants.

### 2.2 Objectif fonctionnel

Le portfolio doit être un véritable site web et non une image
interactive.

L'utilisateur doit pouvoir :

consulter le portfolio;

naviguer entre les sections;

voir les projets;

consulter les informations associées aux projets;

utiliser les boutons et liens;

consulter le site sur différents appareils;

accéder aux informations de contact.

### 2.3 Objectif technique

La structure doit rester suffisamment simple pour être comprise et
maintenue dans un contexte étudiant.

Le projet doit donc privilégier :

HTML5;

CSS3;

JavaScript;

JSON pour les données;

une bibliothèque d'animation seulement lorsqu'elle apporte une
réelle utilité.

Il faut éviter d'ajouter des technologies uniquement pour rendre le
projet plus complexe.

## 3. Analyse du design

### 3.1 Identité visuelle

La direction artistique repose sur un contraste entre un environnement
très sombre et des couleurs très vives.

Palette générale

Élément                Direction visuelle

Fond principal         Noir / presque noir
Sections secondaires   Violet très foncé / magenta sombre
Accent principal       Vert néon
Accent secondaire      Rose / magenta vif
Texte principal        Blanc
Petits textes          Blanc, vert ou rose
Bordures               Vertes, roses ou blanches
Titres                 Graffiti / condensés / très expressifs
Texte courant          Plus simple et lisible

Les couleurs devront être définies dans des variables CSS afin de
pouvoir les ajuster facilement pendant la phase de comparaison avec les
maquettes.

### 3.2 Header

Le header est relativement compact.

Il devra contenir :

l'identité ou le logo;

la navigation;

les informations secondaires visibles dans la maquette;

une disposition horizontale sur desktop;

une version adaptée sur mobile.

Production

La première version du header sera construite avec une structure HTML
simple. Ensuite, le CSS reproduira progressivement :

les dimensions;

les espacements;

les positions;

les tailles de texte;

les couleurs;

les bordures;

les éventuels effets.

Il est préférable de terminer la structure avant d'ajouter des
animations.

### 3.3 Hero

Le hero est l'une des zones les plus importantes du portfolio.

Il contient notamment :

le mot PORTFOLIO en très grand;

le nom RADA BEN MAIZ;

des éléments graphiques;

des bandes ou formes colorées;

des informations secondaires;

une composition asymétrique.

Le titre doit être traité comme un élément visuel majeur.

Production

Le hero sera construit en plusieurs couches :

arrière-plan;

titre principal;

nom;

informations secondaires;

formes décoratives;

éléments colorés;

animations éventuelles.

L'objectif est de pouvoir modifier chaque partie indépendamment plutôt
que de créer un seul bloc impossible à ajuster.

### 3.4 Section de présentation

Cette section introduit brièvement la démarche ou l'identité artistique.

Elle doit rester relativement courte.

Elle comprendra :

une phrase ou un titre important;

du texte;

un accent visuel;

un bouton ou lien si nécessaire.

Le but est de créer une transition entre le hero et les projets.

### 3.5 Galerie et projets

Les projets constituent le contenu principal du portfolio.

Les cartes peuvent contenir :

titre;

catégorie;

année;

image principale;

images secondaires;

description;

logiciels utilisés;

couleur d'accent;

bouton ou lien.

Les projets doivent être construits de manière réutilisable.

Au lieu de créer une structure HTML différente pour chaque projet, une
même structure de composant sera utilisée et remplie avec les données du
fichier JSON.

### 3.6 Projets visibles

Les projets observés dans les maquettes comprennent notamment :

LOST & FOUND

KIOSK / 01

NIGHT SHIFT

SAVE POINT

GHOST FM

un autre élément LOST & FOUND présent dans la galerie/contenu.

Avant la production finale, les contenus exacts devront être vérifiés
afin de déterminer si le dernier élément est réellement un doublon ou
s'il représente une autre carte.

### 3.7 Contact

La dernière partie utilise le titre graphique :

CONTACT DIRECT

La section doit conserver :

son fond coloré;

son titre très expressif;

son bloc d'informations;

ses bordures;

ses éléments graphiques;

son contraste.

La section devra également être adaptée au mobile.

## 4. Architecture du site

### 4.1 Structure choisie

Le portfolio sera développé comme un site one-page.

Ordre prévu :

Header / navigation

Hero

Présentation

Galerie / introduction des projets

Projets détaillés

Contact

Fin de page / footer

### 4.2 Pourquoi un site one-page ?

La maquette fonctionne comme une longue composition verticale. Le
passage d'une section à l'autre fait partie de l'expérience.

Le one-page permet donc :

de conserver la composition originale;

de simplifier la navigation;

de garder un rythme vertical;

de créer des animations au scroll;

de présenter le portfolio sans multiplier les pages.

## 5. Choix technologiques

### 5.1 HTML5

HTML sera responsable de la structure.

Il servira notamment pour :

<header>;

<nav>;

<main>;

<section>;

<article>;

<footer>;

titres;

textes;

boutons;

liens;

conteneurs des projets.

Le HTML doit rester principalement responsable du contenu et de la
structure, et non du style.

### 5.2 CSS3

CSS sera utilisé pour transformer la structure HTML en design visuel.

Il gérera :

couleurs;

typographies;

dimensions;

espacements;

grilles;

bordures;

cadres;

images;

compositions asymétriques;

responsive;

hover;

transitions.

Les CSS Grid seront privilégiés lorsque cela correspond à la composition
du portfolio.

### 5.3 JavaScript

JavaScript sera utilisé pour les fonctions qui nécessitent un
comportement dynamique.

Il servira notamment à :

récupérer les données JSON;

générer les cartes;

gérer les interactions;

gérer le menu mobile si nécessaire;

détecter certaines interactions au scroll;

déclencher certaines animations;

gérer les états d'interface.

### 5.4 Pas de framework lourd

Aucun framework comme React n'est nécessaire pour la première version.

Le site reste suffisamment simple pour être réalisé avec HTML, CSS et
JavaScript.

Cela permet également de garder le projet plus facile à expliquer dans
un contexte scolaire.

## 6. Gestion des données avec JSON

### 6.1 Principe

Les informations des projets seront séparées de la structure HTML.

Fichier :

/data/projects.json

Cette séparation est importante parce qu'elle permet de modifier les
projets sans devoir modifier directement la structure de chaque carte.

### 6.2 Données prévues

Chaque projet pourra contenir :

id;

title;

category;

year;

description;

mainImage;

images;

software;

link;

accent;

featured;

informations supplémentaires si nécessaires.

### 6.3 Production du système JSON

La production se fera en plusieurs étapes :

Étape A --- définir la structure

Avant d'écrire toutes les données, déterminer les informations
nécessaires à une carte.

Étape B --- créer un projet test

Créer un seul projet dans le JSON.

Cela permet de vérifier le fonctionnement avant de remplir les cinq
projets.

Étape C --- récupérer les données

JavaScript utilisera fetch() pour récupérer le JSON.

Étape D --- générer la carte

JavaScript parcourra les données et créera une structure visuelle pour
chaque projet.

Étape E --- ajouter tous les projets

Une fois le premier projet fonctionnel, les autres seront ajoutés.

Étape F --- tester les données

Vérifier :

titre;

images;

descriptions;

catégories;

couleurs;

liens;

logiciels.

### 6.4 Pourquoi cette méthode ?

Elle permet de modifier facilement le portfolio.

Par exemple, pour changer le titre d'un projet, il suffit de modifier le
JSON au lieu de chercher le texte dans plusieurs endroits du HTML.

### 6.5 Limites

Le JSON reste un fichier statique.

Il ne remplace pas :

une base de données;

un CMS;

un panneau d'administration;

un système de comptes.

Pour ce portfolio étudiant, ces fonctionnalités ne sont pas nécessaires.

## 7. Système d'animations

### 7.1 Comparaison

Solution   Utilisation

CSS        Animations simples, hover, transitions
GSAP       Animations très complexes
Anime.js   Animations JavaScript plus poussées

### 7.2 Choix

Le projet utilisera principalement CSS pour les effets simples.

Anime.js pourra être ajouté pour certaines animations JavaScript
plus précises si elles sont réellement nécessaires.

GSAP ne sera pas prioritaire puisque le projet n'a pas besoin d'un
système d'animation très complexe.

### 7.3 Production des animations

Les animations seront ajoutées après la mise en place du design
statique.

Ordre :

terminer la structure;

terminer le design;

terminer le responsive;

vérifier les interactions;

ajouter les animations;

tester les performances.

Cette méthode évite de chercher à corriger en même temps le design et
les animations.

### 7.4 Animations possibles

Hero

Au chargement :

apparition du titre;

légère translation;

apparition du nom;

apparition des éléments décoratifs.

Sections

Au scroll :

apparition progressive;

légère translation verticale;

changement d'opacité.

Projets

Au hover desktop :

légère élévation;

changement de bordure;

mise en évidence de l'accent;

léger zoom d'image si pertinent.

Les effets de hover ne doivent pas être indispensables sur mobile.

Boutons

Prévoir :

changement de couleur;

transition;

légère transformation.

### 7.5 Performance

Les animations doivent rester courtes et légères.

Éviter :

animations constantes inutiles;

gros déplacements;

effets qui rendent le texte difficile à lire;

trop d'animations simultanées.

## 8. Navigation

### 8.1 Ancres

La navigation pourra utiliser :

#accueil
#apropos
#projets
#contact

### 8.2 Production

La navigation sera d'abord fonctionnelle sans animation.

Ensuite :

créer les ancres;

vérifier chaque lien;

ajouter le scroll fluide;

tester le retour au haut;

adapter le comportement au mobile;

ajouter les animations seulement après.

### 8.3 Mobile

Si la navigation doit être réduite sur mobile, un menu compact pourra
être utilisé.

Il devra être :

accessible;

facile à fermer;

sans débordement;

lisible;

utilisable au doigt.

## 9. Responsive design

Le responsive sera pensé dès le début de la production.

La maquette mobile doit servir de référence et non uniquement de test
final.

### 9.1 Desktop

La version desktop conserve :

les compositions horizontales;

les grandes images;

les grilles;

les espacements;

les compositions asymétriques;

les éléments décoratifs latéraux.

### 9.2 Tablette

La tablette sera une version intermédiaire.

Il faudra éventuellement :

réduire les marges;

réduire les titres;

adapter les grilles;

modifier les proportions des images;

réorganiser certaines cartes.

### 9.3 Mobile

La version mobile doit reprendre l'intention de la maquette :

lecture verticale;

cartes empilées;

images adaptées à la largeur;

textes plus petits;

marges réduites;

boutons accessibles;

aucun élément coupé;

aucun scroll horizontal.

### 9.4 Méthode de production

Le responsive sera développé progressivement.

Après chaque grande section :

vérifier desktop;

vérifier tablette;

vérifier mobile;

comparer avec les maquettes;

corriger;

seulement ensuite passer à la section suivante.

Cette méthode évite d'arriver à la fin avec une version mobile
complètement à refaire.

## 10. Architecture des fichiers

Structure prévue :

portfolio/
│
├── index.html
├── PLANIFICATION.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── projects.js
│   └── animations.js
│
├── data/
│   └── projects.json
│
├── images/
│   ├── logo/
│   ├── projects/
│   │   ├── kiosk/
│   │   ├── night-shift/
│   │   ├── save-point/
│   │   ├── ghost-fm/
│   │   └── lost-found/
│   └── decorative/
│
└── assets/
    └── fonts/

Cette organisation permet de retrouver rapidement les ressources et
évite d'avoir tous les fichiers dans un seul dossier.

## 11. PLANIFICATION DÉTAILLÉE DE LA PRODUCTION

Étape 1 --- Analyse approfondie des maquettes

Objectif

Comprendre exactement ce qui doit être reproduit avant de commencer le
développement.

Description de production

Cette étape sert à transformer les deux images de référence en une liste
concrète de composants web.

Il faut observer :

la position des sections;

les tailles relatives;

les espacements;

les couleurs;

les titres;

les images;

les boutons;

les cadres;

les éléments décoratifs;

les différences entre desktop et mobile.

Il faut également déterminer quels éléments sont réutilisés plusieurs
fois.

Tâches

découper visuellement la page en sections;

identifier les composants récurrents;

noter les couleurs principales;

identifier les tailles de titres;

comparer desktop/mobile;

noter les changements de disposition;

déterminer les éléments animables;

déterminer les éléments obligatoires.

Fichiers concernés

maquettes;

PLANIFICATION.md.

Résultat attendu

À la fin, on doit savoir quoi construire avant de commencer à coder.

Dépendance

Aucune.

Priorité

Priorité 1 --- indispensable.

Étape 2 --- Préparation des ressources

Objectif

Rassembler tout ce qui sera nécessaire avant l'intégration.

Description de production

Avant de construire le site, les images et ressources doivent être
organisées.

Cette étape évite de devoir interrompre le développement parce qu'une
image est introuvable ou parce qu'une police n'est pas préparée.

Tâches

récupérer les images des projets;

renommer les fichiers clairement;

créer les dossiers;

préparer les logos;

préparer les polices;

vérifier les extensions;

vérifier les dimensions des images;

optimiser les images si nécessaire.

Résultat attendu

Toutes les ressources importantes sont prêtes et correctement classées.

Dépendance

Étape 1.

Priorité

Priorité 1.

Étape 3 --- Création de l'architecture HTML

Objectif

Créer le squelette fonctionnel du portfolio.

Description de production

À cette étape, on ne cherche pas encore à reproduire parfaitement les
couleurs et les espacements.

On construit d'abord une structure propre.

Le HTML doit permettre de comprendre immédiatement où se trouvent :

le header;

le hero;

la présentation;

les projets;

le contact;

le footer.

Tâches

créer index.html;

ajouter le header;

créer la navigation;

créer le hero;

créer la présentation;

créer le conteneur des projets;

créer le bloc contact;

créer le footer;

ajouter les IDs de navigation;

vérifier la structure HTML.

Résultat attendu

Une page simple mais complètement structurée.

Dépendance

Étapes 1 et 2.

Priorité

Priorité 1.

Étape 4 --- Mise en place du système JSON

Objectif

Rendre les projets dynamiques.

Description de production

Au lieu de créer manuellement cinq cartes presque identiques dans le
HTML, on crée une structure réutilisable.

Le JSON contient les informations et JavaScript s'occupe de les
afficher.

Tâches

créer projects.json;

définir les propriétés;

créer un projet test;

créer la fonction fetch;

récupérer les données;

vérifier les données reçues;

générer une première carte;

ajouter les autres projets;

gérer les erreurs;

tester les chemins d'image.

Résultat attendu

Le projet apparaît automatiquement grâce aux données JSON.

Dépendance

Étape 3.

Priorité

Priorité 1.

Étape 5 --- Construction du design CSS

Objectif

Commencer la reproduction visuelle de la maquette.

Description de production

Cette étape représente une grande partie du travail visuel.

Il faut commencer par les éléments globaux avant de s'occuper des petits
détails.

Ordre de production

définir le fond;

définir les variables de couleur;

définir les polices;

définir la largeur générale;

construire le header;

construire le hero;

construire la présentation;

styliser les projets;

styliser le contact;

ajouter les détails décoratifs.

Tâches

créer les couleurs;

régler les dimensions;

créer les grilles;

régler les espacements;

créer les bordures;

styliser les titres;

styliser les boutons;

régler les images;

reproduire les blocs colorés.

Résultat attendu

La version desktop commence à ressembler clairement à la maquette.

Dépendance

Étapes 3 et 4.

Priorité

Priorité 1.

Étape 6 --- Intégration complète des projets

Objectif

Faire en sorte que les projets ressemblent réellement aux cartes de la
maquette.

Description de production

Une fois la structure générale créée, il faut travailler sur le
composant projet.

Le premier projet servira de référence. Une fois sa mise en page
validée, la même logique sera appliquée aux autres projets.

Tâches

intégrer l'image principale;

intégrer les images secondaires;

afficher le titre;

afficher la catégorie;

afficher la description;

afficher les logiciels;

ajouter le bouton;

appliquer les couleurs;

régler les proportions;

comparer chaque carte à la maquette.

Résultat attendu

Les projets ont une présentation cohérente et réutilisable.

Dépendance

Étapes 4 et 5.

Priorité

Priorité 1.

Étape 7 --- Adaptation responsive

Objectif

Reproduire la version mobile et assurer le fonctionnement tablette.

Description de production

Cette étape ne consiste pas seulement à réduire les dimensions.

Il faut décider comment chaque élément change de comportement.

Par exemple :

une grille peut devenir une colonne;

un titre peut changer de taille;

une image peut passer à 100 % de la largeur disponible;

un élément décoratif peut être déplacé ou supprimé;

les espacements peuvent être réduits.

Tâches

créer les media queries;

adapter le header;

adapter le hero;

adapter les titres;

adapter les projets;

adapter les images;

adapter les boutons;

tester tablette;

comparer avec la maquette mobile;

corriger les débordements.

Résultat attendu

Une version mobile qui ressemble à la référence mobile et qui reste
utilisable.

Dépendance

Étapes 5 et 6.

Priorité

Priorité 1.

Étape 8 --- JavaScript et interactions

Objectif

Ajouter le comportement interactif du site.

Description de production

Une fois le design stable, JavaScript peut être utilisé pour les
éléments qui nécessitent une interaction.

Il ne faut pas utiliser JavaScript pour des tâches que CSS peut faire
simplement.

Tâches

vérifier le chargement JSON;

gérer la navigation;

créer le menu mobile si nécessaire;

gérer les boutons;

gérer les états interactifs;

préparer les déclencheurs d'animation;

gérer les éventuelles interactions avec les projets.

Résultat attendu

Le portfolio n'est plus seulement visuel : les interactions
fonctionnent.

Dépendance

Étapes 4 à 7.

Priorité

Priorité 1.

Étape 9 --- Ajout des animations

Objectif

Ajouter une dimension interactive au design.

Description de production

Les animations sont ajoutées seulement après avoir stabilisé la
structure, le design et le responsive.

Cela permet de distinguer un problème de mise en page d'un problème
d'animation.

Tâches

animation d'entrée du hero;

apparition des sections;

apparition des projets;

hover;

transitions;

micro-interactions;

animation des éléments graphiques si pertinente.

Résultat attendu

Le site paraît vivant sans devenir difficile à consulter.

Dépendance

Étapes 7 et 8.

Priorité

Priorité 2.

Étape 10 --- Création de la section Contact

Objectif

Terminer le parcours de navigation.

Description de production

La section contact doit être traitée comme une véritable partie du
design et non comme un bloc ajouté à la fin.

Il faut conserver son identité visuelle forte.

Tâches

créer le titre;

ajouter les informations;

ajouter les liens;

créer le cadre;

intégrer les éléments graphiques;

adapter le bloc au mobile;

tester les liens.

Résultat attendu

Une section contact fonctionnelle et cohérente avec le reste du
portfolio.

Dépendance

Étape 5.

Priorité

Priorité 1.

Étape 11 --- Contrôle qualité

Objectif

Vérifier que le site fonctionne réellement avant sa publication.

Description de production

Le contrôle qualité ne doit pas être fait uniquement à la toute fin.

Une première vérification est faite après chaque grande étape, puis une
vérification complète est réalisée une fois le site terminé.

Tâches

Tester :

mobile;

tablette;

desktop;

navigation;

JSON;

images;

boutons;

animations;

console;

accessibilité;

performance;

compatibilité navigateur.

Résultat attendu

Une liste précise des problèmes à corriger.

Dépendance

Toutes les étapes précédentes.

Priorité

Priorité 1.

Étape 12 --- Correction et stabilisation

Objectif

Corriger les problèmes trouvés pendant le contrôle qualité.

Description de production

Les corrections doivent être faites méthodiquement.

Pour chaque problème :

reproduire le problème;

identifier sa cause;

effectuer une correction;

tester la correction;

vérifier les autres formats d'écran;

vérifier que la correction n'a pas créé un nouveau problème.

Problèmes possibles

erreur JavaScript;

JSON non chargé;

image manquante;

mauvais chemin;

débordement horizontal;

élément superposé;

titre trop grand;

carte trop large;

animation qui entre en conflit;

problème de navigation.

Résultat attendu

Une version stable sans bogue majeur connu.

Dépendance

Étape 11.

Priorité

Priorité 1.

Étape 13 --- Optimisation finale

Objectif

Préparer le projet pour sa présentation et son déploiement.

Description de production

Lorsque toutes les fonctionnalités fonctionnent, il faut effectuer une
dernière passe de qualité.

Cette étape consiste à améliorer ce qui peut l'être sans commencer de
nouvelles fonctionnalités inutiles.

Tâches

optimiser les images;

retirer le code inutilisé;

vérifier les commentaires;

vérifier les chemins;

vérifier les noms de fichiers;

vérifier les textes;

vérifier les liens;

vérifier les performances;

vérifier la console;

faire une dernière comparaison avec les maquettes.

Résultat attendu

Une version propre et présentable.

Dépendance

Étape 12.

Priorité

Priorité 1.

Étape 14 --- Git et déploiement

Objectif

Publier une version stable du portfolio.

Description de production

Le dépôt GitHub doit contenir une version propre du projet.

Avant de publier, il faut vérifier que le site fonctionne aussi
lorsqu'il est réellement hébergé, car certains chemins peuvent
fonctionner localement et poser problème en ligne.

Tâches

vérifier la version finale;

faire un commit;

pousser le projet;

vérifier le dépôt;

activer GitHub Pages;

ouvrir le site public;

tester les images;

tester le JSON;

tester les liens;

vérifier la version mobile en ligne.

Résultat attendu

Portfolio disponible publiquement avec une version stable.

Dépendance

Étape 13.

Priorité

Priorité 1.

## 12. CONTRÔLE DE QUALITÉ

### 12.1 Test responsive

Tester :

téléphone;

tablette;

ordinateur portable;

écran desktop;

différentes largeurs de navigateur.

Vérifier :

aucun scroll horizontal;

aucun élément coupé;

aucun chevauchement;

images proportionnelles;

textes lisibles;

boutons utilisables.

### 12.2 Test visuel

Comparer la réalisation aux maquettes.

Vérifier :

couleurs;

tailles;

espacements;

proportions;

titres;

images;

bordures;

cadres;

boutons;

compositions asymétriques.

La comparaison doit être réalisée sur les deux références.

### 12.3 Test fonctionnel

Vérifier :

chargement JSON;

génération des projets;

navigation;

boutons;

liens;

contact;

menu mobile;

animations.

### 12.4 Test technique

Vérifier :

console sans erreur;

fichiers accessibles;

chemins corrects;

images optimisées;

code organisé;

dépendances réellement utilisées.

### 12.5 Accessibilité

Vérifier :

contraste;

lisibilité;

alt des images;

focus;

navigation clavier lorsque pertinente;

éléments interactifs reconnaissables.

### 12.6 Compatibilité

Tester principalement :

Chrome;

Edge;

Firefox;

Safari si disponible.

## 13. GESTION DES BUGS

Une méthode simple sera appliquée :

reproduire;

identifier;

isoler;

corriger;

tester;

vérifier desktop;

vérifier mobile;

vérifier les autres sections;

sauvegarder la correction.

Tableau de diagnostic

Problème            Vérification

JSON non chargé     chemin, serveur local, syntaxe
Image absente       chemin, nom, extension
Scroll horizontal   largeur, marge, positionnement
Projet trop large   grille, padding, largeur
Élément superposé   position, z-index
Animation cassée    événement, timing, classe
Erreur JS           console, sélecteur, donnée
Navigation cassée   href, ID
Site lent           images, animations, ressources

Pour le système JSON, les tests devront être effectués depuis un serveur
local plutôt qu'en ouvrant simplement le fichier avec file://, puisque
fetch() peut être bloqué dans ce contexte.

## 14. COMMENTAIRES DANS LE CODE

Les commentaires doivent montrer la compréhension du code.

Ils doivent :

expliquer les parties importantes;

utiliser des mots simples;

expliquer pourquoi une logique existe;

éviter de commenter chaque ligne;

rester naturels.

Exemple à éviter

// ajoute une classe
element.classList.add("visible");

Exemple préférable

// On ajoute cette classe lorsque la section entre dans l'écran
// pour déclencher son apparition progressive.
element.classList.add("visible");

Le commentaire doit apporter une information utile, et non simplement
traduire la ligne de code.

## 15. HÉBERGEMENT

### 15.1 Solutions envisagées

Solution                Avantages               Limites

GitHub Pages            Gratuit, simple, adapté Pas de backend
au projet

Netlify                 Déploiement simple      Service supplémentaire

### 15.2 Solution prévue

GitHub Pages est adapté au projet puisqu'il s'agit d'un site
statique utilisant HTML, CSS, JavaScript et JSON.

Déploiement

créer le dépôt;

envoyer les fichiers;

vérifier les chemins;

activer GitHub Pages;

choisir la branche;

ouvrir l'URL;

tester le site en ligne.

## 16. GIT / VERSIONNEMENT

Les commits doivent être faits régulièrement.

Exemples :

Initialisation du portfolio
Ajout de la structure HTML
Ajout du système JSON
Création du design desktop
Ajout des projets
Ajout du responsive mobile
Ajout des interactions
Ajout des animations
Correction du responsive
Optimisation finale
Version finale

Le but est de pouvoir retrouver les différentes étapes du développement.

## 17. PRIORITÉS

### Priorité 1 --- Indispensable

structure one-page;

header;

hero;

présentation;

projets;

JSON;

affichage dynamique;

responsive;

contact;

navigation;

images;

contrôle qualité;

code commenté;

déploiement.

### Priorité 2 --- Important

animations au scroll;

hover;

menu mobile animé;

micro-interactions;

transitions;

effets graphiques.

Priorité 3 --- Optionnel

animations très complexes;

effets décoratifs supplémentaires;

fonctionnalités absentes de la maquette;

CMS;

backend.

La version fonctionnelle doit être terminée avant les fonctionnalités
secondaires.

## 18. LIVRABLES

Les livrables finaux sont :

site web fonctionnel;

version desktop;

version tablette;

version mobile;

PLANIFICATION.md;

projects.json;

code HTML/CSS/JavaScript commenté;

documentation du contrôle qualité;

dépôt GitHub;

version hébergée.

## FEUILLE DE ROUTE GLOBALE

1. ANALYSER LES MAQUETTES
            ↓
2. PRÉPARER LES RESSOURCES
            ↓
3. CRÉER LA STRUCTURE HTML
            ↓
4. METTRE EN PLACE LE JSON
            ↓
5. CONSTRUIRE LE DESIGN CSS
            ↓
6. INTÉGRER LES PROJETS
            ↓
7. ADAPTER DESKTOP / TABLETTE / MOBILE
            ↓
8. AJOUTER JAVASCRIPT ET INTERACTIONS
            ↓
9. AJOUTER LES ANIMATIONS
            ↓
10. TERMINER LE CONTACT
            ↓
11. CONTRÔLER LA QUALITÉ
            ↓
12. CORRIGER LES BUGS
            ↓
13. OPTIMISER
            ↓
14. GIT + DÉPLOIEMENT

Principe général de production

Le projet doit être développé du plus général vers le plus précis.

On commence par comprendre les maquettes, puis on crée la structure,
ensuite le système de données, puis le design, le responsive, les
interactions et finalement les animations.

Cela permet d'éviter de travailler sur des détails trop tôt et de devoir
refaire une section entière plus tard.

Le résultat final doit être suffisamment fidèle aux maquettes pour que
l'identité visuelle soit reconnaissable immédiatement, tout en étant un
véritable site web responsive, fonctionnel, maintenable et documenté.
