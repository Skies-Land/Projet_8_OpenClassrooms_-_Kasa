import PropTypes from "prop-types";
import arrowleft from "../../assets/image/arrowleft.svg";
import arrowright from "../../assets/image/arrowright.svg";
import { useState, useEffect } from "react";

/** EXPLICATION DU COMPOSANT "Carousel" :
* C'est un composant qui affiche un carrousel d'images.
* Il permet aux utilisateurs de faire défiler les images automatiquement ou manuellement.
* 
* @component
* @example const slides = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
* return <Carousel slides={slides} />
* 
* @param {Object} props - Les propriétés passées au composant.
* @param {string[]} props.slides - Un tableau de chaînes de caractères représentant les chemins des images à afficher dans le carrousel.
*/
const Carousel = ({slides}) => {

    /** VARIABLES D'ÉTAT :
    * `currentIndex` est une variable d'état qui représente l'index de l'image actuellement affichée dans le carrousel.
    * `setCurrentIndex` est la fonction qui permet de mettre à jour `currentIndex`.
    * @type {[number, function]} currentIndex, setCurrentIndex
    * 
    * `autoScrollInterval` est une variable d'état qui représente l'intervalle de défilement automatique du carrousel.
    * `setAutoScrollInterval` est la fonction qui permet de mettre à jour `autoScrollInterval`.
    * @type {[number, function]} autoScrollInterval, setAutoScrollInterval
    * */
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoScrollInterval, setAutoScrollInterval] = useState(null);

    /** FONCTIONS `autoSlide` ET `useEffect` :
    * `autoSlide` est une fonction qui met à jour `currentIndex` pour passer à la diapositive suivante.
    * Si la diapositive actuelle est la dernière, elle revient à la première.
    * 
    * `useEffect` est utilisé pour créer un intervalle qui appelle `autoSlide` toutes les 3 secondes (3000 ms).
    * L'intervalle est stocké dans `autoScrollInterval` pour pouvoir être effacé lorsque le composant est démonté.
    * Ces crochets `[]` en fin de la fonction `useEffect` assure que l'effet se déclenche qu'une seule fois après le rendu initial.
    */
    const autoSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        const intervalId = setInterval(autoSlide, 3000);
        setAutoScrollInterval(intervalId);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    /** FONCTION `stopAutoScroll` :
    * C'est une fonction qui arrête le défilement automatique du carrousel.
    * Elle utilise `clearInterval` pour arrêter l'intervalle stocké dans `autoScrollInterval`.
    */
    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval);
    };

    /** GESTION DES CLICS PRÉCÉDENTS :
    * C'est une fonction qui est appelée lorsque l'utilisateur clique sur le bouton "précédent".
    * Elle met à jour `currentIndex` pour passer à la diapositive précédente.
    * Si la diapositive actuelle est la première, elle passe à la dernière.
    * Elle arrête également le défilement automatique en appelant `stopAutoScroll`.
    */
    const previousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        stopAutoScroll();
    };

    /** GESTION DES CLICS SUIVANTS :
    * C'est une fonction qui est appelée lorsque l'utilisateur clique sur le bouton "suivant".
    * Elle met à jour `currentIndex` pour passer à la diapositive suivante.
    * Si la diapositive actuelle est la dernière, elle revient à la première.
    * Elle arrête également le défilement automatique en appelant `stopAutoScroll`.
    */
    const nextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        stopAutoScroll();
    };

    /**
    * `currentSlide` est l'image actuellement affichée dans le carrousel.
    */
    const currentSlide = slides[currentIndex];
    /**
    * `numSlides` est le nombre total de diapositives dans le carrousel.
    */
    const numSlides = slides.length;
    /**
    * `displayArrows` est un booléen qui détermine si les flèches de navigation doivent être affichées.
    */
    const displayArrows = numSlides > 1;
    /**
    * `displayIndicator` est un booléen qui détermine si l'indicateur de diapositive doit être affiché.
    */
    const displayIndicator = numSlides > 1;

    /** RENDU DU COMPOSANT :
    * Cette partie du code définit le rendu du composant Carousel.
    * Le rendu comprend une image pour la diapositive actuelle, des flèches de navigation (si `displayArrows` est vrai),
    * et un indicateur de diapositive (si `displayIndicator` est vrai).
    */
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

/** DÉFINITION DES TYPES DE PROPRIÉTÉS :
* Les propTypes définissent les types de props attendus par le composant Carousel.
* 
* `slides` est une prop qui est nécessaire (`isRequired`) et doit être un tableau de chaînes de caractères (`arrayOf(PropTypes.string)`).
* C'est le tableau des URL des images à afficher dans le carrousel.
*/
Carousel.propType = {
    slides : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
