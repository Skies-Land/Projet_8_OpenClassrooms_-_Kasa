import { Link } from "react-router-dom";

function LogementCard(props) {

  // console.log("props dans logement card", props)

  return (
    <Link to="/logement" className="logementCard">

      <img src={props.imageUrl} alt={props.title} />
      <h3>{props.title}</h3>

    </Link>
  );
}

export default LogementCard;