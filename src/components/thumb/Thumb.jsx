import PropTypes from "prop-types";

const Thumb = ({logements}) => {
  return (
    logements.map((logement) => (
        <div className="thumb" key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
        </div>
    ))
  );
};

Thumb.PropTypes = {
    logements: PropTypes.array.isRequired
}

export default Thumb;

/* Le tableau "logements" récupérer en props, boucle dessus pour sortir un "logement."
La balise <div> engloube les actions qui sera effectuer.
Pour chaque "logement" : 
- un containeur "thumb" className="thumb" et créer avec en clé l'ID du logement.
- selon le chemin d'accès, une image est ajouté correspondant à l'ID  avec son titre associé */
