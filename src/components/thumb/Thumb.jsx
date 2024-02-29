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

Thumb.PropTypes = {
    logements: PropTypes.array.isRequired
}

export default Thumb;

/* Le tableau "logements" récupérer en props, boucle dessus pour sortir un "logement."
Les balises <Link> engloube les actions qui sera effectuer.
Pour chaque "logement" : 
- un containeur "thumb" className="thumb" et créer avec en clé l'ID du logement.
- selon le chemin d'accès, une image est ajouté correspondant à l'ID  avec son titre associé */
