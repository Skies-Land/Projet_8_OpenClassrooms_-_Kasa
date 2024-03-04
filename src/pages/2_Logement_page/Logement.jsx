import { useParams } from "react-router-dom";
import logements from "../../services/logements.json";
import Carousel from "../../components/carousel/Carousel";

const findLogementid = (id) => {
    return logements.find((logement) => logement.id === id);
};

const Logement = () => {
    const{id} = useParams();
    const logement = findLogementid(id);
    return (
        <div className="logement">

            <Carousel slides={logement.pictures} />

            <div className="logement__title">
                <h1 className="logement__title"> {logement.title} </h1>
                <h2> {logement.location} </h2>
            </div>

            <div className="logement__host">
                <h3> {logement.host.name} </h3>
                <img src={logement.host.picture} alt={logement.title} />
                <p> {logement.rating} </p>
            </div>

            <p> {logement.tags} </p>

            <p> {logement.description} </p>

            <p> {logement.equipments} </p>


        </div>
    );
};

export default Logement;


//#region - /* ===== EXPLICATION "Logement.jsx" ===== */
/* 
    Ce composant Logement utilise React Router pour extraire l'ID du logement de l'URL, 
    recherche ensuite les détails du logement à afficher à partir d'un fichier JSON, 
    et rend une page de détails de logement avec ces informations. 
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ useParams depuis react-router-dom ===== */
/* 
    C'est un hook qui permet d'extraire les paramètres de l'URL de la route actuelle. 
    Cela permet de gérer les routes et que l'URL inclut un paramètre id pour identifier 
    le logement spécifique à afficher.

    💡Les hooks sont des fonctions JavaScript qui permettent d'ajouter des fonctionnalités à des composants 
    fonctionnels sans avoir à convertir ces composants en classes.
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ logements.json ===== */
/*
    C'est la source de données contenant des informations sur les logements sous forme de tableau. 
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ const findLogementid ===== */
/* 
    Et une fonction qui est définie pour rechercher un logement spécifique en fonction de son ID. 
    Elle prend un ID en entrée et utilise la méthode find sur le tableau logements pour trouver le logement 
    correspondant à cet ID. 
*/
//#endregion

/* ---------------------------------------------------- */

//#region - /* ===== ▶️ const Logement ===== */
/* 
    Dans la fonction Logement :
    - useParams est utilisé pour extraire l'ID du logement de l'URL de la route actuelle.
    - En utilisant cet ID, le logement spécifique est recherché à l'aide de la fonction findLogementid.
    - Les informations du logement sont extraites
    les images (pictures), le titre (title), l'emplacement (location), les balises (tags), 
    la description (description), l'hôte (host), la note (rating), et les équipements (equipments).
*/
//#endregion
