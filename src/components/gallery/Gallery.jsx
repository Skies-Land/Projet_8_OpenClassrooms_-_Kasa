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
