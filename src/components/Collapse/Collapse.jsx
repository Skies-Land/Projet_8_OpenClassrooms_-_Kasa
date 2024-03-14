import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import arrowForCollapse from "../../assets/image/arrowForCollapse.svg";

/** EXPLICATION DU COMPOSANT "Collapse" :
* C'est un composant qui affiche un panneau déroulant.
* 
* @component
* @example
* return (
*   <Collapse title="Titre du panneau">
*     <p>Contenu du panneau</p>
*   </Collapse>
* )
* 
* @param {Object} props - Les propriétés passées au composant.
* @param {string} props.title - Le titre du panneau déroulant.
* @param {React.Node} props.children - Le contenu du panneau déroulant.
*/
const Collapse = ({title, children}) => {

    /** VARIABLE D'ÉTAT :
    * `isOpen` est une variable d'état qui représente si le panneau est ouvert ou non.
    * `setIsOpen` est la fonction qui permet de mettre à jour `isOpen`.
    */
    const [isOpen, setIsOpen] = useState(false);

    /** GESTION DE L'OUVERTURE DU PANNEAU DÉROULANT :
    * `handleFilterOpening` est une fonction qui inverse l'état d'ouverture du panneau.
    */
    const handleFilterOpening = () => {
        setIsOpen(!isOpen);
    };

    /** LES CLASSES DYNAMIQUES :
    * `collapseClass`, `arrowClass` et `paragraphClass` sont des chaînes de caractères qui représentent les classes CSS dynamiques.
    * Elles changent en fonction de l'état d'ouverture du panneau.
    */
    const collapseClass = classNames("collapse", { "open": isOpen });
    const arrowClass = classNames("arrow", { "down": isOpen });
    const paragraphClass = classNames("paragraph", { "animate": isOpen });

    /** RENDU DU COMPOSANT :
    * Le rendu du composant comprend un titre, une flèche pour ouvrir/fermer le panneau, et le contenu du panneau.
    * Le composant est rendu avec différentes classes en fonction de l'état "isOpen". 
    * Lorsque "isOpen" est vrai, la classe "open" est ajoutée à la div principale, 
    * la classe "down" est ajoutée à l'image de la flèche, et la classe "animate" 
    * est ajoutée à la div contenant la description.
    */
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
                {children}
            </div>
        </div>
    );
};

/** VALIDATION DES PROPRIÉTÉS
* Les propTypes définissent les types de props attendus par le composant Collapse.
* 
* `title` est une prop qui est nécessaire (`isRequired`) et doit être une chaîne de caractères (`string`).
* `children` est une prop qui peut être n'importe quel élément React (`node`).
*/
Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.node,
};

export default Collapse;