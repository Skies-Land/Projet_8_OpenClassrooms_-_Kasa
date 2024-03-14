import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import Rating from "../../components/Rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { logementGetById } from "../../services/API.js";

/** EXPLICATION DU COMPOSANT "LogementPage" :
* C'est un composant qui affiche la page de détails d'un logement.
* 
* @component
* @example
* return (
*   <LogementPage />
* )
*/
function LogementPage() {

    /** CONSTANTES 
    * `location` est un objet qui contient des informations sur la navigation actuelle.
    * `selectedById` est une variable d'état qui représente le logement sélectionné.
    * `setSelectedById` est la fonction qui permet de mettre à jour `selectedById`.
    */
    const location = useLocation();
    const [selectedById, setSelectedById] = useState(null);

    /** USEEFFET
    * `useEffect` est utilisé pour récupérer les détails du logement de l'API lors du rendu initial du composant.
    */
    useEffect(() => {
        logementGetById(location.state.logementById)
            .then(setSelectedById)
            .catch(console.error);
    }, [location.state.logementById]);

    /** RENDU DU COMPOSANT :
    * Si `selectedById` est null, le composant affiche "Loading...".
    * Sinon, il affiche les détails du logement, y compris un carrousel d'images, 
    * une description, des tags, des informations sur l'hôte, une évaluation, et une liste d'équipements.
    */
    if (selectedById == null) return <div>Loading...</div>

    return (
        <div className="logement">
            <Carousel slides={selectedById.pictures} />

            <div className="logement__description">
                <div className="logement__description__top">
                    <div className="logement__description__top--info">
                        <h1> {selectedById.title} </h1>
                        <h2> {selectedById.location} </h2>
                        <div className="logement__description__top--block-tags">
                            {selectedById.tags.map((tag, index) => (
                            <Tags key={index} text={tag} />
                            ))}
                        </div>
                    </div>

                    <div className="logement__description__top--host-block">
                        <div className="logement__description__top--host-block--host">
                            <h3> {selectedById.host.name} </h3>
                            <img src={selectedById.host.picture} alt={selectedById.title} />
                        </div>
                        <div className="rating">
                            <Rating rating={parseInt(selectedById.rating, 10)} />
                        </div>
                    </div>
                </div>

                <div className="logement__description--bottom">
                    <Collapse title="Description">{selectedById.description}</Collapse>
                    <Collapse title="Equipement">
                        <ul>
                            {selectedById.equipments.map((equip, index) => (
                                <li key={index}>{equip}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    )
} 

export default LogementPage;
