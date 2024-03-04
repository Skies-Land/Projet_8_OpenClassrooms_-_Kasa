import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({logements}) => {
  return (
    logements.map((logement) => (
        <Link to={`/logement/${logement.id}`} className="thumb" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
        </Link>
    ))
  );
};

Thumb.propTypes = {
  logements: PropTypes.array.isRequired
}

export default Thumb;

//#region - /* ===== EXPLICATION "Thumb.jsx" ===== */
/* 
  Le composant Thumb sert à affiche une liste de logements sous forme de vignettes.

  Le composant prend une seule prop, [abréviation de "propriété"] appelé logements, 
  qui est un tableau d'objets représentant chaque logement.

  À l'intérieur de la fonction du composant, une méthode map est utilisée pour parcourir chaque logement 
  et générer une balise <Link> de react-router-dom pour chaque élément du tableau.

  Chaque balise <Link> contient une image du logement avec l'attribut alt défini sur le titre du logement.

  Le composant Thumb définit également le type de prop attendu, logements, en utilisant PropTypes pour 
  s'assurer qu'il s'agit bien d'un tableau, et l'exporte pour être utilisé ailleurs dans l'application. 
*/
//#endregion