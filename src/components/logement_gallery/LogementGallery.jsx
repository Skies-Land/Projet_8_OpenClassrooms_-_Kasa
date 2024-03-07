import { useEffect, useState } from "react";
import LogementCard from "../logement_card/LogementCard.jsx";

function LogementGallery() {
  const [logements, setLogements] = useState([]);

  /* "useEffect" avec une Array vide ça veux dire, 
  fonction qui se charge une seul fois
  au chargment du composant */
  useEffect(fetchLogements, []);

  function fetchLogements() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch(console.error);
  }

  return (
    <div className="logement-gallery">
      {logements.map((logement) => (
        <LogementCard title={logement.title} imageUrl={logement.cover} id={logement.id} />
      ))}
    </div>
  );
};

export default LogementGallery;
