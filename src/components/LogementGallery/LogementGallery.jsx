import { useEffect, useState } from "react";
import LogementCard from "../LogementCard/LogementCard.jsx";
import { logementsGetAll } from "../../services/API.js";

/** EXPLICATION DU COMPOSANT "LogementGallery" :
* C'est un composant qui affiche une galerie de cartes de logements.
* 
* @component
* @example
* return (
*   <LogementGallery />
* )
*/
function LogementGallery() {
  
  /** VARIABLE D'ÉTAT `logements` ET FONCTION `setLogements` :
  * `logements` est une variable d'état qui représente la liste des logements à afficher.
  * `setLogements` est la fonction qui permet de mettre à jour `logements`.
  */
  const [logements, setLogements] = useState([]);

  /** EFFET `useEffect` :
  * est utilisé pour récupérer la liste des logements de l'API lors du rendu initial du composant.
  */
  useEffect(() => {
    logementsGetAll()
      .then(setLogements)
      .catch(console.error);
  }
  , []);

  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend une liste de composants `LogementCard`, un pour chaque logement dans `logements`.
  */
  return (
    <div className="logement-gallery">
      {logements.map((logement, logementCard) => (
        <LogementCard title={logement.title} key={logementCard} imageUrl={logement.cover} id={logement.id} />
      ))}
    </div>
  );
};

export default LogementGallery;