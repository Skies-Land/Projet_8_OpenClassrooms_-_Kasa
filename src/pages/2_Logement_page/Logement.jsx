import { useParams } from "react-router-dom";
import logements from "../../services/logements.json";

const findLogementid = (id) => {
    return logements.find((logement) => logement.id === id);
};

const Logement = () => {
    const{id} = useParams();
    const logement = findLogementid(id);
    const pictures = logement.pictures;
    return (
        <div className="logement">
            {/* {pictures.map((picture, index) => {
                return (
                    <img src={picture} alt={picture.title} key={`${picture}-${index}`} />
                );
            })} */}
            <h1 className="logement__title"> {logement.title} </h1>

            <div className="logement__info-left">
                <h2> {logement.location} </h2>
                <p> {logement.tags} </p>
                <p> {logement.description} </p>
            </div>

            <div className="logement__info-right">
                <div className="logement__host">
                    <h3> {logement.host.name} </h3>
                    <img src={logement.host.picture} alt={logement.title} />
                </div>
                <p> {logement.rating} </p>
                <p> {logement.equipments} </p>
            </div>

        </div>
    );
};

export default Logement;


/* Importation du "logements.JSON" dans une variable "findLogementid" 
Grâce à cette foncton, elle retourne à chaque fois le bon logement suivant l'ID
s'il est égal à celui qui est transmis en paramètre dans l'URL.
 */