import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import arrowForCollapse from "../../assets/image/arrowForCollapse.svg";

/* 1️⃣ DÉFINITION DU COMPOSANT "COLLAPSE" */
const Collapse = ({title, description}) => {

    /* 2️⃣ DÉCLARATION DES ÉTATS */
    const [isOpen, setIsOpen] = useState(false);

    /* 3️⃣ GESTION DE L'OUVERTURE DU PANNEAU DÉROULANT */
    const handleFilterOpening = () => {
        //console.log("La fonction est appelée !");
        setIsOpen(!isOpen);
    };

    /* 4️⃣ CONSTRUCTION DES CLASSES DYNAMIQUES  */
    const collapseClass = classNames("collapse", { "open": isOpen });
    const arrowClass = classNames("arrow", { "down": isOpen });
    const paragraphClass = classNames("paragraph", { "animate": isOpen });

    /* 5️⃣ RENDU DU COMPOSANT */
    return (
        <div className={collapseClass}>
            <div className="headCollapse" onClick={handleFilterOpening}>
                <h3>{title}</h3>
                <img 
                src={arrowForCollapse} 
                alt="Flèche pour le panneau déroulant"
                className={arrowClass} />
            </div>
            <div className={paragraphClass}>
                {description}
            </div>
        </div>
    );
};

/* 6️⃣ VALIDATION DES PROPRIÉTÉS */
Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.node.isRequired,
};

export default Collapse;

//#region - /* ===== EXPLICATION "Collapse.jsx" ===== */
/*
    0️⃣ IMPORTATIONS :
    | "PropTypes" est importé depuis la bibliothèque 
    | prop-types pour la validation des types de propriétés.

    | "useState" est importé depuis React pour gérer l'état local du composant.

    | "classNames" est importé depuis la bibliothèque classnames. 
    | Cette bibliothèque permet de concaténer des classes 
    | conditionnellement de manière plus lisible.

    | "arrowForCollapse" est importé pour l'image de la flèche utilisée dans le panneau déroulant.
    ----------------------------------------

    1️⃣ DÉFINITION DU COMPOSANT "COLLAPSE" :
    | Le composant "Collapse" est défini comme une fonction fléchée 
    | prenant deux propriétés, title et description, comme arguments.
    ----------------------------------------

    2️⃣ DÉCLARATION DES ÉTATS :
    | useState est utilisé pour déclarer un état local "isOpen" qui représente 
    | l'état d'ouverture du panneau déroulant. Par défaut, il est défini sur "false".
    ----------------------------------------

    3️⃣ GESTION DE L'OUVERTURE DU PANNEAU DÉROULANT :
    | "handleFilterOpening" est une fonction qui est appelée lorsque l'utilisateur clique sur 
    | l'en-tête du panneau déroulant. Elle inverse simplement l'état actuel de 
    | "isOpen", passant de true à false ou de false à true.
    ----------------------------------------

    4️⃣ CONSTRUCTION DES CLASSES DYNAMIQUES :
    | "classNames" est utilisé pour construire dynamiquement les classes CSS du composant 
    | en fonction de l'état "isOpen". La classe "collapse" est toujours présente, 
    | mais la classe "open" est ajoutée lorsque "isOpen" est vrai. 
    | De même, la classe "arrow" est toujours présente, 
    | mais la classe "down" est ajoutée lorsque "isOpen" est vrai.
    ----------------------------------------

    5️⃣ RENDU DU COMPOSANT :
    | Le composant est rendu avec différentes classes en fonction de l'état "isOpen". 
    | Lorsque "isOpen" est vrai, la classe "open" est ajoutée à la div principale, 
    | la classe "down" est ajoutée à l'image de la flèche, et la classe "animate" 
    | est ajoutée à la div contenant la description.
    ----------------------------------------

    6️⃣ VALIDATION DES PROPRIÉTÉS :
    | PropTypes est utilisé pour valider les types de propriétés "title" et "description". 
    | "title" doit être une chaîne de caractères (string) et 
    | "description" peut être de tout type (node), mais elle est obligatoire (isRequired).
*/
//#endregion