import PropTypes from "prop-types";
import arrowleft from "../../assets/image/arrowleft.svg";
import arrowright from "../../assets/image/arrowright.svg";
import { useState, useEffect } from "react";

const Carousel = ({slides}) => {

    /* 1️⃣ DÉCLARATION DU COMPOSANT "CAROUSEL" */
        const [currentIndex, setCurrentIndex] = useState(0);
        const [autoScrollInterval, setAutoScrollInterval] = useState(null);

    /* 2️⃣ FONCTION DE DÉFILEMENT AUTOMATIQUE */
        const autoSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        };

        useEffect(() => {
            const intervalId = setInterval(autoSlide, 3000); /* Change d'image toutes les 3 secondes = 3000 */
            setAutoScrollInterval(intervalId);
            return () => {
                clearInterval(intervalId);
            };
        }, []); /* [] assure que cela ne se déclenchera qu'une seule fois après le rendu initial */

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

    /* 3️⃣ GESTION DES CLICS PRÉCÉDENTS ET SUIVANTS */
        const previousClick = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
            stopAutoScroll();
        };

        const nextClick = () => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
            stopAutoScroll();
        };

    /* 4️⃣ AFFICHAGE DES ÉLÉMENTS DU CARROUSEL */
        const currentSlide = slides[currentIndex];
        const numSlides = slides.length;

        const displayArrows = numSlides > 1;
        const displayIndicator = numSlides > 1;
        return (
            <div className="logement__carousel">
                <img className="logement__carousel--slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
                {displayArrows && (
                    <>
                    <img className="logement__carousel__arrowleft" src={arrowleft} alt="Flèche de gauche" onClick={previousClick} />
                    <img className="logement__carousel__arrowright" src={arrowright} alt="Flèche de droite" onClick={nextClick} />
                    </>
                )}
                {displayIndicator && (
                    <div className="logement__carousel__slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
                )}
            </div>
        );
};

/* 5️⃣ DÉFINITION DES TYPES DE PROPRIÉTÉS */
Carousel.propType = {
    slides : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;

//#region - /* ===== EXPLICATION "Carousel.jsx" ===== */
/*
    0️⃣ IMPORTATIONS :
    | PropTypes : pour définir les types des propriétés du composant.
    | Les images des flèches gauche et droite qui seront utilisées dans le carrousel.
    | useState : pour gérer l'état du composant.
    ----------------------------------------

    1️⃣ DÉCLARATION DU COMPOSANT "CAROUSEL" :
    | "currentIndex" : Cet état représente l'indice 
    | de la diapositive actuellement affichée dans le carrousel. 

    | Initialisons à 0, ce qui signifie que 
    | la première diapositive sera affichée par défaut.

    | La valeur de cet état sera mise à jour chaque fois que l'utilisateur 
    | cliquera sur les flèches gauche ou droite pour passer à la diapositive précédente ou suivante.

    -----------

    | "autoScrollInterval" : Cet état sera utilisé pour stocker 
    | l'identifiant de l'intervalle utilisé pour le défilement automatique du carrousel.

    | Initialisons à "null" car le défilement automatique n'a pas encore démarré. 
    | Lorsque le défilement automatique est activé, cet état contiendra l'identifiant 
    | de l'intervalle retourné par "setInterval".
    ----------------------------------------

    2️⃣ FONCTION DE DÉFILEMENT AUTOMATIQUE :
    | Le hook "useEffect" est appelé une seule fois grâce à son tableau de dépendances vide []
    | Il initialise un intervalle qui appelle la fonction "autoSlide" 
    | à chaque intervalle défini toutes les 3 secondes (3000ms)
    ----------------------------------------

    3️⃣ GESTION DES CLICS PRÉCÉDENTS ET SUIVANTS :
    | Deux fonctions, "previousClick" et "nextClick", sont définies 
    | pour changer l'indice de l'image actuellement affichée.

    | Lorsque l'utilisateur clique sur la flèche gauche, 
    | "previousClick" est appelée pour afficher l'image précédente.

    | Lorsque l'utilisateur clique sur la flèche droite, 
    | "nextClick" est appelée pour afficher l'image suivante.

    | La fonction de défilement automatique est stopé lors d'une intérection sur les flèches.
    ----------------------------------------

    4️⃣ AFFICHAGE DES ÉLÉMENTS DU CARROUSEL :
    | L'image actuellement affichée est extraite du tableau 
    | slides en fonction de l'indice "currentIndex".

    | Des variables booléennes "displayArrows" et "displayIndicator" sont définies 
    | en fonction du nombre de diapositives.

    | Si "displayArrows" est vrai (c'est-à-dire qu'il y a plus d'une diapositive),
    | les flèches gauche et droite sont affichées.

    | Si "displayIndicator" est vrai, 
    | un indicateur du numéro de diapositive actuelle est affiché.
    ----------------------------------------

    5️⃣ DÉFINITION DES TYPES DE PROPRIÉTÉS :
    | Utilisation de "PropTypes" pour spécifier que la propriété "slides" 
    | doit être un tableau d'URLs d'images et qu'elle est requise.
    ----------------------------------------
*/
//#endregion