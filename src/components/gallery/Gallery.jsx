import Thumb from "../thumb/Thumb.jsx";
import Logements from "../../services/logements.json";

function Gallery() {
  return (
    <div className="gallery">
      <Thumb logements={Logements} />
    </div>
  )
};

export default Gallery;

//#region - /* ===== EXPLICATION "Gallery.jsx" ===== */
/*
  Le composant Gallery sert simplement à rendre une galerie en incluant le composant Thumb.

  Le composant Thumb est utilisé avec une prop logements à laquelle est assignée 
  la valeur Logements, qui est le contenu du fichier JSON. 
*/
//#endregion