import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel.jsx";
import Tags from "../../components/tags/Tags.jsx";
import Rating from "../../components/rating/Rating.jsx";
import Collapse from "../../components/collapse/Collapse.jsx";

function Logement() {
const { logementId } = useParams();
const [logement, setLogement] = useState(null);

  useEffect(() => {
    async function fetchLogement() {
      const data = await getLogementById(logementId);
      setLogement(data);
    }
    fetchLogement();
  }, [logementId]);

  if (!logement) return <div>Loading...</div>;

  return (
    <div className="logement">
      <Carousel slides={logement.pictures} />

      <div className="logement__description">
        <div className="logement__description__top">
          <div className="logement__description__top--info">
            <h1> {logement.title} </h1>
            <h2> {logement.location} </h2>
            <div className="logement__description__top--block-tags">
              {logement.tags.map((tag, index) => (
                <Tags key={index} text={tag} />
              ))}
            </div>
          </div>

          <div className="logement__description__top--host-block">
            <div className="logement__description__top--host-block--host">
              <h3> {logement.host.name} </h3>
              <img src={logement.host.picture} alt={logement.title} />
            </div>
            <div className="rating">
              <Rating rating={parseInt(logement.rating, 10)} />
            </div>
          </div>
        </div>

        <div className="logement__description--bottom">
          <Collapse title="Description">{logement.description}</Collapse>
          <Collapse title="Equipement">
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
} 

export default Logement;
