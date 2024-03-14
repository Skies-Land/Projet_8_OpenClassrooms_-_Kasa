import { Link } from "react-router-dom";

/** EXPLICATION DU COMPOSANT "LogementCard" :
* C'est un composant qui affiche une carte de logement.
* 
* @component
* @example
* return (
*   <LogementCard id="1" imageUrl="image.jpg" title="Titre du logement" />
* )
* 
* @param {Object} props - Les propriétés passées au composant.
* @param {string} props.id - L'identifiant du logement.
* @param {string} props.imageUrl - L'URL de l'image du logement.
* @param {string} props.title - Le titre du logement.
*/
function LogementCard(props) {

  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend un lien vers la page de détails du logement,
  * une image du logement, et le titre du logement.
  */
  return (
    <Link 
      to="/logement" 
      state={{
        logementById: props.id
      }} 
      className="logementCard">

      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>

    </Link>
  );
}

export default LogementCard;