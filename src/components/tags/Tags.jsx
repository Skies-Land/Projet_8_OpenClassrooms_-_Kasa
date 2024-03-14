import PropTypes from "prop-types";

/** EXPLICATION DU COMPOSANT "Tags" :
* C'est un composant qui affiche un texte sous forme de tag.
* 
* @component
* @example
* return (
*   <Tags text="Tag" />
* )
* 
* @param {Object} props - Les propriétés passées au composant.
* @param {string} props.text - Le texte à afficher dans le tag.
*/
function Tags({text}) {
    return <p className="tags">{text}</p>;
};

/**
* Les propTypes définissent les types de props attendus par le composant Tags.
* 
* `text` est une prop qui est nécessaire (`isRequired`) et doit être une chaîne de caractères (`string`).
*/
Tags.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Tags;