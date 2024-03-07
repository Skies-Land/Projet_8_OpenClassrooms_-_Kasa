import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel.jsx";
import Tags from "../../components/tags/Tags.jsx";
import Rating from "../../components/rating/Rating.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";

function LogementPage() {
  const location = useLocation();
  // console.log("location:", location);
  // console.log("L'id du logement est :", location.state.logementById);

  const [selectedById, setSelectedById] = useState(null);
  useEffect(fetchLogementData, []);

  function fetchLogementData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((logs) => {
        const selectionLogement = logs.find((log) => log.id === location.state.logementById);
        // console.log("selectedById:", selectedById);
        setSelectedById(selectionLogement);
      })
      .catch(console.error);
  }
  if (selectedById == null) return <div>...Loading</div>

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
